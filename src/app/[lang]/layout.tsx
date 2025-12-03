import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { locales, type Locale, getDictionary } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return {
    title: isEnglish
      ? "Foodmoods - Delivery management for local businesses"
      : "Foodmoods - Gestion de livraison pour commerces de proximité",
    description: isEnglish
      ? "Switch to delivery, hassle-free. Foodmoods manages your presence on delivery platforms while you focus on your business."
      : "Passez à la livraison, sans prise de tête. Foodmoods gère votre présence sur les plateformes de livraison pendant que vous vous concentrez sur votre commerce.",
    metadataBase: new URL("https://foodmoods.fr"),
    openGraph: {
      title: "Foodmoods",
      description: isEnglish
        ? "Switch to delivery, hassle-free."
        : "Passez à la livraison, sans prise de tête.",
      url: "https://foodmoods.fr",
      siteName: "Foodmoods",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isEnglish
            ? "Foodmoods - Switch to delivery, hassle-free"
            : "Foodmoods - Passez à la livraison, sans prise de tête",
        },
      ],
      locale: isEnglish ? "en_US" : "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Foodmoods",
      description: isEnglish
        ? "Switch to delivery, hassle-free."
        : "Passez à la livraison, sans prise de tête.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://foodmoods.fr/${lang}`,
      languages: {
        fr: "https://foodmoods.fr/fr",
        en: "https://foodmoods.fr/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}



