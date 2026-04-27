import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Hero from "./corporate-solutions/commercial-display-av/_components/Hero";
import Overview from "./corporate-solutions/commercial-display-av/_components/Overview";
import Categories from "./corporate-solutions/commercial-display-av/_components/Categories";
import Brands from "./corporate-solutions/commercial-display-av/_components/Brands";
import UseCases from "./corporate-solutions/commercial-display-av/_components/UseCases";
import WhyAbans from "./corporate-solutions/commercial-display-av/_components/WhyAbans";
import Contact from "./corporate-solutions/commercial-display-av/_components/Contact";

export const metadata = {
  title:
    "Commercial Display & Professional AV Solutions | Abans IT Corporate Solutions",
  description:
    "End-to-end commercial display and professional audio-visual solutions from Abans IT — displays, video walls, DvLED, digital signage, conferencing, pro audio, control rooms and projection for enterprise, retail, hospitality, education, healthcare and transportation.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Categories />
        <Brands />
        <UseCases />
        <WhyAbans />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
