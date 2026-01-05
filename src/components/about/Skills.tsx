"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

type SkillNodeProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: React.ReactNode;
};

const SkillNode = forwardRef<HTMLDivElement, SkillNodeProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

SkillNode.displayName = "SkillNode";

function BeamDiagram({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10", className)}
    >
      <div className="flex flex-row items-stretch justify-between max-w-lg gap-10 size-full">
        <div className="flex flex-col justify-center">
          <SkillNode ref={div7Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
        </div>

        <div className="flex flex-col justify-center">
          <SkillNode
            ref={div6Ref}
            className="size-16"
          >
            <Circle className="text-black size-7" />
          </SkillNode>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <SkillNode ref={div1Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div2Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div3Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div4Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div5Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div8Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
          <SkillNode ref={div9Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        reverse
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
        className=""
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div6Ref}
        duration={3}
        reverse
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
    </div>
  );
}

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  return (
    <section className={cn("relative mx-auto w-full bg-linear-to-t from-[#022318] to-black min-h-screen", className)}>
      <div className="flex items-center justify-center max-w-6xl py-32 mx-auto">
        <div className="relative flex flex-col items-center w-full">
          <BlurFade
            delay={0.5}
            inView
          >
            <div className="relative flex justify-center w-full h-40 mb-12">
              <h1 className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 text-9xl font-semibold uppercase tracking-[0.50em] text-gray-300/05">
                Skills
              </h1>
              <h1 className="z-10 self-center text-4xl font-semibold uppercase tracking-[0.30em] text-[#0bb37a]">
                Skills
              </h1>
            </div>
          </BlurFade>

          <div className="relative flex flex-col w-full gap-8 lg:flex-row lg:items-center">
            <div className="flex items-center justify-center w-full text-white lg:w-1/2">
              <div className="w-full">
                <BlurFade
                  delay={0.25}
                  inView
                >
                  <BeamDiagram />
                </BlurFade>
              </div>
            </div>

            <div className="flex flex-col w-full p-4 text-white border lg:w-1/2 border-gray-300/20 rounded-2xl">
              <div className="flex flex-col w-full gap-4">
                <BlurFade
                  delay={0.5}
                  inView
                >
                  <p className="leading-8 text-gray-200 text-md">
                    Hi, I&apos;m Ezekiel a web developer with experience in front-end development using HTML, CSS,
                    JavaScript, and React, plus WordPress development for business and content-driven websites. I also
                    have a strong background in Adobe Photoshop and Adobe Premiere Pro, enabling me to support projects
                    with high-quality visuals, branding assets, and video content. I enjoy building digital products
                    that are both functional and visually polished.
                  </p>
                </BlurFade>
                <BlurFade
                  delay={0.75}
                  inView
                >
                  <div className="leading-8 text-gray-200 text-md">asd</div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimatedBeamMultipleOutputDemo;
