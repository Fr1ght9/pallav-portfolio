import Loader from "./Components/Loader";
import Hero from "./Components/Hero"; // Your current working component
import Experience from "./Components/Experience"; // The section you want to land on after the zoom
import Playground from "./Components/Playground";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* 1. The Scroll-Animated Intro */}
      <Loader />
      <Hero />
      {/* 2. The Next Section (Where the user lands after the zoom) */}
      <Experience />
      <Playground />
      <Contact />
    </main>
  );
}