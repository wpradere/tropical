import Destinations from "@/containers/Destinations";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Hero from "@/containers/Hero";
import ParallaxSection from "@/containers/ParallaxSection";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ParallaxSection
        backgroundImage="5.png"
        title="Santafé de Antioquia"
        description="Un pueblo patrimonio situado en el departamento de Antioquia, en el occidente de Colombia"
      />
       <Destinations />

        <ParallaxSection
        backgroundImage="img7.jpg"
        title="Experiencias Únicas"
        description="Desde el avistamiento de ballenas en el Pacífico hasta la exploración de ciudades perdidas en la Sierra Nevada. Colombia te espera con aventuras inolvidables."
      />
      <Footer />

    </div>
  );
}
