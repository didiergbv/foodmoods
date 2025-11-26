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
    
    const isActive = end 
      ? pathname === hrefString 
      : pathname.startsWith(hrefString) && hrefString !== "/";
    
    const isHomeActive = hrefString === "/" && pathname === "/";
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
