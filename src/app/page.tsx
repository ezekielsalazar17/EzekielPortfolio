import About from "../components/about/Skills";
import HeroPage from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import { TracingBeam } from "../components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="">
      <TracingBeam className="w-full">
        <div className="sticky z-50 top-1">
          <Navigation />
        </div>

        <HeroPage />
        <About />
      </TracingBeam>
    </div>
  );
}
