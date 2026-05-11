/**
 * Get a random fact from an array of facts
 * @param {Array} facts - Array of facts
 * @returns {string} A random fact
 */
export function getRandomFact(facts) {
  if (!facts || facts.length === 0) return ""
  const randomIndex = Math.floor(Math.random() * facts.length)
  return facts[randomIndex]
}