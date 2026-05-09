import { useNavigate } from 'react-router-dom'
import styles from './TaskList.module.css'

function getTaskColorVariable(colorName) {
  const colorMap = {
    primary: '#2d5f4f',
    secondary: '#c97c5c',
    'accent-blue': '#6b9fb0',
    'accent-purple': '#5c4b66',
    'accent-gold': '#d4a574',
    'accent-blush': '#d9a5a0',
  }
  return colorMap[colorName] || colorMap.primary
}

const TaskCard = ({ task }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        // Navigate to subtask selection page, passing the task ID
        navigate(`/task/${task.id}`)
    }

    return (
        <button
      className={styles.taskCard}
      onClick={handleClick}
      style={{
        '--task-color': getTaskColorVariable(task.color),
      }}
      aria-label={`Select ${task.name} task`}
    >
      {/* Card Background with subtle gradient */}
      <div className={styles.cardBackground} />
 
      {/* Decorative glow effect on hover */}
      <div className={styles.glowEffect} />
 
      {/* Content Container */}
      <div className={styles.cardContent}>
        {/* Large icon/emoji */}
        <div className={styles.iconContainer}>
          <span className={styles.icon} role="img" aria-hidden="true">
            {task.emoji}
          </span>
          {/* Subtle shine effect */}
          <div className={styles.shine} />
        </div>
    );
    {/* Text content */}
        <div className={styles.textContent}>
          <h3 className={styles.taskName}>{task.name}</h3>
          <p className={styles.taskDescription}>{task.description}</p>
 
          {/* Subtask count indicator */}
          <div className={styles.subtaskHint}>
            <span className={styles.subtaskCount}>
              {task.subtasks.length} options
            </span>
          </div>
        </div>
      </div>
 
      {/* Arrow indicator */}
      <div className={styles.arrowIndicator}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
};

export default TaskCard;