import Image from "next/image";

const TrustedBy = () => {
  const brands = [
    { name: "Proxi", logo: "/images/logo-proxi.png" },
    { name: "Marché d'à côté", logo: "/images/logo-marche-a-cote.jpeg" },
    { name: "Cocci", logo: "/images/logo-cocci.png" },
    { name: "Rapid Market", logo: "/images/logo-rapid-market.png" },
    { name: "Panier Sympa", logo: "/images/logo-panier-sympa.jpg" },
  ];

  return (
    <section className="section-padding border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            Ils nous font confiance
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[180px] h-24 flex items-center justify-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <Image 
                src={brand.logo} 
                alt={brand.name}
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          * Noms d&apos;enseignes utilisés à titre illustratif
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
