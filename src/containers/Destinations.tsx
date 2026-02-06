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
      { image: "/monpox1.jpg", description: "Plaza central del pueblo" },
      { image: "/monpox2.png", description: "Hermosa vista desde el río" },
      { image: "/monpox3.jpg", description: "Panorámica del pueblo. " },
    ],
  },
  {
    image: "/caño1.jpg",
    title: "Caño cristales",
    description: "Los colores de Caño Cristales (rojo, amarillo, verde, azul y negro)",
    gallery: [
      { image: "/caño1.jpg", description: "Uno de los ríos más hermosos del mundo" },
      { image: "/caño2.jpg", description: "Planta acuática endémica llamada Macarenia clavigera la que le da sus hermosos colores" },
      { image: "/caño3.jpg", description: "Agua transparente, fiel reflejo del cielo azul" },
    ],
  },
  {
    image: "/nuqui1.jpg",
    title: "Nuquí",
    description: "El Santuario donde la Selva se Funde con el Mar",
    gallery: [
      { image: "/nuqui1.jpg", description: "Agua turquesa con una gran variedad de flora y fauna única en el mundo" },
      { image: "/nuqui2.jpg", description: "Hermosa vista del mar Pacífico" },
      { image: "/nuqui3.jpg", description: "Uno de los mejores espectáculos naturales de Colombia, ocurriendo principalmente entre julio y mediados de octubre" },
    ],
  },
  {
    image: "/barichara1.jpg",
    title: "Barichara",
    description: " Es reconocido por la conservación de su arquitectura colonial de finales del siglo xviii.",
    gallery: [
      { image: "/barichara1.jpg", description: "La localidad ha sido destacada por su preservación arquitectónica y su atractivo turístico" },
      { image: "/barichara2.jpg", description: "La catedral de la Inmaculada Concepción en recuerdo a la Virgen de la roca es una obra única" },
      { image: "/barichara3.jpg", description: "El centro histórico de Barichara se declaró monumento nacional" },
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
