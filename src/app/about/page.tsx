import { Target, Heart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Permettre à tous les commerces indépendants de profiter de l'essor de la livraison, sans complexité technique ni charge administrative."
    },
    {
      icon: Heart,
      title: "Notre Vision",
      description: "Devenir le partenaire de référence des commerces de proximité dans leur transformation digitale et leur croissance sur les plateformes."
    },
    {
      icon: Zap,
      title: "Notre Engagement",
      description: "Offrir un service de qualité, transparent et personnalisé qui génère des résultats concrets pour nos partenaires."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-5xl md:text-6xl font-bold">
                À propos de <span className="text-gradient">Foodmoods</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nous aidons les commerces indépendants à prospérer dans l&apos;économie de la livraison
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-card/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">Notre Histoire</h2>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Foodmoods est né d&apos;un constat simple : les plateformes de livraison représentent une opportunité formidable pour les commerces de proximité, mais leur gestion quotidienne peut être chronophage et complexe.
              </p>
              
              <p className="text-lg">
                Fondée en 2020 par Didier Gribeauval, Foodmoods a pour ambition de démocratiser l&apos;accès à ces plateformes. Nous croyons que chaque épicerie, chaque magasin de quartier mérite de profiter de cette révolution digitale, sans avoir à sacrifier son temps ou ses ressources.
              </p>
              
              <p className="text-lg">
                Nous avons accompagné plus de 500 commerces dans toute la France, leur permettant de se concentrer sur ce qu&apos;ils font de mieux : servir leurs clients et faire vivre leurs quartiers.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
