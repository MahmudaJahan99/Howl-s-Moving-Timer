import { motion } from 'framer-motion'
import styles from './TimerControls.module.css'
import Button from '../common/Button';

const TimerControls = ({ isRunning,
    isCompleted,
    onStart,
    onPause,
    onResume,
    onReset,
    taskColor,
    hasStarted, }) => {

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
        <motion.div
            className={styles.controlsContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.buttonsGroup}>
                {/* Play/Pause Button */}
                {!isRunning && !isCompleted && !hasStarted && (
                    <Button
                        variant="primary"
                        taskColor={taskColor}
                        onClick={onStart}
                        aria-label="Start timer"
                        icon={
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <polygon points="5 3 19 12 5 21" fill="currentColor" />
                            </svg>
                        }
                    >
                        Start
                    </Button>
                )}
                {isRunning && (
                    <Button
                        variant="primary"
                        taskColor={taskColor}
                        onClick={onPause}
                        aria-label="Pause timer"
                        icon={
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                            </svg>
                        }
                    >
                        Pause
                    </Button>
                )}

                {/* Resume Button (when paused) */}
                {!isRunning && !isCompleted && hasStarted && (
                    <Button
                        variant="primary"
                        taskColor={taskColor}
                        onClick={onResume}
                        aria-label="Resume timer"
                        icon={
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <polygon points="5 3 19 12 5 21" fill="currentColor" />
                            </svg>
                        }
                    >
                        Resume
                    </Button>
                )}

                {/* Reset Button */}
                <Button
                    variant="primary"
                    taskColor={taskColor}
                    onClick={onReset}
                    aria-label="Reset timer"
                    icon={
                        <svg viewBox="0 0 24 24" className={styles.icon}>
                            <path
                                d="M12 5V1M12 5a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10 5 5 0 010-10z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    }
                >
                    Reset
                </Button>

                {/* Dismiss Button (when completed) */}
                {isCompleted && (
                    <Button
                        variant="primary"
                        taskColor={taskColor}
                        onClick={onReset}
                        aria-label="Dismiss completion"
                        icon={
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        }
                    >
                        Done
                    </Button>
                )}
            </div>
        </motion.div>
    );
};

export default TimerControls;