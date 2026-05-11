import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import styles from './TaskList.module.css'
import { getRandomFact } from "../../utils/randomFact";

const TaskCard = ({ task, index }) => {
  const navigate = useNavigate()
  const randomFact = getRandomFact(task.facts)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    rest: {
      y: 0,
      scale: 1,
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.25)",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
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

  const handleClick = () => {
    navigate(`/task/${task.id}`)
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap={{
        scale: 0.98,
      }}
      className={styles.taskCard}
      onClick={handleClick}
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
          <span 
          className={styles.icon}>
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
          <p className="text-xs leading-relaxed mb-6 text-gray-600">
          {randomFact}
        </p>

          {/* Button */}
          <button
          onClick={handleClick}
          className="w-full py-2 px-4 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Select {task.name.split(" ")[0].toLowerCase()} →
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