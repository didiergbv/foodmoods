import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Depuis que nous travaillons avec Foodmoods, notre chiffre d'affaires en livraison a augmenté de 40%. Ils gèrent tout et nous n'avons qu'à préparer les commandes.",
      author: "Karim Medaoud",
      role: "Directeur, Supérette des Voileux",
      rating: 5
    },
    {
      quote: "Service impeccable ! L'équipe Foodmoods est réactive et professionnelle. Notre catalogue est toujours à jour et les clients sont satisfaits.",
      author: "Abdellatif Elkadouri",
      role: "Propriétaire, Epernay Market",
      rating: 5
    },
    {
      quote: "Je recommande vivement Foodmoods. Ils m'ont permis de me lancer sur les plateformes de livraison sans stress. Un vrai partenaire de confiance.",
      author: "Abdennour Oudelhour",
      role: "Gérant, Epicerie du Rond Point",
      rating: 5
    }
  ];
  
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Ce que disent nos partenaires</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des centaines de commerçants nous font confiance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
