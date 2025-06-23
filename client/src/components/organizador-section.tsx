import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function OrganizadorSection() {
  const leaders = [
    {
      name: "xxxxxxxxxxxxx",
      role: "Coordenadora",
      description: "xxxxxxxxxxxxxxxxx",
      phone: "(11) 99999-9999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s"
    },
    {
      name: "xxxxxxxxxxxxx",
      role: "Coordenadora",
      description: "xxxxxxxxxxxxxxxxx",
      phone: "(11) 88888-888",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s"
    },
    {
      name: "xxxxxxxxxxxxx",
      role: "Coordenadora",
      description: "xxxxxxxxxxxxxxxxx",
      phone: "(11) 77777-7777",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRI-lBNToqlmKWX0JA42wI-19Z7AkPMeVWw&s"
    }
  ];

  return (
    <section id="organizador" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lideranças</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="bg-blue-50 border-blue-200 shadow-md text-center">
              <CardContent className="p-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.description}</p>
                <div className="mt-4">
                  <a
                    href={`tel:${leader.phone.replace(/\D/g, '')}`}
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    <Phone className="mr-1 h-4 w-4" />
                    {leader.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
