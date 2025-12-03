"use client";

import Image from "next/image";
import Gereja from "@/public/gereja.webp";

export function SectionThree() {
	return (
		<section className="relative flex flex-col justify-between overflow-hidden text-pretty bg-[#234940] px-4 py-8 font-medium text-[#f2efe6] sm:px-24">
			<div className="space-y-8">
				<div className="space-y-2 rounded-3xl bg-[#f2efe6] p-8 text-[#234940]">
					<p className="w-min rounded-xl bg-[#234940] px-4 font-bold text-[#f2efe6] text-xl italic tracking-tight sm:text-3xl">
						Tema
					</p>
					<p className="font-bold text-xl italic tracking-tight sm:text-3xl">
						Rise and Shine: Be The Light
					</p>
					<p className="text-xs sm:text-sm">
						"Demikianlah hendaknya terangmu bercahaya di depan orang, supaya
						mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di
						surga." - Matius 5 : 16
					</p>
				</div>
				<div className="space-y-2 rounded-3xl border-2 border-[#f2efe6] p-8">
					<p className="w-min rounded-xl font-bold text-[#f2efe6] text-xl italic tracking-tight sm:text-3xl">
						Dresscode
					</p>
					<div className="grid h-12 grid-cols-5 gap-2">
						<div className="size-full rounded-lg bg-[#7aaccd]" />
						<div className="size-full rounded-lg bg-[#d1edff]" />
						<div className="size-full rounded-lg bg-[#fce268]" />
						<div className="size-full rounded-lg bg-[#fdf3af]" />
						<div className="size-full rounded-lg bg-[#d8d8d6]" />
					</div>
				</div>
				<p className="font-semibold text-xl tracking-tight first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:italic sm:text-3xl sm:first-letter:mr-6 sm:first-letter:text-8xl">
					Melalui undangan ini, kami Komisi Pemuda GMIM Smirna Batulubang,
					mengundang teman - teman untuk dapat hadir dalam satu persekutuan
					Ibadah,
				</p>
				<p className="font-semibold text-xl tracking-tight sm:text-3xl">
					Perayaan Sambut Natal Pemuda GMIM Smirna Batulubang dan Pemuda Wilayah
					Bitung IV.
				</p>
				<p className="font-semibold text-xl tracking-tight sm:text-3xl">
					Yang akan dilaksanakan pada,
				</p>
				<div className="space-y-2">
					<div className="flex items-center gap-2 rounded-full bg-[#f2efe6] p-2 text-[#234940]">
						<p className="flex-1 rounded-full bg-[#234940] p-4 text-center font-black text-4xl text-[#f2efe6] uppercase">
							Jumat
						</p>
					</div>
					<div className="flex items-center gap-2 rounded-full bg-[#f2efe6] p-2 text-[#234940]">
						<p className="rounded-full bg-[#234940] p-4 text-center font-black text-4xl text-[#f2efe6] uppercase">
							19
						</p>
						<p className="flex-1 rounded-full bg-[#234940] p-4 text-center font-black text-4xl text-[#f2efe6] uppercase">
							Desember
						</p>
					</div>
					<div className="flex items-center gap-2 rounded-full bg-[#f2efe6] p-2 text-[#234940]">
						<p className="flex-1 rounded-full bg-[#234940] p-4 text-center font-black text-4xl text-[#f2efe6] uppercase">
							17:00
						</p>
						<p className="rounded-full bg-[#234940] p-4 text-center font-black text-4xl text-[#f2efe6] uppercase">
							Wita
						</p>
					</div>
				</div>
				<div className="grid gap-8">
					<div>
						<p className="text-right font-semibold text-xl tracking-tight sm:text-3xl">
							Lokasi
						</p>
						<p className="text-right font-black text-4xl uppercase">
							Gereja GMIM Smirna Batulubang
						</p>
						<Image
							alt="Gereja GMIM Smirna Batulubang"
							className="scale-120"
							src={Gereja}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
