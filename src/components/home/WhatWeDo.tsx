import { ShoppingBag, Smartphone, TrendingUp } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Ce que fait Foodmoods</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous gérons votre activité de livraison de A à Z pour maximiser vos ventes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Gestion de catalogue</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nous créons et optimisons votre catalogue produits sur Uber Eats avec photos professionnelles et descriptions attractives.
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Gestion des commandes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Notre équipe traite toutes les commandes, gère le service client et assure un suivi en temps réel de votre activité.
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Optimisation continue</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyses détaillées, ajustements stratégiques et recommandations personnalisées pour booster vos performances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
