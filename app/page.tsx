import { Grainy } from "@/app/grainy";
import { Footer } from "./footer";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ to?: string }>;
}) {
	const { to } = await searchParams;

	console.log(to);

	return (
		<main className="container mx-auto max-w-3xl overflow-hidden">
			<div className="relative">
				<Grainy />
				<SectionOne to={to} />
				<SectionTwo />
				<SectionThree />
			</div>
			<Footer />
		</main>
	);
}
