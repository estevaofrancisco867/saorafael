import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";

export default function FotosSection() {
  const photos = [
    {
      src: "/12.jpeg",
      alt: "Momento de adoração",
    },
    {
      src: "/15.jpeg",
      alt: "Estudo bíblico em grupo",
    },
    {
      src: "/13.jpeg",
      alt: "Ação social do grupo",
    },
    {
      src: "/0.jpeg",
      alt: "Confraternização do grupo",
    },
    {
      src: "/8.jpeg",
      alt: "Momento de oração",
    },
    {
      src: "/7.jpeg",
      alt: "Atividade ao ar livre",
    },
    {
      src: "/9.jpeg",
      alt: "Atividade ao ar livre",
    },
    {
      src: "/10.jpeg",
      alt: "Atividade ao ar livre",
    },
  ];

  const handleVerMaisFotos = () => {
    window.location.href = "/galeria.html";
  };

  return (
    <section id="fotos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Fotos do Grupo</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo.src}
              alt={photo.alt}
              className="
                rounded-lg
                shadow-md
                aspect-square
                object-cover
                cursor-pointer
                transition-transform transition-filter duration-300 ease-in-out
                hover:scale-[1.70]
                hover:brightness-110
              "
            />
          ))}
        </div>

          <div className="text-center mt-12 py-0 text-lg">
          <Button
            onClick={handleVerMaisFotos}
            className="bg-primary text-white hover:bg-primary/90 transition-transform hover:scale-105 px-6 py-5 text-lg"
          >
            <Images className="mr-2 h-4 w-4" />
            Ver Mais Fotos
          </Button>
        </div>
      </div>
    </section>
  );
}
