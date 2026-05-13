import { useCallback, useRef } from 'react'

/**
 * Custom hook for managing audio playback
 * Handles multiple sounds and provides play/stop controls
 */
export function useSound(soundPath) {
  const audioRef = useRef(null)
  const isPlayingRef = useRef(false)

  /**
   * Play sound once
   */
  const play = useCallback(async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(soundPath)
        audioRef.current.preload = 'auto'
      }

      // Reset to start and play
      audioRef.current.currentTime = 0
      await audioRef.current.play()
      isPlayingRef.current = true
    } catch (error) {
      console.error('Error playing sound:', error)
    }
  }, [soundPath])

  /**
   * Loop sound (for timer completion)
   */
  const playLoop = useCallback(async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(soundPath)
        audioRef.current.preload = 'auto'
        audioRef.current.loop = true
      }

      audioRef.current.currentTime = 0
      await audioRef.current.play()
      isPlayingRef.current = true
    } catch (error) {
      console.error('Error playing looped sound:', error)
    }
  }, [soundPath])

  /**
   * Stop sound
   */
  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      isPlayingRef.current = false
    }
  }, [])

  /**
   * Toggle between play and pause
   */
  const toggle = useCallback(async () => {
    if (isPlayingRef.current) {
      stop()
    } else {
      await play()
    }
  }, [play, stop])

  return {
    play,
    playLoop,
    stop,
    toggle,
    isPlaying: isPlayingRef.current,
  }
}

/**
 * Sound Manager - handles multiple sounds
 */
export class SoundManager {
  constructor() {
    this.sounds = {}
  }

  /**
   * Register a sound
   */
  register(name, path) {
    this.sounds[name] = new Audio(path)
    this.sounds[name].preload = 'auto'
  }

  /**
   * Play a registered sound
   */
  play(name) {
    if (this.sounds[name]) {
      this.sounds[name].currentTime = 0
      this.sounds[name].play().catch((e) => console.error('Error playing sound:', e))
    }
  }

  /**
   * Stop a sound
   */
  stop(name) {
    if (this.sounds[name]) {
      this.sounds[name].pause()
      this.sounds[name].currentTime = 0
    }
  }

  /**
   * Loop a sound
   */
  loop(name) {
    if (this.sounds[name]) {
      this.sounds[name].loop = true
      this.sounds[name].currentTime = 0
      this.sounds[name].play().catch((e) => console.error('Error playing sound:', e))
    }
  }

  /**
   * Stop all sounds
   */
  stopAll() {
    Object.values(this.sounds).forEach((sound) => {
      sound.pause()
      sound.currentTime = 0
    })
  }
}

// Create singleton instance
export const soundManager = new SoundManager()