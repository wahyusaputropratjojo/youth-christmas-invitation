"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import Pemuda1 from "@/public/pemuda-1.webp";
import Pemuda2 from "@/public/pemuda-2.webp";
import Pemuda3 from "@/public/pemuda-3.webp";
import Pemuda4 from "@/public/pemuda-4.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SectionThree() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.from("#image-1", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-1",
				},
				y: -100,
			});
			gsap.from("#image-2", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-2",
				},
				x: 100,
			});
			gsap.from("#image-3", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-3",
				},
				x: -100,
			});
			gsap.to("#image-4", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-4",
				},
				y: 100,
			});
		},
		{ scope: container },
	);

	return (
		<section
			className="min-h-screen overflow-hidden bg-[#234940] p-8"
			ref={container}
		>
			<div className="grid grid-cols-1">
				<div
					className="rotate-8 scale-120 bg-[#f2efe6] px-2 pt-2 pb-12 shadow-2xl"
					id="image-1"
				>
					<Image alt="Pemuda GMIM Smirna Batulubang - 1" src={Pemuda1} />
				</div>
				<div
					className="-rotate-10 z-10 scale-100 bg-[#f2efe6] px-2 pt-2 pb-12 shadow-2xl"
					id="image-2"
				>
					<Image alt="Pemuda GMIM Smirna Batulubang - 2" src={Pemuda2} />
				</div>
				<div
					className="rotate-10 scale-110 bg-[#f2efe6] px-2 pt-2 pb-12"
					id="image-3"
				>
					<Image alt="Pemuda GMIM Smirna Batulubang - 3" src={Pemuda3} />
				</div>
				<div
					className="-rotate-10 scale-110 bg-[#f2efe6] px-2 pt-2 pb-12"
					id="image-4"
				>
					<Image alt="Pemuda GMIM Smirna Batulubang - 4" src={Pemuda4} />
				</div>
			</div>
		</section>
	);
}
