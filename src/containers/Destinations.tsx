"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import DestinationModal from "@/components/DestinationModal";

interface Destination {
  image: string;
  title: string;
  description: string;
  gallery: string[];
}

const colombiaDestinations: Destination[] = [
  {
    image: "/monpox3.jpg",
    title: "Santa cruz de Monpox",
    description: "Oficialmente Santa Cruz de Mompox es una Ciudad histórica",
    gallery: ["/monpox1.jpg", "/monpox2.png", "/monpox3.jpg"],
  },
  {
    image: "/caño1.jpg",
    title: "Caño cristales",
    description: "Desde la cima de la Piedra se aprecia la tercera característica clave de Guatapé: el embalse",
    gallery: ["/caño1.jpg", "/caño2.jpg", "/caño3.jpg"],
  },
  {
    image: "/nuqui1.jpg",
    title: "Nuquí",
    description: "El Santuario donde la Selva se Funde con el Mar",
    gallery: ["/nuqui1.jpg", "/nuqui2.jpg", "/nuqui3.jpg"],
  },
  {
    image: "/barichara1.jpg",
    title: "Barichara",
    description: " Es reconocido por la conservación de su arquitectura colonial de finales del siglo xviii.",
    gallery: ["/barichara1.jpg", "/barichara2.jpg", "/barichara3.jpg"],
  },
];

const emiratosDestinations: Destination[] = [
  {
    image: "/img1.jpg",
    title: "Burj Al Arab",
    description: "Uno de los hoteles más lujosos e icónicos del mundo, famoso por su distintiva silueta en forma de vela",
    gallery: ["/img1.jpg", "/img1.jpg", "/img1.jpg"],
  },
  {
    image: "/img6.jpg",
    title: "Mezquita Sheikh Zayed",
    description: "La Gran Mezquita Sheikh Zayed no es solo un lugar de culto, es una obra maestra arquitectónica diseñada para ser un símbolo de pureza, piedad y la unificación de",
    gallery: ["/img6.jpg", "/img6.jpg", "/img6.jpg"],
  },
];

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleCardClick = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleCloseModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section
      id="destinos"
      className="py-20 px-8 bg-linear-to-br from-verde-profundo to-blue-100"
    >
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-slate-800">
        Destinos Imperdibles
      </h2>

      {/* Colombia */}
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-slate-700">
        Colombia
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {colombiaDestinations.map((destination) => (
          <DestinationCard
            key={destination.title}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            onClick={() => handleCardClick(destination)}
          />
        ))}
      </div>

      {/* Emiratos Árabes */}
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-slate-700">
        Emiratos Árabes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {emiratosDestinations.map((destination) => (
          <DestinationCard
            key={destination.title}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            onClick={() => handleCardClick(destination)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedDestination && (
        <DestinationModal
          isOpen={!!selectedDestination}
          onClose={handleCloseModal}
          title={selectedDestination.title}
          description={selectedDestination.description}
          gallery={selectedDestination.gallery}
        />
      )}
    </section>
  );
}
