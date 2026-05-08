import Sparkle from "../components/ui/Sparkle";
import useSparkles from "../hooks/useSparkles";

const Home = () => {
    const sparkles = useSparkles(18)

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#C8E6F5]" >
            {/* Sparkle layer — renders behind everything */}
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

        "--spark-duration": `${sparkle.duration}s`,
        "--spark-delay": `${sparkle.delay}s`,
        "--spark-opacity": sparkle.opacity,

        "--spark-rotate-start": sparkle.rotateStart,
        "--spark-rotate-end": sparkle.rotateEnd,

        "--spark-drift-x": sparkle.driftX,
      }}
    />
  ))}
</div>

            {/* Content layer */}
            <div className="relative z-10 text-center px-6">
                <h1 className="font-[Yomogi] text-5xl text-[#3D2B1F] mb-3">
                    Howl's Moving Timer
                </h1>
                <h2 className="font-[Nunito] text-lg text-[#4A6741] font-normal">
                    Like Calcifer, always burning — never stopping
                </h2>
            </div>
        </div>
    );
};

export default Home;