import { motion } from 'framer-motion'
import styles from './SubTaskCard.module.css'

const SubTaskCard = ({ subtask, task, onSelect, index }) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1,
            },
        },
        hover: {
            y: -4,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className={styles.subtaskCard}
            style={{
                '--task-color': task.themeColor,
                '--gradient-start': task.gradientStart,
                '--gradient-end': task.gradientEnd,
            }}
            onClick={() => onSelect(subtask)}
            aria-label={`Select ${subtask.name} - ${subtask.duration} minutes`}
        >
            {/* Background glow */}
            <div className={styles.cardGlow} />

            {/* Content */}
            <div className={styles.cardContent}>
                <h3 className={styles.subtaskName}>{subtask.name}</h3>
                <p className={styles.subtaskDescription}>{subtask.description}</p>
                <div className={styles.durationBadge}>
                    <span className={styles.duration}>{subtask.duration}m</span>
                </div>
            </div>

            {/* Shine effect */}
            <div className={styles.shine} />
        </motion.div>
    );
};

export default SubTaskCard;