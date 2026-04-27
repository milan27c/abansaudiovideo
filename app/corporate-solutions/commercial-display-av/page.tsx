import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import Categories from "./_components/Categories";
import Spotlight from "./_components/Spotlight";
import UseCases from "./_components/UseCases";
import Brands from "./_components/Brands";
import WhyAbans from "./_components/WhyAbans";
import Contact from "./_components/Contact";

export const metadata = {
  title:
    "Commercial Display & Professional AV Solutions | Abans IT Corporate Solutions",
  description:
    "End-to-end commercial display and professional audio-visual solutions from Abans IT — displays, video walls, DvLED, digital signage, conferencing, pro audio, control rooms and projection for enterprise, retail, hospitality, education, healthcare and transportation.",
};

export default function CommercialDisplayAVPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Categories />
        <Spotlight />
        <UseCases />
        <Brands />
        <WhyAbans />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
