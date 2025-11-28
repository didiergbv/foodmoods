"use client";

import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Store, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <NavLink href="/" className="flex items-center gap-2 text-xl font-bold" onClick={closeMenu}>
            <Store className="w-6 h-6 text-primary" />
            <span className="text-gradient">Foodmoods</span>
          </NavLink>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-background/95 backdrop-blur-lg border-t border-border space-y-1">
          <NavLink
            href="/"
            end
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            Accueil
          </NavLink>
          <NavLink
            href="/services"
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            href="/about"
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            À propos
          </NavLink>
          <NavLink
            href="/contact"
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
