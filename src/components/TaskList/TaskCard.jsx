import { useMemo } from "react"
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import styles from './TaskList.module.css'
import { getRandomFact } from "../../utils/randomFact";

const TaskCard = ({ task, index }) => {
  const navigate = useNavigate()
  const randomFact = useMemo(() => getRandomFact(task.facts), [task.id])

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
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
      whileTap={{ scale: 0.98, }}
      className={styles.taskCard}
      style={{
        "--task-color": task.themeColor,
        "--gradient-start": task.gradientStart,
        "--gradient-end": task.gradientEnd,
      }}
      onClick={handleClick}
      aria-label={`Select ${task.name} task`}
    >
      <div className={styles.cardGlow}
        style={{
          boxShadow: `0 0 40px 8px ${task.themeColor}33`,
        }} />

      {/* Card Background with subtle gradient */}
      <div className={styles.cardBackground} />

      {/* Decorative glow effect on hover */}
      <div className={styles.glowEffect} />

      {/* Content Container */}
      <div className={styles.cardContent}>

        {/* Image */}
        <motion.div
          className={styles.iconContainer}
          style={{
            "--task-color": task.themeColor,
            "--gradient-start": task.gradientStart,
            "--gradient-end": task.gradientEnd,
          }}
        >
          <img className={styles.icon} src={task.emoji} alt={task.name} />
        </motion.div>

        {/* Text content */}
        <div className={styles.textContent}>
          {/* Title */}
          <h3 className={styles.taskName}>
            {task.name}
          </h3>
          {/* Tagline */}
          <h4 className={styles.taskDescription}>
            {task.tagline}
          </h4>
          {/* Interesting Fact */}
          <p className="text-xs leading-relaxed mb-6 text-gray-600">
            {randomFact}
          </p>

          {/* Button */}
          <button
            onClick={handleClick}
            className={styles.ctaButton}
            style={{
              "--task-color": task.themeColor,
              "--gradient-start": task.gradientStart,
              "--gradient-end": task.gradientEnd,
            }}
          >
            Select {task.name.split(" ")[0].toLowerCase()} time →
          </button>
        </div>
      </div>
    </motion.div>
  )
};

export default TaskCard;