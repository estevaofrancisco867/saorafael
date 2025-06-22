import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HistoriaSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="historia" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Grupo de jovens em discussão"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              O KERIGMA nasceu há <strong>8 anos</strong> com o propósito de reunir jovens cristãos em busca de crescimento espiritual e comunhão fraterna. Desde então, temos sido uma família unida pela fé e pelo amor ao próximo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nosso nome "KERIGMA" vem da palavra grega que significa "proclamação" ou "anúncio", representando nossa missão de anunciar o evangelho através de nossas ações e testemunhos de vida.
            </p>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Tempo de Atividade</h3>
                <p className="text-gray-700">8 anos transformando vidas e construindo relacionamentos sólidos em Cristo</p>
              </CardContent>
            </Card>
            <Button
              onClick={() => scrollToSection('contatos')}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Saiba mais detalhes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
