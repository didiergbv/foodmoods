"use client";

import { CheckCircle2, BarChart3, Users, Settings, Smartphone, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Gestion complète des plateformes",
      description: "Nous prenons en charge l'intégralité de votre présence sur les plateformes de livraison",
      features: [
        "Création et mise à jour du catalogue",
        "Optimisation des horaires d'ouverture",
        "Gestion des promotions et offres spéciales"
      ]
    },
    {
      icon: Settings,
      title: "Optimisation du catalogue",
      description: "Un catalogue attractif qui convertit les visiteurs en clients",
      features: [
        "Photos professionnelles de vos produits",
        "Descriptions optimisées pour le référencement",
        "Ajustements réguliers selon les performances"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Support client dédié",
      description: "Une équipe à votre service pour gérer toutes les interactions",
      features: [
        "Réponse aux questions clients 7j/7",
        "Gestion des réclamations et litiges",
        "Suivi de la satisfaction client"
      ]
    },
    {
      icon: BarChart3,
      title: "Analyse et reporting",
      description: "Des données précises pour piloter votre activité",
      features: [
        "Rapports hebdomadaires et mensuels",
        "Analyses des tendances de vente",
        "Recommandations personnalisées"
      ]
    },
    {
      icon: Users,
      title: "Formation et accompagnement",
      description: "Nous vous accompagnons à chaque étape",
      features: [
        "Formation de votre équipe",
        "Conseils d'experts",
        "Support technique illimité"
      ]
    }
  ];


  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes pour gérer votre activité de livraison et maximiser vos revenus
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="section-padding bg-card/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Une question sur nos services ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre équipe est là pour vous conseiller et trouver la solution adaptée
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

