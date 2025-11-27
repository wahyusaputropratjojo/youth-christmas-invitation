"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import PemudaFrame1 from "@/public/pemuda-frame-1.webp";
import PemudaFrame2 from "@/public/pemuda-frame-2.webp";
import PemudaFrame3 from "@/public/pemuda-frame-3.webp";
import PemudaFrame4 from "@/public/pemuda-frame-4.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SectionTwo() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.from("#image-1", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top-=50px bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-1",
				},
				y: -100,
			});
			gsap.from("#image-2", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top-=50px bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-2",
				},
				x: 100,
			});
			gsap.from("#image-3", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top-=50px bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-3",
				},
				x: -100,
			});
			gsap.to("#image-4", {
				ease: "expo.inOut",
				scrollTrigger: {
					scrub: true,
					start: "top-=50px bottom",
					toggleActions: "play pause resume reverse",
					trigger: "#image-4",
				},
				y: -50,
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
				<Image
					alt="Pemuda GMIM Smirna Batulubang - 1"
					className="z-30 rotate-8 scale-120 shadow-2xl"
					id="image-1"
					src={PemudaFrame1}
				/>
				<Image
					alt="Pemuda GMIM Smirna Batulubang - 2"
					className="-rotate-10 z-20 shadow-2xl"
					id="image-2"
					src={PemudaFrame2}
				/>
				<Image
					alt="Pemuda GMIM Smirna Batulubang - 3"
					className="z-10 rotate-10 scale-110 shadow-2xl"
					id="image-3"
					src={PemudaFrame3}
				/>
				<Image
					alt="Pemuda GMIM Smirna Batulubang - 4"
					className="-rotate-10 scale-130"
					id="image-4"
					src={PemudaFrame4}
				/>
			</div>
		</section>
	);
}
