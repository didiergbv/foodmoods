"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const pathname = usePathname();

  // Extract current locale from pathname
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split("/");
    const localeSegment = segments[1];
    if (locales.includes(localeSegment as Locale)) {
      return localeSegment as Locale;
    }
    return "fr";
  };

  const currentLocale = getCurrentLocale();

  // Get the alternate locale
  const alternateLocale: Locale = currentLocale === "fr" ? "en" : "fr";

  // Build the alternate path
  const getAlternatePath = () => {
    const segments = pathname.split("/");
    // Replace the locale segment
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = alternateLocale;
    } else {
      segments.splice(1, 0, alternateLocale);
    }
    return segments.join("/") || `/${alternateLocale}`;
  };

  // Display text: show the language you can switch TO
  const displayText = currentLocale === "fr" ? "EN" : "FR";

  return (
    <Link
      href={getAlternatePath()}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium 
        text-muted-foreground hover:text-foreground hover:bg-primary/10 
        border border-transparent hover:border-primary/20
        transition-all duration-200 ${className}`}
      title={currentLocale === "fr" ? "Switch to English" : "Passer en Français"}
    >
      <Globe className="w-4 h-4" />
      <span>{displayText}</span>
    </Link>
  );
};

export default LanguageSwitcher;

