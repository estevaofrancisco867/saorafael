import { Card, CardContent } from "@/components/ui/card";

export default function RelatosSection() {
  const testimonials = [
    {
      name: "João Paulo Nogueira",
      image: "https://cdn-icons-png.freepik.com/512/4486/4486898.png",
      text: "Depois da catequese, não participava muito da igreja e entrar no grupo Kerigma, me fez aproximar mais de Deus. E agora virou compromisso ir todas as quartas ao grupo.",
    },
    {
      name: "Luiz Fernando",
      image: "/lui.jpeg",
      text: "Estou no grupo desde 2022 e posso dizer que minha vida mudou muito depois que eu entrei para o kerigma, tive experiências maravilhosas e viagens que me aproximaram mais ainda de Deus, conheci a minha namorada que eu amo tanto e hoje em dia participo e ainda gosto muito",
    },
    {
      name: "Najara",
      image: "/na.jpg",
      text: "Demorei um pouco para entrar no grupo, mas, quando entrei, tive certeza de que aquele era o meu lugar. Fiz amizades que vou levar para o resto da vida. O grupo se tornou a minha segunda casa",
    },
    {
      name: "Miguel",
      image: "/61.jpeg",
      text: "O grupo significa uma família, Todos irmãos!, significa saber que podemos contar com vocês, Essa importância e gentileza que faz eu gostar do kerigma, com esse grupo aprendi não só a fazer escolhas como entender lados e criar maturidade, Um momento amplo com jovens de diferentes idades, SOMOS KERIGMA!",
    },
    {
      name: "Bruno",
      image: "/bru.jpg",
      text: "Participar desse grupo tem sido uma experiência libertadora, gratificante e cheia de graça. Mais que ajudar o próximo, é um processo de transformação pessoal, aproximação com Deus e aprendizado do amor ao próximo, independentemente das circunstâncias. Ao longo do tempo, aprendi valores preciosos que levarei para a vida toda.",
    },
    {
      name: "Giovanna",
      image: "/61.jpg",
      text: "Aos 11 anos entrei para o Kerigma e cresci aqui — em idade, fé, amor e amizade. Aprendi que Deus fala de muitos jeitos. O Kerigma foi mais que um grupo, foi uma família. Hoje, aos 18, vejo que eu precisava mais do grupo do que ele de mim. Não foram apenas encontros, mas momentos que me mostraram o amor de Deus. Se posso dar um conselho: vai, não há nada melhor que ter amigos em Deus. ❤️❤️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Relatos dos Membros</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="relative bg-blue-50 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              style={{ minHeight: 320 }}
            >
              <CardContent className="p-0 relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <h4 className="text-primary text-lg font-semibold">{t.name}</h4>
                  </div>

                  <hr className="mb-3 border-blue-100" />

                  <blockquote
                    className={`font-sans text-gray-700 border-l-4 border-blue-200 pl-4 italic
                      ${
                        t.name === "Bruno" || t.name === "Giovanna"
                          ? "text-[0.85rem] leading-snug"
                          : t.name === "Najara"
                          ? "text-[1.03rem] leading-relaxed"
                          : t.name === "João Paulo Nogueira"
                          ? "text-[1.05rem] leading-relaxed"
                          : "text-sm leading-relaxed"
                      }`}
                  >
                    {t.text}
                  </blockquote>
                </div>
              </CardContent>

              {/* Triângulo decorativo */}
              <div
                className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-50"
                aria-hidden="true"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




