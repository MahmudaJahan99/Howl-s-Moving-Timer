import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import styles from './TaskList.module.css'

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.25)",
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow:
      `
      0 22px 45px rgba(0,0,0,0.18),
      0 0 30px rgba(120,220,255,0.25),
      0 0 60px rgba(130,255,180,0.18),
      0 0 100px rgba(120,220,255,0.12)
      `,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap={{
        scale: 0.98,
      }}
      className={styles.taskCard}
      onClick={handleClick}
      style={{
        '--task-color': getTaskColorVariable(task.color),
      }}
      aria-label={`Select ${task.name} task`}
    >
      <div className={styles.cardGlow} />

      {/* Card Background with subtle gradient */}
      <div className={styles.cardBackground} />

      {/* Decorative glow effect on hover */}
      <div className={styles.glowEffect} />

      {/* Content Container */}
      <div className={styles.cardContent}>
        {/* Large icon/emoji */}
        <motion.div
          className={styles.iconContainer}
          whileHover={{
            rotate: -3,
            y: -2,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <span className={styles.icon}>
            {task.emoji}
          </span>
        </motion.div>

        {/* Text content */}
        <div className={styles.textContent}>
          {/* Title */}
          <h3 className={styles.taskName}>
            {task.name}
          </h3>
          {/* Tagline */}
          <p className={styles.taskDescription}>
            {task.tagline}
          </p>
          {/* Interesting Fact */}
          <p
            className="text-xs leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {task.fact}
          </p>

          {/* Button */}
          <button
            onClick={handleClick}
            className="w-full py-2 px-4 border border-gray-300 rounded text-sm font-medium transition-all hover:bg-gray-50"
            style={{ color: "var(--text-primary)" }}
          >
            {task.buttonText} →
          </button>
        </div>
      </div>

      {/* Arrow indicator */}
      <motion.div
        className={styles.arrowIndicator}
        whileHover={{ x: 4 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  )
};

export default TaskCard;