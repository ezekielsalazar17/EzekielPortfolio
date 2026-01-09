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
      className={cn("relative flex h-[430px] w-full items-center justify-center overflow-hidden px-10", className)}
    >
      <div className="z-50 flex flex-row items-stretch justify-between max-w-lg gap-10 size-full -scale-x-100">
        <div className="flex flex-col justify-center ">
          <SkillNode ref={div7Ref}>
            <Circle className="text-black size-6" />
          </SkillNode>
        </div>

        <div className="flex flex-col justify-center ">
          <SkillNode
            ref={div6Ref}
            className="size-16"
          >
            <Circle className="text-black size-7" />
          </SkillNode>
        </div>

        <div className="z-20 flex flex-col justify-center gap-2">
          <SkillNode ref={div1Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div2Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div3Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div4Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div5Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div8Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
          <SkillNode ref={div9Ref}>
            <Circle className="z-20 text-black size-6" />
          </SkillNode>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
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
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#0bb37a"
        gradientStopColor="#0bb37a"
      />
    </div>
  );
}

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  return (
    <section
      id="about"
      className={cn("relative mx-auto w-full bg-linear-to-t from-[#022318] to-black py-24", className)}
    >
      <div className="flex items-center justify-start max-w-6xl min-h-screen mx-auto">
        <div className="relative flex flex-col items-center w-full">
          <BlurFade
            delay={0.5}
            inView
          >
            <div className="relative flex justify-center w-full h-40 mb-24">
              <h1 className="pointer-events-none absolute left-28 top-3 -translate-x-1/2 text-9xl font-semibold uppercase tracking-[0.50em] text-gray-300/5">
                About
              </h1>
              <h1 className="z-10 self-center text-4xl font-semibold uppercase tracking-[0.30em] text-[#0bb37a]">
                About
              </h1>
            </div>
          </BlurFade>

          <div className="relative flex flex-col w-full gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-col w-full">
              <div className="flex flex-col content-center w-full h-full p-8">
                <div className="flex flex-col gap-4">
                  <BlurFade
                    delay={0.25}
                    inView
                  >
                    <p className="justify-center text-3xl font-semibold text-center text-[#0bb37a]">
                      Devoted Web Developer.
                    </p>
                  </BlurFade>

                  <BlurFade
                    delay={0.5}
                    inView
                  >
                    <p className="font-light leading-6 text-center text-gray-200 text-md">
                      Hi, I&apos;m Ezekiel a Web Developer with experience in front-end development using HTML, CSS,
                      JavaScript, and React, plus WordPress development for business and content-driven websites. I also
                      have a strong background in Adobe Photoshop and Adobe Premiere Pro, enabling me to support
                      projects with high-quality visuals, branding assets, and video content. I enjoy building digital
                      products that are both functional and visually polished. My Word is guided by a passion for clean
                      design, efficient codes, and user-centered functionality.
                    </p>
                  </BlurFade>
                  <BlurFade
                    delay={0.75}
                    inView
                  >
                    <p className="font-light leading-6 text-center text-gray-200 text-md">
                      I hold a diploma in Information Technology, but it&apos;s been the real-world projects and
                      continuous learning that have truly shaped my journey. I&apos;m passionate about solving problems
                      and always pushing to building software that makes a real impact.
                    </p>
                  </BlurFade>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full p-4">
              <div className="flex items-center justify-center w-full text-white">
                <div className="flex flex-col gap-4">
                  <BlurFade
                    delay={0.75}
                    inView
                  >
                    <div className="flex gap-4 p-6 border rounded-md shadow-sm bg-black/30 border-white/20">
                      <div className="flex flex-row items-center justify-center w-12 h-12 p-2 bg-black">icon</div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#0bb37a] font-semibold text-xl">Web Development</h1>
                        <p className="font-light text-gray-200">
                          lorem ipsum dolor sit met lorem ipsum dolor sit met lorem ipsum dolor sit metlorem ipsum dolor
                          sit met
                        </p>
                      </div>
                    </div>
                  </BlurFade>

                  <BlurFade
                    delay={1}
                    inView
                  >
                    <div className="flex gap-4 p-6 border rounded-md shadow-sm bg-black/30 border-white/20">
                      <div className="flex flex-row items-center justify-center w-12 h-12 p-2 bg-black">icon</div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#0bb37a] font-semibold text-xl">Video Editing</h1>
                        <p className="font-light text-gray-200">
                          lorem ipsum dolor sit met lorem ipsum dolor sit met lorem ipsum dolor sit metlorem ipsum dolor
                          sit met
                        </p>
                      </div>
                    </div>
                  </BlurFade>

                  <BlurFade
                    delay={1.25}
                    inView
                  >
                    <div className="flex gap-4 p-6 border rounded-md shadow-sm bg-black/30 border-white/20">
                      <div className="flex flex-row items-center justify-center w-12 h-12 p-2 bg-black">icon</div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#0bb37a] font-semibold text-xl">Photo Editing</h1>
                        <p className="font-light text-gray-200">
                          lorem ipsum dolor sit met lorem ipsum dolor sit met lorem ipsum dolor sit metlorem ipsum dolor
                          sit met
                        </p>
                      </div>
                    </div>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimatedBeamMultipleOutputDemo;
