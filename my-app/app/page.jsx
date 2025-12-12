import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <div>
      {/* Background layer */}
      <div className="grid-background"></div>

      {/* Content layer */}
      <HeroSection />
    </div>
  );
}
