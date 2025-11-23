"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { ChristmasTree } from "@/assets/christmas-tree";

export function SectionOne() {
  useGSAP(() => {
    SplitText.create("#title", {
      mask: "lines",
      onSplit(self) {
        return gsap.fromTo(
          self.chars,
          {
            opacity: 0,
            yPercent: 80,
          },
          {
            duration: 1,
            ease: "expo.inOut",
            opacity: 1,
            stagger: 0.05,
            yPercent: 0,
          },
        );
      },
      type: "chars lines",
    });

    SplitText.create(".reveal", {
      mask: "lines",
      onSplit(self) {
        return gsap.fromTo(
          self.words,
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            duration: 1,
            ease: "expo.out",
            opacity: 1,
            stagger: 0.1,
            yPercent: 0,
          },
        );
      },
      type: "words lines",
    });
  }, []);

  return (
    <section className="h-svh relative px-4 py-12 flex flex-col justify-between border bg-[#f2efe6] text-[#161c26] sm:rounded-3xl sm:px-12">
      <div className="flex justify-between">
        <p className="text-[10px]/3 uppercase font-medium w-min reveal">
          Youth of Smirna
        </p>
        <p className="text-[10px]/3 uppercase font-medium text-right w-min reveal">
          Tim Kerja 2025
        </p>
      </div>
      <div className="sm:w-[50%] w-full mx-auto">
        <ChristmasTree />
      </div>
      <div>
        <h1
          className="font-bold text-[18vw] sm:text-9xl/40 tracking-tighter"
          id="title"
        >
          Undangan.
        </h1>
        <p className="tracking-tighter uppercase max-w-[24ch] text-[10px]/3 font-medium reveal">
          Ibadah Natal Pemuda GMIM Smirna Batulubang.
        </p>
      </div>
    </section>
  );
}
