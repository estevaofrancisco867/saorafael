import { Card, CardContent } from "@/components/ui/card";

export default function RelatosSection() {
  const testimonials = [
    {
      name: "XXXXXXXXXXXXX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s",
      text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      name: "XXXXXXXXXXXXX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s",
      text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      name: "XXXXXXXXXXXXX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s",
      text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      name: "XXXXXXXXXXXXX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s",
      text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      name: "XXXXXXXXXXXXX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s",
      text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-blue-50 border-blue-200 shadow-md">
              <CardContent className="p-6 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold mb-3">{t.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}