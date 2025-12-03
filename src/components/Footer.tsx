import { Store, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  lang: string;
  dict: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
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
  };
}

const Footer = ({ lang, dict }: FooterProps) => {
  const basePath = `/${lang}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Store className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-gradient">Foodmoods</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.navigation}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={basePath} className="hover:text-primary transition-colors">{dict.nav.home}</Link></li>
              <li><Link href={`${basePath}/services`} className="hover:text-primary transition-colors">{dict.nav.services}</Link></li>
              <li><Link href={`${basePath}/about`} className="hover:text-primary transition-colors">{dict.nav.about}</Link></li>
              <li><Link href={`${basePath}/contact`} className="hover:text-primary transition-colors">{dict.nav.contact}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.services}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={`${basePath}/services`} className="hover:text-primary transition-colors">{dict.footer.servicesLinks.delivery}</Link></li>
              <li><Link href={`${basePath}/services`} className="hover:text-primary transition-colors">{dict.footer.servicesLinks.catalog}</Link></li>
              <li><Link href={`${basePath}/services`} className="hover:text-primary transition-colors">{dict.footer.servicesLinks.support}</Link></li>
              <li><Link href={`${basePath}/services`} className="hover:text-primary transition-colors">{dict.footer.servicesLinks.analytics}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@foodmoods.fr" className="hover:text-primary transition-colors">
                  contact@foodmoods.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>15 rue des Halles, 75001 Paris</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Foodmoods. {dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
