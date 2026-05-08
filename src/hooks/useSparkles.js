import { useState, useEffect } from "react";

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const sparkleTypes = ["circle", "diamond", "star-4", "star-6", "star-cross"];

const createSparkle = (id) => {
  const startRotate = randomBetween(0, 360);

  const rotateAmount = (Math.random() > 0.5 ? 1 : -1) * randomBetween(180, 720);

  return {
    id,

    size: randomBetween(5, 25),

    left: randomBetween(0, 100),
    top: randomBetween(0, 100),

    delay: randomBetween(0, 1),

    duration: randomBetween(3, 6),

    opacity: randomBetween(0.2, 1),

    rotateStart: `${startRotate}deg`,
    rotateEnd: `${startRotate + rotateAmount}deg`,

    driftX: `${randomBetween(-40, 40)}px`,

    type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],

    color: ["#F5C842", "#FFE082", "#FFAB40", "#FF7043", "#FFF8DC"][
      Math.floor(Math.random() * 5)
    ],
  };
};

const useSparkles = (count = 18) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Creates the initial batch of sparkles
    const initial = Array.from({ length: count }, (_, i) => createSparkle(i));
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
