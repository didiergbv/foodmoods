"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  lang: string;
  dict: {
    cta: {
      title: string;
      description: string;
      button: string;
      buttonSecondary: string;
    };
  };
}

const CTA = ({ lang, dict }: CTAProps) => {
  const basePath = `/${lang}`;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent)]" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              {dict.cta.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {dict.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 group"
                asChild
              >
                <Link href={`${basePath}/contact`}>
                  {dict.cta.button}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card"
                asChild
              >
                <Link href={`${basePath}/about`}>
                  {dict.cta.buttonSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
