import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ExperienciasSection() {
  const experiences = [
    {
      image: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      title: "XXXXXXXXXXXXXXX",
      description: "XXXXXXXXXXXXXXX",
      additionalText: "XXXXXXXXXXXXXXX",
      reverse: false
    },
    {
      image: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      title: "XXXXXXXXXXXXXXX",
      description: "XXXXXXXXXXXXXXXXXXXX",
      additionalText: "XXXXXXXXXXXXXXXXXXXX",
      reverse: true
    },
    {
      image: "https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg",
      title: "XXXXXXXXXXXXXXX",
      description: "XXXXXXXXXXXXXXXXXXXX",
      additionalText: "XXXXXXXXXXXXXXXXXXXX",
      reverse: false
    }
  ];

  return (
    <section id="experiencias" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experiências Vivenciadas</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${experience.reverse ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={experience.reverse ? 'md:col-start-2' : ''}>
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className={experience.reverse ? 'md:col-start-1' : ''}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{experience.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {experience.additionalText}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Heart className="mr-2 h-4 w-4" />
            Ver Mais Experiências
          </Button>
        </div>
      </div>
    </section>
  );
}
