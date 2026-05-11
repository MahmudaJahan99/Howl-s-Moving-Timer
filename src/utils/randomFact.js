/**
 * Get a random fact from a task
 * @param {Array} facts - Array of facts from a task
 * @returns {string} A random fact
 */
export function getRandomFact(facts) {
  const randomIndex = Math.floor(Math.random() * facts.length)
  return facts[randomIndex]
}

/**
 * Get a random fact by task ID
 * @param {string} taskId - The task ID
 * @param {Array} allTasks - All tasks array
 * @returns {string} A random fact or null if task not found
 */
export function getRandomFactByTaskId(taskId, allTasks) {
  const task = allTasks.find(t => t.id === taskId)
  if (!task || !task.facts) return null
  return getRandomFact(task.facts)
}