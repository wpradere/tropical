"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const slides = [
  "1.png",
  "22.png",
  "3.png",
  "44.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="inicio" className="h-screen relative overflow-hidden">
      {/* Carousel */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 text-shadow-lg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
          Uniendo dos mundos
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up-delay-1">
        Donde los destinos exóticos se transforman en experiencias inolvidables
        </p>
         <Link
          href="#destinos"
          className="px-14 py-5 bg-linear-to-r from-gold-400 to-gold-500 text-xl md:text-3xl lg:text-4xl text-white border-none rounded-full font-bold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,215,0,0.5)] "
        >
          Explora Ahora
        </Link>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold-400 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
