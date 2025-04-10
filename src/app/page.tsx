import About from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import { ScrollToTop } from "@/components/Scroll_to_top";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>
    <ScrollToTop/>
   </div>
  );
}
