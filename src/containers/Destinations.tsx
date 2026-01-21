import DestinationCard from "./DestinationCard";

const destinations = [
  {
    image: "/img1.jpg",
    title: "Burj Al Arab",
    description: "Uno de los hoteles más lujosos e icónicos del mundo, famoso por su distintiva silueta en forma de vela",
  },
  {
    image: "/img2.jpg",
    title: "Guajira",
    description: "Los flamencos rosados en La Guajira es presenciar uno de los contrastes más hermosos de la naturaleza colombiana",
  },
  {
    image: "/img3.jpg",
    title: "El Embalse: Un Mar Interior",
    description: "Desde la cima de la Piedra se aprecia la tercera característica clave de Guatapé: el embalse",
  },
  {
    image: "/img4.jpg",
    title: "Nuquí",
    description: "El Santuario donde la Selva se Funde con el Mar",
  },
  {
    image: "/img5.jpg",
    title: "Leticia, Amazonas",
    description: "Leticia es una ciudad vibrante y única, ubicada en el extremo sur de Colombia. Es el puerto más importante del país sobre el río Amazonas",
  },
  {
    image: "/img6.jpg",
    title: "Mezquita Sheikh Zayed",
    description: "La Gran Mezquita Sheikh Zayed no es solo un lugar de culto, es una obra maestra arquitectónica diseñada para ser un símbolo de pureza, piedad y la unificación de",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinos"
      className="py-20 px-8 bg-linear-to-br from-verde-profundo to-blue-100"
    >
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-slate-800">
        Destinos Imperdibles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.title}
            image={destination.image}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
}
