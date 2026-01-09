"use client";

import { useEffect, useState } from "react";
import About from "../components/about/AboutMe";
import Contact from "../components/contacts/Contact";
import HeroPage from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import { TracingBeam } from "../components/ui/tracing-beam";
import Works from "../components/works/Works";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) {
      setShowArrow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowArrow(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="">
      <TracingBeam className="w-full min-h-screen bg-black">
        <div className="sticky z-50 top-1">
          <Navigation />
        </div>
        <HeroPage />
        <About />
        <Works />
        <Contact />
        {showArrow && (
          <a
            href="#hero"
            aria-label="Back to hero"
            className="fixed flex items-center justify-center w-10 h-10 text-black transition-all duration-300 ease-in bg-red-200 rounded-full right-5 bottom-5"
          >
            O
          </a>
        )}
      </TracingBeam>
    </div>
  );
}
