import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import About from "@/components/about"
import Team from "@/components/team"
import Buying from "@/components/buying"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import AboutSection from "@/components/AboutSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsShowcase />
      {/* <Featured /> */}
      {/* <About />
      <Team />
      <Buying />
      <Testimonials />
      <Blog />
      <Footer /> */}
    </main>
  )
}
