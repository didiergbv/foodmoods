import { Store, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
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
              Aidons les commerces de proximité à prospérer sur les plateformes de livraison.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Gestion Livraison</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Optimisation Catalogue</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Support Client</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Analyse Performance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
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
          <p>© {new Date().getFullYear()} Foodmoods. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
