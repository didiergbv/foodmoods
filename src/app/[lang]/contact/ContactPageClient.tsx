"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactPageClientProps {
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
    contact: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      formTitle: string;
      form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        storeName: string;
        storeNamePlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
      };
      infoTitle: string;
      email: string;
      address: string;
      responseTime: {
        title: string;
        description: string;
        available: string;
      };
      toast: {
        title: string;
        description: string;
      };
    };
  };
}

export default function ContactPageClient({ lang, dict }: ContactPageClientProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeName: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: dict.contact.toast.title,
      description: dict.contact.toast.description,
    });
    
    setFormData({
      name: "",
      email: "",
      storeName: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} dict={dict} />
      
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-5xl md:text-6xl font-bold">
                {dict.contact.title}<span className="text-gradient">{dict.contact.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.contact.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6">{dict.contact.formTitle}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {dict.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={dict.contact.form.namePlaceholder}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {dict.contact.form.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={dict.contact.form.emailPlaceholder}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="storeName" className="text-sm font-medium">
                      {dict.contact.form.storeName} *
                    </label>
                    <Input
                      id="storeName"
                      name="storeName"
                      required
                      value={formData.storeName}
                      onChange={handleChange}
                      placeholder={dict.contact.form.storeNamePlaceholder}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {dict.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={dict.contact.form.messagePlaceholder}
                      rows={4}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {dict.contact.form.submit}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="text-2xl font-bold mb-6">{dict.contact.infoTitle}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{dict.contact.email}</h3>
                        <a
                          href="mailto:contact@foodmoods.fr"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          contact@foodmoods.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{dict.contact.address}</h3>
                        <p className="text-muted-foreground">
                          15 rue des Halles<br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">{dict.contact.responseTime.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {dict.contact.responseTime.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium">{dict.contact.responseTime.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  );
}

