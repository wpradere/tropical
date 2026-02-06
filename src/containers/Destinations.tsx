"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import DestinationModal from "@/components/DestinationModal";

interface GalleryItem {
  image: string;
  description: string;
}

interface Destination {
  image: string;
  title: string;
  description: string;
  gallery: GalleryItem[];
}

const colombiaDestinations: Destination[] = [
  {
    image: "/monpox3.jpg",
    title: "Santa cruz de Monpox",
    description: "Oficialmente Santa Cruz de Mompox es una Ciudad histórica",
    gallery: [
      { image: "/monpox1.jpg", description: "Descripción imagen 1 de Mompox" },
      { image: "/monpox2.png", description: "Descripción imagen 2 de Mompox" },
      { image: "/monpox3.jpg", description: "Descripción imagen 3 de Mompox" },
    ],
  },
  {
    image: "/caño1.jpg",
    title: "Caño cristales",
    description: "Desde la cima de la Piedra se aprecia la tercera característica clave de Guatapé: el embalse",
    gallery: [
      { image: "/caño1.jpg", description: "Descripción imagen 1 de Caño Cristales" },
      { image: "/caño2.jpg", description: "Descripción imagen 2 de Caño Cristales" },
      { image: "/caño3.jpg", description: "Descripción imagen 3 de Caño Cristales" },
    ],
  },
  {
    image: "/nuqui1.jpg",
    title: "Nuquí",
    description: "El Santuario donde la Selva se Funde con el Mar",
    gallery: [
      { image: "/nuqui1.jpg", description: "Descripción imagen 1 de Nuquí" },
      { image: "/nuqui2.jpg", description: "Descripción imagen 2 de Nuquí" },
      { image: "/nuqui3.jpg", description: "Descripción imagen 3 de Nuquí" },
    ],
  },
  {
    image: "/barichara1.jpg",
    title: "Barichara",
    description: " Es reconocido por la conservación de su arquitectura colonial de finales del siglo xviii.",
    gallery: [
      { image: "/barichara1.jpg", description: "Descripción imagen 1 de Barichara" },
      { image: "/barichara2.jpg", description: "Descripción imagen 2 de Barichara" },
      { image: "/barichara3.jpg", description: "Descripción imagen 3 de Barichara" },
    ],
  },
];

const emiratosDestinations: Destination[] = [
  {
    image: "/dubai1.png",
    title: " Dubai",
    description: "Uno de los hoteles más lujosos e icónicos del mundo, famoso por su distintiva silueta en forma de vela",
    gallery: [
      { image: "/dubai2.png", description: "Descripción imagen 1 de Dubai" },
      { image: "/dubai3.png", description: "Descripción imagen 2 de Dubai" },
      { image: "/dubai4.png", description: "Descripción imagen 3 de Dubai" },
    ],
  },
  {
    image: "/abu1.png",
    title: "Abu Dhabi",
    description: "La Gran Mezquita Sheikh Zayed no es solo un lugar de culto, es una obra maestra arquitectónica diseñada para ser un símbolo de pureza, piedad y la unificación de",
    gallery: [
      { image: "/abu2.png", description: "Presidencial Palace" },
      { image: "/abu3.png", description: "Ferrari World" },
      { image: "/abu5.png", description: "Yas circuit" },
    ],
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
          gallery={selectedDestination.gallery}
        />
      )}
    </section>
  );
}
