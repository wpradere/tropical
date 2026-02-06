interface ParallaxSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
}

export default function ParallaxSection({
  backgroundImage,
  title,
  description,
}: ParallaxSectionProps) {
  return (
    <section
      className="relative h-150 parallax-bg flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
