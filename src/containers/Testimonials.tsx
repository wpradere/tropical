const testimonials = [
  {
    name: "María González",
    country: "Colombia",
    avatar: "MG",
    rating: 5,
    text: "Una experiencia increíble. El viaje a Dubai superó todas mis expectativas. La organización fue perfecta de principio a fin.",
  },
  {
    name: "Carlos Rodríguez",
    country: "Colombia",
    avatar: "CR",
    rating: 5,
    text: "Nunca pensé que viajar a los Emiratos sería tan fácil. Tropicalandeast se encargó de todo y pudimos disfrutar cada momento.",
  },
  {
    name: "Andrea Martínez",
    country: "Colombia",
    avatar: "AM",
    rating: 5,
    text: "Nuquí fue un sueño hecho realidad. La selva, el mar, las ballenas... jamás lo olvidaré. Gracias por este viaje mágico.",
  },
  {
    name: "Luis Pérez",
    country: "Colombia",
    avatar: "LP",
    rating: 5,
    text: "Abu Dhabi nos dejó sin palabras. La mezquita Sheikh Zayed es de otro mundo. Sin duda volveremos con toda la familia.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
        Lo que dicen nuestros viajeros
      </h2>
      <p className="text-center text-lg text-slate-500 mb-14">
        Experiencias reales de quienes ya vivieron la aventura
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4"
          >
            {/* Estrellas */}
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="w-5 h-5"
                >
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.502 2.825c-.995.608-2.231-.29-1.96-1.425l1.257-5.273L2.678 10.955c-.887-.76-.415-2.212.749-2.305l5.404-.434z" />
                </svg>
              ))}
            </div>

            {/* Texto */}
            <p className="text-slate-600 text-base leading-relaxed flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Cliente */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
