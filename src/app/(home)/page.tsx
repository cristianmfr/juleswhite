import Hero from "@/components/components/hero";
import About from "@/components/components/about";
import Cases from "@/components/components/cases";
import Doctors from "@/components/components/doctors";
import Action from "@/components/components/action";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Hero />
      <About />
      <Cases />
      <Doctors />
      <Action />
    </div>
  );
}
