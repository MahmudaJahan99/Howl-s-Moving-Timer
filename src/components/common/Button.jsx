import { motion } from "framer-motion";
import styles from "./Button.module.css";

const Button = ({
    children,
    icon,
    onClick,
    variant = "primary",
    shape = "default",
    ariaLabel,
    className = "",
    disabled = false,
    taskColor,
    type = "button",
}) => {
    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={!disabled ? "hover" : undefined}
            whileTap={!disabled ? "tap" : undefined}
            className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[shape]}
        ${className}
      `}
            onClick={onClick}
            aria-label={ariaLabel}
            disabled={disabled}
            type={type}
            style={{
                "--task-color": taskColor,
            }}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children && <span>{children}</span>}
        </motion.button>
    );
};

export default Button;