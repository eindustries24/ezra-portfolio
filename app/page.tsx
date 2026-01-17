import Reviews from "./reviews";
import Hero from "./hero";
import Credits from "./credits";
import Editing from "./editing";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center align-center justify-center font-sans gap-10 md:gap-20">
      <Hero />
      <Credits />
      <Editing />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}
