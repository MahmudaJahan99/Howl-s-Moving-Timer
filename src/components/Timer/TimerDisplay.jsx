import { motion } from 'framer-motion'
import { formatTime } from '../../utils/constants'
import styles from './Timer.module.css'

const TimerDisplay = ({ remainingSeconds, totalSeconds, isCompleted, taskColor }) => {
    const progress = (remainingSeconds / totalSeconds) * 100
    const isWarning = remainingSeconds <= 10 && remainingSeconds > 0

    // Split time into minutes and seconds for large display
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = remainingSeconds % 60

    const displayVariants = {
        normal: {
            scale: 1,
            opacity: 1,
        },
        warning: {
            scale: [1, 1.02, 1],
            opacity: [1, 0.9, 1],
            transition: {
                duration: 0.6,
                repeat: Infinity,
            },
        },
        completed: {
            scale: 1.05,
            opacity: 1,
        },
    }

    const numberVariants = {
        enter: {
            opacity: 0,
            y: 10,
        },
        center: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <div className={styles.timerDisplayContainer}>
      {/* Progress ring background */}
      <svg className={styles.progressRing} viewBox="0 0 300 300">
        {/* Background circle */}
        <circle cx="150" cy="150" r="140" className={styles.progressBg} />
 
        {/* Progress circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          className={styles.progressFill}
          initial={{ strokeDashoffset: 879.6 }}
          animate={{ strokeDashoffset: 879.6 - (progress / 100) * 879.6 }}
          style={{
            '--task-color': taskColor,
            filter: isWarning ? `drop-shadow(0 0 8px ${taskColor}88)` : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
 
      {/* Time display */}
      <motion.div
        className={styles.timeDisplay}
        variants={displayVariants}
        animate={isCompleted ? 'completed' : isWarning ? 'warning' : 'normal'}
      >
        <div className={styles.timeContainer}>
          <motion.div
            key={`${minutes}:${seconds}`}
            variants={numberVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.timeValue}
          >
            <span className={styles.minutes}>{String(minutes).padStart(2, '0')}</span>
            <span className={styles.separator}>:</span>
            <span className={styles.seconds}>{String(seconds).padStart(2, '0')}</span>
          </motion.div>
        </div>
 
        {isCompleted && (
          <motion.div
            className={styles.completedLabel}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✓ Complete!
          </motion.div>
        )}
      </motion.div>
 
      {/* Status indicator */}
      <motion.div
        className={`${styles.statusIndicator} ${
          isCompleted ? styles.completed : isWarning ? styles.warning : styles.normal
        }`}
        animate={{
          boxShadow: isWarning
            ? [
                `0 0 20px ${taskColor}44`,
                `0 0 40px ${taskColor}88`,
                `0 0 20px ${taskColor}44`,
              ]
            : 'none',
        }}
        transition={{
          duration: 1,
          repeat: isWarning ? Infinity : 0,
        }}
        style={{
          '--task-color': taskColor,
        }}
      />
    </div>
    );
};

export default TimerDisplay;