import { motion } from 'framer-motion'
import styles from './TimerAdjustment.module.css'
import Button from '../common/Button'

const TimerAdjustment = ({
    remainingSeconds,
    isRunning,
    onIncrease,
    onDecrease,
    taskColor,
}) => {
    // Don't show adjustment buttons if timer is running
    if (isRunning) return null

    return (
        <motion.div
            className={styles.adjustmentContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
        >
            <div className={styles.adjustmentLabel}>Adjust Time</div>

            <div className={styles.buttonsGroup}>
                {/* Decrease button */}
                <Button
                    variant="primary"
                    shape="round"
                    taskColor={taskColor}
                    onClick={onDecrease}
                    disabled={remainingSeconds <= 60}
                    aria-label="Decrease time by 1 minute"
                >
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </Button>

                {/* Time display */}
                <motion.div
                    key={Math.floor(remainingSeconds / 60)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className={styles.timeValue}
                >
                    {Math.floor(remainingSeconds / 60)} min
                </motion.div>

                {/* Increase button */}
                <Button
                    variant="primary"
                    shape="round"
                    taskColor={taskColor}
                    onClick={onIncrease}
                    aria-label="Increase time by 1 minute"
                >
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" />
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </Button>
            </div>

            <p className={styles.hint}>Only adjust before starting</p>
        </motion.div>
    )
}

export default TimerAdjustment