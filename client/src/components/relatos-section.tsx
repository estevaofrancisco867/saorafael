import { Card, CardContent } from "@/components/ui/card";

export default function RelatosSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "O KERIGMA mudou minha vida completamente. Aqui encontrei uma família que me acolheu e me ajudou a crescer na fé. Cada encontro é uma benção!"
    },
    {
      name: "João Santos",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Através do grupo descobri meu propósito e aprendi o verdadeiro significado da comunhão cristã. Somos mais que amigos, somos irmãos em Cristo."
    },
    {
      name: "Ana Costa",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Os momentos de oração e estudo da palavra têm fortalecido minha fé de forma incrível. Sou grata por fazer parte desta família abençoada."
    },
    {
      name: "Pedro Lima",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "No KERIGMA aprendi que servir ao próximo é uma das maiores alegrias da vida cristã. Nossas ações sociais transformam não só a comunidade, mas a nós mesmos."
    },
    {
      name: "Carla Mendes",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Estar no KERIGMA é estar em casa. Aqui encontro apoio, amor e direcionamento espiritual. Cada membro é especial e único aos olhos de Deus."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Relatos dos Membros</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-blue-50 border-blue-200 shadow-md">
              <CardContent className="p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold mb-3">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
