import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SubtaskCard from './SubtaskCard'
import styles from './SubtaskSelector.module.css'

const SubTaskSelector = ({ task }) => {
    const navigate = useNavigate()

    const handleSubtaskSelect = (subtask) => {
        navigate(`/timer/${task.id}/${subtask.id}`, {
            state: { task, subtask },
        })
    }

    const handleGoBack = () => {
        navigate('/')
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    return (
        <div className={styles.subtaskSelectorContainer}>
            {/* Header with back button */}
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button className={styles.backButton} onClick={handleGoBack} aria-label="Go back to tasks">
                    ← Back
                </button>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Choose Your {task.name} Time</h1>
                    <p className={styles.subtitle}>{task.tagline}</p>
                </div>
            </motion.div>

            {/* Subtask grid */}
            <motion.div
                className={styles.subtaskGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {task.subtasks.map((subtask, index) => (
                    <SubtaskCard
                        key={subtask.id}
                        subtask={subtask}
                        task={task}
                        onSelect={handleSubtaskSelect}
                        index={index}
                    />
                ))}
            </motion.div>

            {/* Decorative elements */}
            <div className={styles.decorativeElements}>
                <div className={styles.floatingShape1} />
                <div className={styles.floatingShape2} />
            </div>
        </div>
    );
};

export default SubTaskSelector;