"use client";

import { CheckCircle2, BarChart3, Users, Settings, Smartphone, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ServicesPageClientProps {
  lang: string;
  dict: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
      openMenu: string;
      closeMenu: string;
    };
    footer: {
      tagline: string;
      navigation: string;
      services: string;
      servicesLinks: {
        delivery: string;
        catalog: string;
        support: string;
        analytics: string;
      };
      contact: string;
      copyright: string;
    };
    services: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaButton: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
  };
}

export default function ServicesPageClient({ lang, dict }: ServicesPageClientProps) {
  const icons = [Smartphone, Settings, HeadphonesIcon, BarChart3, Users];
  const basePath = `/${lang}`;

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} dict={dict} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              {dict.services.title} <span className="text-gradient">{dict.services.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {dict.services.subtitle}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dict.services.items.map((service, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
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
                );
              })}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="section-padding bg-card/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              {dict.services.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {dict.services.ctaDescription}
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href={`${basePath}/contact`}>{dict.services.ctaButton}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  );
}



