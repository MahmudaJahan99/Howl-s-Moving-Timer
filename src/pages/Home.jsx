import Sparkle from "../components/ui/Sparkle";
import useSparkles from "../hooks/useSparkles";

const Home = () => {
    const sparkles = useSparkles(18)

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#C8E6F5]" >
            {/* Sparkle layer — renders behind everything */}
            <div className="absolute inset-0 pointer-events-none">
                {sparkles.map((s) => (
                    <Sparkle
                        key={s.id}
                        style={{
                            width:  s.size,
                            height: s.size,
                            left:   `${s.left}%`,
                            bottom: "0px",
                            backgroundColor: s.color,
                            "--spark-duration": `${s.duration}s`,
                            "--spark-delay":    `${s.delay}s`,
                            "--spark-opacity":  s.opacity,
                        }}
                        className="sparkle-particle"  
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