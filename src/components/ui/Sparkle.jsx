const Sparkle = ({ style, className }) => {
    return (
        <div
            className={`absolute rounded-full pointer-events-none ${className}`}
    style={style}
        />
    );
};

export default Sparkle;