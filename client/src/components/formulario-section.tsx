import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Edit } from "lucide-react";

export default function FormularioSection() {
  const handleFormClick = () => {
    window.open("https://forms.gle/BGsSGj2FqwDXUHgR8");
  };

  return (
    <section id="formulario" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Participe Conosco</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            Quer fazer parte da família KERIGMA? Preencha nosso formulário e venha viver experiências transformadoras conosco!
          </p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Users className="text-6xl text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formulário de Participação</h3>
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo para acessar nosso formulário de inscrição e começar sua jornada de fé conosco.
              </p>
            </div>
            <Button
              onClick={handleFormClick}
              className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary transition-all transform hover:scale-105 text-lg font-semibold px-8 py-4"
            >
              <Edit className="mr-3 h-5 w-5" />
              Acessar Formulário
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
