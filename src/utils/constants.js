/**
 * Utility Constants & Helper Functions
 */

// Timer constraints
export const TIMER_CONSTANTS = {
  MIN_TIME_SECONDS: 1,
  MAX_TIME_SECONDS: 3600, // 60 minutes
  DEFAULT_TIME_SECONDS: 300, // 5 minutes
}

// Animation durations (in ms)
export const ANIMATION_DURATIONS = {
  FAST: 150,
  BASE: 250,
  SLOW: 350,
  SLOWER: 500,
  TRANSITION: 300,
}

// Sound file paths
export const SOUNDS = {
  TIMER_COMPLETE: '/assets/sounds/timer-complete.mp3',
  TICK: '/assets/sounds/tick.mp3',
  BELL: '/assets/sounds/bell.mp3',
  START: '/assets/sounds/start.mp3',
}

/**
 * Format seconds into MM:SS format
 * @param {number} totalSeconds - Total seconds to format
 * @returns {string} Formatted time string (MM:SS)
 */
export function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

/**
 * Format time for display in larger format
 * @param {number} totalSeconds - Total seconds
 * @returns {object} Object with minutes and seconds
 */
export function formatTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return {
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    totalSeconds,
  }
}

/**
 * Parse MM:SS or M:SS input to seconds
 * @param {string} input - Time input string
 * @returns {number} Total seconds
 */
export function parseTimeInput(input) {
  const parts = input.split(':')
  if (parts.length !== 2) return 0
  
  const minutes = parseInt(parts[0], 10) || 0
  const seconds = parseInt(parts[1], 10) || 0
  
  const totalSeconds = minutes * 60 + seconds
  return Math.min(Math.max(totalSeconds, TIMER_CONSTANTS.MIN_TIME_SECONDS), TIMER_CONSTANTS.MAX_TIME_SECONDS)
}

/**
 * Convert minutes to seconds
 * @param {number} minutes - Number of minutes
 * @returns {number} Total seconds
 */
export function minutesToSeconds(minutes) {
  return minutes * 60
}

/**
 * Convert seconds to minutes
 * @param {number} seconds - Number of seconds
 * @returns {number} Number of minutes
 */
export function secondsToMinutes(seconds) {
  return Math.ceil(seconds / 60)
}

/**
 * Determine timer status
 * @param {number} remaining - Remaining seconds
 * @param {number} total - Total duration seconds
 * @returns {string} Status: 'completed', 'warning', 'normal'
 */
export function getTimerStatus(remaining, total) {
  if (remaining === 0) return 'completed'
  if (remaining <= 10) return 'warning' // Last 10 seconds
  return 'normal'
}

/**
 * Check if time input is valid
 * @param {string} input - Time input string
 * @returns {boolean} Is valid time
 */
export function isValidTimeInput(input) {
  const parts = input.split(':')
  if (parts.length !== 2) return false
  
  const minutes = parseInt(parts[0], 10)
  const seconds = parseInt(parts[1], 10)
  
  return !isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Debounce function for performance
 * @param {function} fn - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {function} Debounced function
 */
export function debounce(fn, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Throttle function for performance
 * @param {function} fn - Function to throttle
 * @param {number} limit - Limit in ms
 * @returns {function} Throttled function
 */
export function throttle(fn, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Get contrasting text color for background
 * @param {string} bgColor - Background color (hex)
 * @returns {string} Text color ('light' or 'dark')
 */
export function getContrastColor(bgColor) {
  // Simple luminance calculation
  const hex = bgColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? 'dark' : 'light'
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * Request notification permission
 * @returns {Promise<string>} Permission status
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications')
    return 'denied'
  }

  if (Notification.permission === 'granted') {
    return 'granted'
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission()
    return permission
  }

  return Notification.permission
}

/**
 * Show notification
 * @param {string} title - Notification title
 * @param {object} options - Notification options
 */
export function showNotification(title, options = {}) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      ...options,
    })
  }
}

/**
 * Get emoji for task
 * @param {string} taskId - Task ID
 * @returns {string} Emoji character
 */
export function getTaskEmoji(taskId) {
  const emojiMap = {
    'boiling-eggs': '🥚',
    'heating-milk': '🥛',
    'cooking-rice': '🍚',
    'water-motor': '💧',
    'brewing-tea': '🍵',
    'steaming-vegetables': '🥦',
    'pasta-cooking': '🍝',
    'laundry-wash': '🧺',
    'meditation': '🧘',
    'dishwashing': '🍽️',
  }
  return emojiMap[taskId] || '⏱️'
}