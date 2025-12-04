const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foodmoods",
  legalName: "Foodmoods SASU",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Didier Gribeauval"
  },
  url: "https://www.foodmoods.fr",
  logo: "https://www.foodmoods.fr/logo.png",
  description:
    "Foodmoods est un service d'intégration e-commerce pour commerces indépendants. Nous aidons les épiceries et magasins de quartier à vendre facilement sur les plateformes de livraison, notamment Uber Eats.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 rue des Halles",
    addressLocality: "Paris",
    postalCode: "75001",
    addressCountry: "FR"
  },
  email: "contact@foodmoods.fr",
  sameAs: [
    "https://www.linkedin.com/company/foodmoods",
    "https://www.ubereats.com"
  ],
  areaServed: "France",
  knowsAbout: [
    "Uber Eats",
    "Intégration e-commerce",
    "Gestion catalogue",
    "Activation magasin",
    "Optimisation vente en ligne"
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Intégration des commerces sur Uber Eats",
      description:
        "Service complet pour aider les commerces à être présents sur Uber Eats : création catalogue, activation, optimisation et accompagnement."
    },
    availableOn: "https://www.ubereats.com"
  },
  brand: {
    "@type": "Brand",
    name: "Pomeno"
  }
};

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData)
      }}
    />
  );
}

