import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodmoods - Gestion de livraison pour commerces de proximité",
  description: "Passez à la livraison, sans prise de tête. Foodmoods gère votre présence sur les plateformes de livraison pendant que vous vous concentrez sur votre commerce.",
  metadataBase: new URL("https://foodmoods.fr"),
  openGraph: {
    title: "Foodmoods",
    description: "Passez à la livraison, sans prise de tête.",
    url: "https://foodmoods.fr",
    siteName: "Foodmoods",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foodmoods - Passez à la livraison, sans prise de tête",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodmoods",
    description: "Passez à la livraison, sans prise de tête.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

