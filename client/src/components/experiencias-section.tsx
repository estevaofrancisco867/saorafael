import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ExperienciasSection() {
  const experiences = [
    {
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Retiro Espiritual 2023",
      description: "Nosso último retiro foi uma experiência transformadora. Durante três dias, vivenciamos momentos intensos de oração, reflexão e comunhão. Muitos jovens relataram experiências profundas de encontro com Deus.",
      additionalText: "O tema \"Renovados em Cristo\" marcou a vida de cada participante, fortalecendo nossa fé e nossos laços como família espiritual.",
      reverse: false
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Ação Social na Comunidade",
      description: "Mensalmente organizamos ações sociais que impactam diretamente nossa comunidade. Desde distribuição de alimentos até atividades com crianças em situação de vulnerabilidade.",
      additionalText: "Essas experiências nos ensinam sobre o amor prático e como podemos ser as mãos e os pés de Jesus no mundo.",
      reverse: true
    },
    {
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Ministério de Louvor",
      description: "Nosso grupo desenvolveu um ministério de louvor que toca o coração de toda a congregação. Através da música, expressamos nossa devoção e levamos outros à presença de Deus.",
      additionalText: "Cada apresentação é uma oportunidade de ministir e ser ministrado, criando momentos únicos de adoração genuína.",
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
