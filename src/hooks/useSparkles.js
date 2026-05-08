import { useState, useEffect } from "react";

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const createSparkle = (id) => ({
    id,
    size: randomBetween(4, 10),           // px — how big the dot is
    left: randomBetween(5, 95),           // % — horizontal position
    delay: randomBetween(0, 4),           // s — when it starts floating up
    duration: randomBetween(4, 8),        // s — how long the float takes
    opacity: randomBetween(0.4, 1),
    color: ["#F5C842", "#FFE082", "#FFAB40", "#FF7043"][
        Math.floor(Math.random() * 4)     // Calcifer ember colors
    ],
});

const useSparkles = (count = 18) => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        // Creates the initial batch of sparkles
        const initial = Array.from({ length: count }, (_, i) =>
            createSparkle(i)
        );
        setSparkles(initial);

        // Every 2.5s, replace one random sparkle to keep it fresh
        const interval = setInterval(() => {
            setSparkles((prev) => {
                const idx = Math.floor(Math.random() * count);
                const updated = [...prev];
                updated[idx] = createSparkle(Date.now()); // new unique id
                return updated;
            });
        }, 2500);

        return () => clearInterval(interval); // ← CLEANUP — very important!
    }, []); // ← empty array = run once on mount

    return sparkles;
};

export default useSparkles;