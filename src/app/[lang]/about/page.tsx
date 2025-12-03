import { Target, Heart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function About({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const icons = [Target, Heart, Zap];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} dict={dict} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-5xl md:text-6xl font-bold">
                {dict.about.title} <span className="text-gradient">{dict.about.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dict.about.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-card/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">{dict.about.storyTitle}</h2>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              {dict.about.storyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{dict.about.valuesTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dict.about.values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  );
}


