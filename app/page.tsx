import HeroSection from "@/components/custom/site/hero/hero";
import StacksComp from "@/components/custom/site/hero/stacks";
import WlcBtn from "@/components/custom/wlc.btn";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full w-full overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.1),rgba(200,200,200,0))]"/>
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.06}
        duration={1}
        repeatDelay={1}
        className="z-[-2]"
      />
      <div className="my-10">
      <div className="flex items-center justify-center mb-0">
        <WlcBtn/>
      </div>
      <HeroSection/>
      <StacksComp/>
      </div>
    </div>
  );
}
