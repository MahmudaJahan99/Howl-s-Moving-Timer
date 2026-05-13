import tasksData from '../data/tasks'

/**
 * Get all tasks
 * @returns {Array} Array of all tasks
 */
export function getAllTasks() {
  return tasksData.tasks || []
}

/**
 * Get a specific task by ID
 * @param {string} taskId - Task ID
 * @returns {Object|null} Task object or null if not found
 */
export function getTaskById(taskId) {
  const tasks = getAllTasks()
  return tasks.find((task) => task.id === taskId) || null
}

/**
 * Get a specific subtask from a task
 * @param {string} taskId - Task ID
 * @param {string} subtaskId - Subtask ID
 * @returns {Object|null} Subtask object or null if not found
 */
export function getSubtaskById(taskId, subtaskId) {
  const task = getTaskById(taskId)
  if (!task) return null
  return task.subtasks.find((subtask) => subtask.id === subtaskId) || null
}

/**
 * Search tasks by name
 * @param {string} query - Search query
 * @returns {Array} Matching tasks
 */
export function searchTasks(query) {
  const tasks = getAllTasks()
  const lowerQuery = query.toLowerCase()
  return tasks.filter((task) => task.name.toLowerCase().includes(lowerQuery))
}

/**
 * Get tasks by category (if applicable)
 * @param {string} category - Category name
 * @returns {Array} Tasks in category
 */
export function getTasksByCategory(category) {
  const tasks = getAllTasks()
  return tasks.filter((task) => task.category === category)
}