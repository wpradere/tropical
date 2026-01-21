import Image from "next/image";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
}

export default function DestinationCard({
  image,
  title,
  description,
}: DestinationCardProps) {
  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
