"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Large Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circles with solid colors */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/30 rounded-full animate-float" 
             style={{ animationDelay: '0s', animationDuration: '20s' }} />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/25 rounded-full animate-float-delayed" 
             style={{ animationDelay: '2s', animationDuration: '25s' }} />
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full animate-float" 
             style={{ animationDelay: '4s', animationDuration: '22s' }} />
        
        {/* Geometric squares and rectangles */}
        <div className="absolute top-20 right-1/4 w-40 h-40 bg-accent/20 rotate-45 animate-float-delayed" 
             style={{ animationDelay: '1s', animationDuration: '18s' }} />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-primary/25 rounded-lg rotate-12 animate-float" 
             style={{ animationDelay: '3s', animationDuration: '24s' }} />
        <div className="absolute top-1/2 left-10 w-24 h-60 bg-accent/15 rounded-full animate-float-delayed" 
             style={{ animationDelay: '5s', animationDuration: '28s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            <TrendingUp className="w-4 h-4" />
            Solution N°1 pour les commerces de proximité
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Passez à la{" "}
            <span className="text-gradient">livraison</span>
            ,<br />
            sans prise de tête
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Foodmoods gère votre présence sur les plateformes de livraison pendant que vous vous concentrez sur votre commerce.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 group"
              asChild
            >
              <Link href="/contact">
                Demander une démo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card"
              asChild
            >
              <Link href="/services">
                Découvrir nos services
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <AnimatedCounter end={500} suffix="+" duration={2500} />
              <div className="text-sm text-muted-foreground">Magasins accompagnés</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={63} duration={2500} />
              <div className="text-sm text-muted-foreground">Villes couvertes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">5M€+</div>
              <div className="text-sm text-muted-foreground">CA généré pour nos partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
