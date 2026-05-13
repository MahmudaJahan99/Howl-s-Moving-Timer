import { motion } from 'framer-motion'
import Sparkle from '../components/ui/Sparkle'
import useSparkles from '../hooks/useSparkles'
import TaskList from '../components/TaskList/TaskList'
import styles from './Home.module.css'

const Home = () => {
    const sparkles = useSparkles(18)

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    return (
        <div>
            {/* Sparkle layer */}
            <div className="sparkle-layer">
                {sparkles.map((sparkle) => (
                    <Sparkle
                        key={sparkle.id}
                        className={`sparkle-particle sparkle-${sparkle.type}`}
                        style={{
                            width: `${sparkle.size}px`,
                            height: `${sparkle.size}px`,
                            backgroundColor: sparkle.color,
                            left: `${sparkle.left}%`,
                            top: `${sparkle.top}%`,
                            '--spark-duration': `${sparkle.duration}s`,
                            '--spark-delay': `${sparkle.delay}s`,
                            '--spark-opacity': sparkle.opacity,
                            '--spark-rotate-start': sparkle.rotateStart,
                            '--spark-rotate-end': sparkle.rotateEnd,
                            '--spark-drift-x': sparkle.driftX,
                        }}
                    />
                ))}
            </div>

            {/* Hero section */}
            <motion.section
                className={styles.hero}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.heroContent} variants={itemVariants}>
                    <h1>Howl's Moving Timer</h1>
                    <h2 className={styles.subtitle}>A Ghibli-Inspired Kitchen Companion</h2>
                </motion.div>
            </motion.section>

            {/* Task list section */}
            <TaskList />
        </div>
    );
};

export default Home;