import { Grainy } from "@/app/grainy";
import { Footer } from "./footer";
import { SectionOne } from "./section-one";
import { SectionTwo } from "./section-two";

export default function Home() {
  return (
    <main className="overflow-hidden container mx-auto max-w-3xl">
      <div className="relative">
        <Grainy />
        <SectionOne />
        <SectionTwo />
      </div>
      <Footer />
    </main>
  );
}
