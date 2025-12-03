"use client";

import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Store, Menu, X } from "lucide-react";

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
      openMenu: string;
      closeMenu: string;
    };
  };
}

const Navbar = ({ lang, dict }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const basePath = `/${lang}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <NavLink href={basePath} className="flex items-center gap-2 text-xl font-bold" onClick={closeMenu}>
            <Store className="w-6 h-6 text-primary" />
            <span className="text-gradient">Foodmoods</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              href={basePath}
              end
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              {dict.nav.home}
            </NavLink>
            <NavLink
              href={`${basePath}/services`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              {dict.nav.services}
            </NavLink>
            <NavLink
              href={`${basePath}/about`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              {dict.nav.about}
            </NavLink>
            <NavLink
              href={`${basePath}/contact`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              {dict.nav.contact}
            </NavLink>
            
            {/* Language Switcher - Desktop */}
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher + Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            href={basePath}
            end
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            {dict.nav.home}
          </NavLink>
          <NavLink
            href={`${basePath}/services`}
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            {dict.nav.services}
          </NavLink>
          <NavLink
            href={`${basePath}/about`}
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            {dict.nav.about}
          </NavLink>
          <NavLink
            href={`${basePath}/contact`}
            className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
            activeClassName="text-primary font-medium bg-primary/10"
            onClick={closeMenu}
          >
            {dict.nav.contact}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
