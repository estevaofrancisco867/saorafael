export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full">
      {/* Fundo com imagem (sem sombreamento) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/paroquia.jpg')",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <h1
            className="mb-6 tracking-wider text-white font-extrabold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '5.5rem',
              transform: 'skewY(-2deg)',
              textShadow:
                '4px 4px 12px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.7)',
              fontStyle: 'normal',
              letterSpacing: '0.08em',
            }}
          >
            KERIGMA
          </h1>

          <p
            className="mb-8 font-light text-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.75rem',
              textShadow:
                '3px 3px 10px rgba(0, 0, 0, 0.85), 0 0 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            Grupo de Jovens – Vivendo a fé em comunidade
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('historia')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-blue-500"
            >
              SEJA BEM-VINDO AO NOSSO SITE
            </button>

            <button
              onClick={() => scrollToSection('igreja')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-blue-500"
            >
              PARÓQUIA SÃO RAFAEL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

