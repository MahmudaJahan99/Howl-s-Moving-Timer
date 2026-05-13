import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import styles from './TaskList.module.css'
import { getAllTasks } from "../../utils/taskManager";
import TaskCard from "./TaskCard";

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadTasks = async () => {
            try {
                setIsLoading(true)
                await new Promise(resolve => setTimeout(resolve, 300))
                const loadedTasks = getAllTasks()
                setTasks(loadedTasks)
            } catch (error) {
                console.error('Failed to load tasks:', error)
            } finally {
                setIsLoading(false)
            }
        }
        loadTasks()
    }, [])

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner} aria-label="Loading tasks">
                    <div className={styles.spinnerInner} />
                </div>
            </div>
        )
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    }

    return (
        <section className={styles.taskList} aria-label="Available kitchen tasks">
            <motion.div
                className={styles.taskGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {tasks.map((task, index) => (
                    <motion.div
                        key={task.id}
                        className={styles.taskGridItem}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                            ease: 'easeOut',
                        }}
                    >
                        <TaskCard task={task} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TaskList;