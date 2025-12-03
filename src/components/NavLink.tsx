"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  className?: string;
  activeClassName?: string;
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, end, ...props }, ref) => {
    const pathname = usePathname();
    const hrefString = typeof href === "string" ? href : href.pathname || "";
    
    // Handle localized routes (e.g., /fr, /en, /fr/about, /en/about)
    const isActive = end 
      ? pathname === hrefString 
      : pathname.startsWith(hrefString) && hrefString !== "/" && !hrefString.match(/^\/[a-z]{2}$/);
    
    // Special handling for home routes like /fr and /en
    const isLocaleHome = hrefString.match(/^\/[a-z]{2}$/);
    const isHomeActive = isLocaleHome && pathname === hrefString;
    
    const active = isActive || isHomeActive;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, active && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
