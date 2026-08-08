import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex-1">
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
