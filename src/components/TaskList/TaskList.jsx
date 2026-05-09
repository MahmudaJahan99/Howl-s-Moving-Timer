import { useEffect, useState } from "react";
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

    return (
        <section className={styles.taskList} aria-label="Available kitchen tasks">
      <div className={styles.taskGrid}>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={styles.taskGridItem}
            style={{
              '--item-index': index,
            }}
          >
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </section>
    );
};

export default TaskList;