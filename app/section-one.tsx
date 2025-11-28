"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ChristmasTree } from "@/assets/christmas-tree";

type SectionOneProps = {
	to?: string;
};

gsap.registerPlugin(SplitText, useGSAP);

export function SectionOne({ to }: SectionOneProps) {
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
			mask: "words",
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
			type: "words",
		});

		SplitText.create("#reveal-lines", {
			mask: "lines",
			onSplit(self) {
				return gsap.fromTo(
					self.lines,
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
			type: "lines",
		});
	}, []);

	return (
		<section className="relative flex min-h-svh flex-col overflow-hidden bg-[#f2efe6] text-[#234940]">
			<div className="flex flex-1 flex-col justify-between px-4 py-8 sm:p-12">
				<div className="flex justify-between">
					<p className="reveal w-min font-medium text-[10px]/3 uppercase">
						Youth of Smirna
					</p>
					<p className="reveal w-min text-right font-medium text-[10px]/3 uppercase">
						Tim Kerja 2025
					</p>
				</div>

				<div className="mx-auto w-full sm:w-[50%]">
					<ChristmasTree />
				</div>

				<div>
					<h1
						className="font-bold text-[15vw] tracking-tighter sm:text-9xl/40"
						id="title"
					>
						Undangan.
					</h1>
					<p className="font-medium tracking-tighter" id="reveal-lines">
						Ibadah Perayaan Sambut Natal Pemuda GMIM Smirna Batulubang dan
						Pemuda Wilayah Bitung IV.
					</p>
				</div>
			</div>

			{to && (
				<div className="space-y-1 justify-self-end bg-[#234940] px-4 py-4 text-[#f2efe6] sm:px-12">
					<p className="reveal w-fit rounded-full font-bold text-xs">Kepada</p>
					<p className="reveal font-medium text-lg">{to}</p>
				</div>
			)}
		</section>
	);
}
