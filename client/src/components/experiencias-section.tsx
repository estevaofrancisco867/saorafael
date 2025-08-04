import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ExperienciasSection() {
  const experiences = [
    {
      image: "/18.jpeg",
      title: "TEATRO SOBRE A MORTE DE JESUS",
      description:
        "Essa foi, sem dúvida, uma das experiências mais marcantes que já vivemos como juventude da igreja. Tivemos o privilégio de apresentar uma peça sobre os últimos momentos de Jesus — desde os acontecimentos que antecederam sua morte até a ressurreição. Mergulhamos de cabeça: ensaios, cenário, figurinos e muita oração. Mais que uma apresentação, foi um momento de conexão com Deus, de união e crescimento espiritual. Ver a igreja cheia e sentir a presença de Deus foi simplesmente inesquecível.",
      reverse: false,
    },
    {
      image: "/19.jpeg",
      title: "CONSAGRAÇÃO DE NOSSA SENHORA",
      description:
        "Vivemos mais uma experiência única e inesquecível! Em comunhão, a juventude da igreja e os catequizandos prepararam com muito carinho a Coroação de Nossa Senhora. A entrada com a coroa foi um dos momentos mais emocionantes da noite — marcada por um profundo silêncio e reverência. Cada canção escolhida exaltava a beleza e o amor de Maria. Foi mais do que uma celebração: foi um verdadeiro encontro com a Mãe do Céu. Com a igreja cheia inclusive, se fez uma noite de fé, união e entrega, que ficará gravada na memória de todos que participaram.",
      reverse: true,
    },
    {
      image: "/21.jpeg",
      title: "ACAMPAMENTO DA JUVENTUDE",
      description:
        "Nos dias em que estivemos no sítio, na Capela São Sebastião, vivemos um acampamento que vai ficar para sempre em nossas memórias. Foram dois dias intensos e cheios de significado, com momentos de alegria, fé e muita união entre a juventude. Tivemos jogos em grupo, guerra de bexigas d’água, filmes com mensagens religiosas, rodas de conversa e palestras que nos tocaram profundamente com testemunhos de fé. Também tivemos tempo para orações, partilhas, risadas e aquele clima gostoso de estar entre amigos que buscam a mesma fé.",
      reverse: false,
    },
  ];

  return (
    <section id="experiencias" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[1.9rem] font-bold text-gray-800 mb-4">
            Experiências Vivenciadas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                experience.reverse ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={experience.reverse ? "md:col-start-2" : ""}>
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className={experience.reverse ? "md:col-start-1" : ""}>
                <h3 className="text-[1.3rem] font-bold text-gray-800 mb-4">
                  {experience.title}
                </h3>
                <p className="text-[0.98rem] text-gray-600 mb-4 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 py-0">
          <a href="/mais.html">
            <Button className="bg-primary text-white hover:bg-primary/90 px-3.5 py-5 text-[0.98rem]">
              <Heart className="mr-2 h-4 w-4" />
              Ver Mais Experiências
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
