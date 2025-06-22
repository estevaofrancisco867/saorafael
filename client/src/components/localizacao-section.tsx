import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, ExternalLink } from "lucide-react";

export default function LocalizacaoSection() {
  const handleMapClick = () => {
    window.open('https://maps.google.com', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Localização</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-2xl text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço da Igreja</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rua da Esperança, 123<br />
                      Bairro Jardim da Paz<br />
                      São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Route className="text-2xl text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Como Chegar</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Transporte Público:</strong> Metrô Linha Azul - Estação Jardim da Paz (5 min a pé)<br />
                      <strong>Ônibus:</strong> Linhas 123, 456, 789<br />
                      <strong>Carro:</strong> Estacionamento gratuito disponível
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button
                onClick={handleMapClick}
                className="bg-primary text-white hover:bg-primary/90"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver no Google Maps
              </Button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white cursor-pointer" onClick={handleMapClick}>
              <div className="text-center">
                <MapPin className="text-6xl mb-4 opacity-50 mx-auto" />
                <p className="text-lg font-semibold">Mapa Interativo</p>
                <p className="text-sm opacity-75">Clique para ver direções</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
