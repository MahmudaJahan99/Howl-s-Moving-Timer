/**
 * Kitchen Tasks Database
 * Each task has subtasks with predefined durations in minutes
 */

export const KITCHEN_TASKS = [
  {
    id: 'boiling-eggs',
    name: 'Boiling Eggs',
    icon: '🥚',
    color: 'secondary', // rust
    description: 'Perfect eggs every time',
    subtasks: [
      { id: 'soft-boil', name: 'Soft Boil', duration: 4 },
      { id: 'medium-boil', name: 'Medium Boil', duration: 6 },
      { id: 'hard-boil', name: 'Hard Boil', duration: 8 },
    ],
  },
  {
    id: 'heating-milk',
    name: 'Heating Milk',
    icon: '🥛',
    color: 'accent-blush',
    description: 'Warm milk for breakfast',
    subtasks: [
      { id: 'lukewarm', name: 'Lukewarm', duration: 2 },
      { id: 'warm', name: 'Warm', duration: 3 },
      { id: 'hot', name: 'Hot', duration: 4 },
    ],
  },
  {
    id: 'cooking-rice',
    name: 'Cooking Rice',
    icon: '🍚',
    color: 'primary',
    description: 'Fluffy, fragrant rice',
    subtasks: [
      { id: 'white-rice', name: 'White Rice', duration: 18 },
      { id: 'brown-rice', name: 'Brown Rice', duration: 35 },
      { id: 'basmati', name: 'Basmati', duration: 12 },
    ],
  },
  {
    id: 'water-motor',
    name: 'Water Motor',
    icon: '💧',
    color: 'accent-blue',
    description: 'Fill water tanks',
    subtasks: [
      { id: 'pump-10l', name: 'Pump 10L', duration: 3 },
      { id: 'pump-20l', name: 'Pump 20L', duration: 6 },
      { id: 'pump-50l', name: 'Pump 50L', duration: 15 },
    ],
  },
  {
    id: 'brewing-tea',
    name: 'Brewing Tea',
    icon: '🍵',
    color: 'primary',
    description: 'Sip your perfect cup',
    subtasks: [
      { id: 'green-tea', name: 'Green Tea', duration: 3 },
      { id: 'black-tea', name: 'Black Tea', duration: 5 },
      { id: 'herbal-tea', name: 'Herbal Tea', duration: 7 },
    ],
  },
  {
    id: 'steaming-vegetables',
    name: 'Steaming Vegetables',
    icon: '🥦',
    color: 'primary',
    description: 'Fresh and crisp veggies',
    subtasks: [
      { id: 'broccoli', name: 'Broccoli', duration: 4 },
      { id: 'carrots', name: 'Carrots', duration: 6 },
      { id: 'mixed', name: 'Mixed Vegetables', duration: 8 },
    ],
  },
  {
    id: 'pasta-cooking',
    name: 'Cooking Pasta',
    icon: '🍝',
    color: 'secondary',
    description: 'Al dente or soft',
    subtasks: [
      { id: 'al-dente', name: 'Al Dente', duration: 8 },
      { id: 'soft', name: 'Soft', duration: 10 },
    ],
  },
  {
    id: 'laundry-wash',
    name: 'Laundry Washing',
    icon: '🧺',
    color: 'accent-blue',
    description: 'Clean clothes cycle',
    subtasks: [
      { id: 'quick-wash', name: 'Quick Wash', duration: 15 },
      { id: 'normal-wash', name: 'Normal Wash', duration: 30 },
      { id: 'delicate', name: 'Delicate Cycle', duration: 45 },
    ],
  },
  {
    id: 'meditation',
    name: 'Meditation & Break',
    icon: '🧘',
    color: 'accent-purple',
    description: 'Mindful moments',
    subtasks: [
      { id: 'short-break', name: 'Short Break', duration: 5 },
      { id: 'medium-break', name: 'Medium Break', duration: 10 },
      { id: 'long-break', name: 'Long Break', duration: 15 },
    ],
  },
  {
    id: 'dishwashing',
    name: 'Dishwashing',
    icon: '🍽️',
    color: 'secondary',
    description: 'Sparkling clean dishes',
    subtasks: [
      { id: 'quick-wash', name: 'Quick Wash', duration: 10 },
      { id: 'deep-clean', name: 'Deep Clean', duration: 20 },
    ],
  },
]

/**
 * Get task by ID
 */
export function getTaskById(taskId) {
  return KITCHEN_TASKS.find(task => task.id === taskId)
}

/**
 * Get subtask by IDs
 */
export function getSubtaskById(taskId, subtaskId) {
  const task = getTaskById(taskId)
  if (!task) return null
  return task.subtasks.find(st => st.id === subtaskId)
}

/**
 * Get duration in seconds
 */
export function getDurationSeconds(taskId, subtaskId) {
  const subtask = getSubtaskById(taskId, subtaskId)
  return subtask ? subtask.duration * 60 : 0
}

/**
 * Convert seconds to minutes
 */
export function secondsToMinutes(seconds) {
  return Math.ceil(seconds / 60)
}