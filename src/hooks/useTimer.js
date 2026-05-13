import { useState, useEffect, useRef, useCallback } from 'react'
import { TIMER_CONSTANTS } from '../utils/constants'

/**
 * Custom hook for managing timer state and logic
 * Handles: starting, pausing, resuming, resetting, and tick events
 */
export function useTimer(initialDuration = TIMER_CONSTANTS.DEFAULT_TIME_SECONDS) {
  const [totalSeconds, setTotalSeconds] = useState(initialDuration)
  const [remainingSeconds, setRemainingSeconds] = useState(initialDuration)
  const [isRunning, setIsRunning] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Use ref to track interval ID for cleanup
  const intervalRef = useRef(null)

  /**
   * Start the timer
   */
  const start = useCallback(() => {
    if (remainingSeconds > 0) {
      setIsRunning(true)
    }
  }, [remainingSeconds])

  /**
   * Pause the timer
   */
  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  /**
   * Resume the timer from where it was paused
   */
  const resume = useCallback(() => {
    if (remainingSeconds > 0 && !isCompleted) {
      setIsRunning(true)
    }
  }, [remainingSeconds, isCompleted])

  /**
   * Reset timer to initial duration
   */
  const reset = useCallback(() => {
    setIsRunning(false)
    setRemainingSeconds(totalSeconds)
    setIsCompleted(false)
  }, [totalSeconds])

  /**
   * Set a custom duration
   */
  const setDuration = useCallback((seconds) => {
    const validSeconds = Math.min(
      Math.max(seconds, TIMER_CONSTANTS.MIN_TIME_SECONDS),
      TIMER_CONSTANTS.MAX_TIME_SECONDS
    )
    setTotalSeconds(validSeconds)
    setRemainingSeconds(validSeconds)
    setIsCompleted(false)
  }, [])

  /**
   * Increase time by specified amount
   */
  const increaseTime = useCallback((seconds = 60) => {
    setRemainingSeconds((prev) =>
      Math.min(prev + seconds, TIMER_CONSTANTS.MAX_TIME_SECONDS)
    )
    setTotalSeconds((prev) =>
      Math.min(prev + seconds, TIMER_CONSTANTS.MAX_TIME_SECONDS)
    )
  }, [])

  /**
   * Decrease time by specified amount
   */
  const decreaseTime = useCallback((seconds = 60) => {
    setRemainingSeconds((prev) =>
      Math.max(prev - seconds, TIMER_CONSTANTS.MIN_TIME_SECONDS)
    )
    setTotalSeconds((prev) =>
      Math.max(prev - seconds, TIMER_CONSTANTS.MIN_TIME_SECONDS)
    )
  }, [])

  /**
   * Main timer effect - handles the countdown
   */
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        const newValue = prev - 1

        // Timer completed
        if (newValue <= 0) {
          setIsRunning(false)
          setIsCompleted(true)
          return 0
        }

        return newValue
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  return {
    // State
    totalSeconds,
    remainingSeconds,
    isRunning,
    isCompleted,

    // Actions
    start,
    pause,
    resume,
    reset,
    setDuration,
    increaseTime,
    decreaseTime,
  }
}