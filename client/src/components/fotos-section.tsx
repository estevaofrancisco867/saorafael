import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";

export default function FotosSection() {
  const photos = [
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Momento de adoração",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Estudo bíblico em grupo",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Ação social do grupo",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Confraternização do grupo",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Momento de oração",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Atividade ao ar livre",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Atividade ao ar livre",
    },
    {
      src: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      alt: "Atividade ao ar livre",
    },
  ];

  return (
    <section id="fotos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Fotos do Grupo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer aspect-square object-cover"
            />
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Images className="mr-2 h-4 w-4" />
            Ver Mais Fotos
          </Button>
        </div>
      </div>
    </section>
  );
}
