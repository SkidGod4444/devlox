import WinningEdge from "@/components/custom/site/bentos/winning-edge";
import FaqSection from "@/components/custom/site/faq/faq";
import FounderSection from "@/components/custom/site/founder/founder";
import HeroSection from "@/components/custom/site/hero/hero";
import StacksComp from "@/components/custom/site/hero/stacks";
import ProjShowcase from "@/components/custom/site/projects/showcase";
import ServicesComp from "@/components/custom/site/services/services";
import WlcBtn from "@/components/custom/wlc.btn";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.1),rgba(200,200,200,0))]" />

      <div className="relative w-full">
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.06}
          duration={1}
          repeatDelay={1}
          className="absolute inset-0 z-[-1]"
        />
        <div className="my-10">
          <div className="flex items-center justify-center mb-0">
            <WlcBtn />
          </div>
          <HeroSection />
          <StacksComp />
        </div>
      </div>

      {/* Wrap the border elements in a container to limit their scope */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-2 border-l-2 border-border ml-20" />
        <div className="absolute inset-y-0 left-2 w-2 border-l-2 border-border ml-15" />
        <div className="absolute inset-y-0 right-0 w-2 border-r-2 border-border mr-20" />
        <div className="absolute inset-y-0 right-2 w-2 border-r-2 border-border mr-15" />
        
        <ProjShowcase />
        <WinningEdge />
        <ServicesComp/>
        <FounderSection/>
        <FaqSection />
      </div>
    </div>
  );
}