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
              src="https://static.vecteezy.com/ti/vetor-gratis/t1/8953369-transparente-fundo-png-textura-fundo-transparente-grade-gratis-vetor.jpg"
              alt="Grupo de jovens em discussão"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
             XXXXXX <strong>8 anos</strong> xxxxxxxxx
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              xxxxxxxxxxxxxx
            </p>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Tempo de Atividade</h3>
                <p className="text-gray-700">XXXXXXXXXXX</p>
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
