"use client";

import { NavLink } from "@/components/NavLink";
import { Store } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <NavLink href="/" className="flex items-center gap-2 text-xl font-bold">
            <Store className="w-6 h-6 text-primary" />
            <span className="text-gradient">Foodmoods</span>
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              href="/"
              end
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Accueil
            </NavLink>
            <NavLink
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Services
            </NavLink>
            <NavLink
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              À propos
            </NavLink>
            <NavLink
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
