import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTimer } from '../../hooks/useTimer'
import { useSound } from '../../hooks/useSound'
import { minutesToSeconds } from '../../utils/constants'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import TimerAdjustment from './TimerAdjustment'
import styles from './Timer.module.css'
import Button from '../common/Button'

const Timer = ({ task, subtask }) => {
    const navigate = useNavigate()

    // Initialize timer with subtask duration
    const initialDuration = minutesToSeconds(subtask.duration)
    const timer = useTimer(initialDuration)

    // Initialize sounds
    const completionSound = useSound('/assets/sounds/timer-complete.mp3')

    /* Handle timer completion */
    useEffect(() => {
        if (timer.isCompleted) {
            // Play looping sound
            completionSound.playLoop()

            // Show notification
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`${subtask.name} Complete!`, {
                    body: `Your ${task.name} is ready!`,
                    icon: task.emoji || '/favicon.svg',
                })
            }
        }
    }, [timer.isCompleted, subtask, task, completionSound])

    /* Handle closing the timer */
    const handleClose = () => {
        // Stop any playing sounds
        completionSound.stop()

        // Reset timer
        timer.reset()

        // Navigate back to home
        navigate('/')
    }

    /* Handle completing and closing */
    const handleComplete = () => {
        completionSound.stop()
        timer.reset()
        navigate('/')
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 },
        },
    }

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 },
        },
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={styles.overlay}
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={handleClose}
            >
                <motion.div
                    className={styles.modal}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        '--task-color': task.themeColor,
                    }}
                >
                    {/* Close button */}
                    <Button
                        className={styles.closeButton}
                        onClick={handleClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Close timer"
                    >
                        ✕
                    </Button>

                    {/* Header */}
                    <motion.h2
                        className={styles.header}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.taskName}>{task.name}</span>
                        <span className={styles.subtaskName}>({subtask.name})</span>
                    </motion.h2>

                    {/* Timer display */}
                    <motion.div
                        className={styles.timerSection}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <TimerDisplay
                            remainingSeconds={timer.remainingSeconds}
                            totalSeconds={timer.totalSeconds}
                            isCompleted={timer.isCompleted}
                            taskColor={task.themeColor}
                        />
                    </motion.div>

                    {/* Timer adjustment (only when not running and not completed) */}
                    {!timer.isRunning && !timer.isCompleted && (
                        <TimerAdjustment
                            remainingSeconds={timer.remainingSeconds}
                            isRunning={timer.isRunning}
                            onIncrease={() => timer.increaseTime(60)}
                            onDecrease={() => timer.decreaseTime(60)}
                            taskColor={task.themeColor}
                        />
                    )}

                    {/* Controls */}
                    <TimerControls
                        isRunning={timer.isRunning}
                        isCompleted={timer.isCompleted}
                        onStart={timer.start}
                        onPause={timer.pause}
                        onResume={timer.resume}
                        onReset={timer.isCompleted ? handleComplete : timer.reset}
                        taskColor={task.themeColor}
                        hasStarted={timer.remainingSeconds !== timer.totalSeconds}
                    />

                    {/* Completion animation */}
                    {timer.isCompleted && (
                        <motion.div
                            className={styles.completionOverlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className={styles.confetti}
                                animate={{
                                    y: [0, -20, -40],
                                    opacity: [1, 0.8, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                ✨
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Timer