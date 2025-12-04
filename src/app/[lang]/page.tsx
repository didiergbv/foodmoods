import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} dict={dict} />
      <main>
        <Hero lang={lang} dict={dict} />
        <WhatWeDo dict={dict} />
        <HowItWorks dict={dict} />
        <Testimonials dict={dict} />
        <CTA lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}







