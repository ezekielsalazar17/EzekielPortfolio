import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const itemPhotos = [
  { name: "HTML", imageSrc: "/images/html.png" },
  { name: "CSS", imageSrc: "/images/css.png" },
  { name: "JavaScript", imageSrc: "/images/javascript.png" },
  { name: "React", imageSrc: "/images/react1.png" },
];

const HeroPage = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto bg-linear-to-b from-[#022318] via-black to-black text-white"
    >
      <div className="relative h-full max-w-6xl mx-auto">
        <div className="flex flex-col justify-start">
          <div className="relative flex flex-row w-full h-screen">
            <div className="flex w-full pb-16">
              <div className="flex flex-col items-start justify-center w-1/2 space-y-4">
                <BlurFade
                  delay={0.25}
                  inView
                >
                  <p className="text-[#0bb37a] text-sm font-semibold uppercase tracking-[0.28em]">
                    Front-End Developer
                  </p>
                </BlurFade>
                <h1 className="text-2xl font-extrabold leading-tight md:text-5xl">
                  <BlurFade delay={0.5}>
                    <span className="text-gray-200 transition duration-300 ease-in-out">Hi, I&apos;m </span>
                    <span className="text-transparent bg-linear-to-r from-[#066b49] via-[#0bb37a] to-[#066b49] bg-clip-text">
                      Ezekiel
                    </span>
                  </BlurFade>
                </h1>
                <BlurFade delay={0.75}>
                  <p className="text-gray-200 text-md">
                    Hi, I&apos;m Ezekiel a <span className="text-[#0bb37a] font-semibold "> Web Developer</span> with
                    experience in Front-End Development using HTML, CSS, JavaScript, and React, plus WordPress
                    development for business and content-driven websites. .
                  </p>
                </BlurFade>

                <BlurFade delay={1}>
                  <div className="flex flex-row gap-4 mt-2">
                    <ShimmerButton className="bg-[#0bb37a] text-gray-300 hover:text-[#0bb37a]">
                      Contact Me
                    </ShimmerButton>
                    <Button className="mt-2 bg-transparent hover:bg-transparent text-[#0bb37a]">Download CV</Button>
                  </div>
                </BlurFade>
              </div>

              <div className="flex items-center justify-center w-1/2 h-full ">
                <BlurFade delay={1}>
                  <div className="relative flex items-center justify-center border border-dashed h-96 w-96 border-[#0bb37a] ">
                    <div className="absolute flex items-center text-white text-sm tracking-[0.28em]">
                      Photo Placeholder
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between px-4 h-50">
            <BlurFade
              delay={0.25}
              inView
            >
              <div className="flex flex-row justify-center w-full text-sm text-gray-200/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tincidunt elit, sit amet feugiat erat.
                Donec nec pretium justo, eget consectetur lacus. Morbi vel accumsan ante, vel elementum nisi. Nam ac
                accumsan dolor, eget lacinia turpis. Suspendisse faucibus, mi laoreet blandit efficitur, tellus odio
                tincidunt ante, vel maximus dolor diam vitae erat.
              </div>
            </BlurFade>
            <BlurFade
              delay={0.5}
              inView
            >
              <div className="flex flex-row justify-between w-full ">
                {itemPhotos.map((itemPhoto) => {
                  return (
                    <div
                      key={itemPhoto.name}
                      className="flex flex-col items-center justify-center gap-2 border rounded-b-full opacity-50 hover:opacity-100 border-white/20"
                    >
                      <Image
                        src={itemPhoto.imageSrc}
                        alt={itemPhoto.name}
                        width={100}
                        height={100}
                        className="opacity-80 align-center"
                      />
                    </div>
                  );
                })}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
