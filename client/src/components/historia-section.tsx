import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HistoriaSection() {
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
              src="/36.jpeg"
              alt="Grupo de jovens em discussão"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            {/* Significado de KERIGMA com quadrado um pouco menor */}
            <div className="bg-gray-100 p-3 rounded-md shadow-sm mb-4">
              <p className="text-sm sm:text-base font-semibold text-primary mb-2">
                O que é KERIGMA?
              </p>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                KERIGMA é o anúncio essencial da fé cristã, a mensagem central sobre Jesus Cristo: 
                sua morte, ressurreição e a salvação que oferece. Este é o fundamento do nosso grupo.
              </p>
            </div>

            {/* Texto principal com fonte ligeiramente maior e espaçamento reduzido */}
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium mb-4">
              <span className="text-primary font-semibold">Em 2015</span>, a{" "}
              <span className="text-primary font-semibold">irmã Marcela</span>, nascida
              no Chile, criou o grupo de jovens{" "}
              <span className="text-primary font-semibold">Kerigma</span> na Paróquia São
              Rafael. Começou com poucos participantes, mas sua forma acolhedora e cheia
              de fé logo atraiu mais jovens.
            </p>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium mb-4">
              Ela criou um espaço onde{" "}
              <span className="text-primary font-semibold">amizade</span>,{" "}
              <span className="text-primary font-semibold">oração</span> e{" "}
              <span className="text-primary font-semibold">partilha</span> andavam juntas
              — e o que era apenas uma iniciativa simples se transformou em algo que{" "}
              <span className="text-primary font-semibold">
                mudaria a vida de muita gente
              </span>
              .
            </p>

            <Card className="bg-white border border-gray-200 shadow-md">
              <CardContent className="p-0">
                <div className="bg-primary/10 border-l-4 border-primary px-5 py-4 rounded-md shadow-sm">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">
                    Tempo de atividade já conquistados
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-gray-800">
                    10 anos de história
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={() => (window.location.href = "/saibamais.html")}
              className="bg-primary text-white hover:bg-primary/90 text-sm font-semibold px-6 py-2"
            >
              Saiba mais detalhes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}





