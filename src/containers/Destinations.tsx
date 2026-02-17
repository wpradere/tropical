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
    description: "El centro de negocios y turismo",
    gallery: [
      { image: "/dubai2.png", description: "Museo del futuro" },
      { image: "/dubai3.png", description: "Descubra cómo era la vida en la zona antigua de Dubái durante el siglo XIX" },
      { image: "/dubai4.png", description: "Icónico monumento y mirador de 150 metros de altura situado en el Zabeel Par" },
    ],
  },
  {
    image: "/abu1.png",
    title: "Abu Dhabi",
    description: "La Capital",
    gallery: [
      { image: "/abu2.png", description: "Presidencial Palace" },
      { image: "/abu3.png", description: "Ferrari World" },
      { image: "/abu5.png", description: "Yas circuit" },
    ],
  },
    {
    image: "/sharjan1.png",
    title: "Sharjah",
    description: "Conocido como el centro cultural",
    gallery: [
      { image: "/sharjan1.png", description: "La casa Bait Al Naboodah, un maravilloso ejemplo de arquitectura emiratí del s. XIX" },
      { image: "/sharjan2.png", description: "Museo de la Caligrafía, en Heart of Sharjah" },
      { image: "/sharjan3.png", description: "El mariposario" },
    ],
  },
    {
    image: "/Ajman1.png",
    title: "Ajman",
    description: "Se conoce por ser un destino más relajado, tradicional y auténtico",
    gallery: [
      { image: "/ajiman2.png", description: "Mezquita Humaid bin Abdulaziz Al Nuaimi." },
      { image: "/ajiman3.png", description: "Entrada al pueblo de Katara (Valle de las Culturas) en Doha" },
      { image: "/ajiman4.png", description: "Museo Ajman" },
    ],
  },
  {
    image: "/mmm2.png",
    title: "Umm Al Quwain",
    description: "Refugio de aventura, arqueología y vida silvestre",
    gallery: [
      { image: "/mmm2.png", description: "Hermosas playas" },
      { image: "/mmm3.png", description: "Barracuda Beach Resort" },
      { image: "/mmm4.png", description: "Avion abandonado" },
    ],
  },
  {
    image: "/ras1.png",
    title: " Ras Al Khaimah",
    description: "Famoso por sus montañas y aventura",
    gallery: [
      { image: "/ras1.png", description: "Bosque de manglares" },
      { image: "/ras2.png", description: "Camellos" },
      { image: "/ras3.png", description: "Ciudad" },
    ],
  },
  {
    image: "/fujairah1.png",
    title: "Fujairah",
    description: "El único con costa exclusivamente en el Golfo de Omán",
    gallery: [
      { image: "/fujairah1.png", description: "Gran Mezquita Sheikh Zayed en Fujairah" },
      { image: "/fujairah2.png", description: "playa de arena de Fujairah" },
      { image: "/fujairah3.png", description: "Fuerte de Fujairah en el Emirato de Fujairah" },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
