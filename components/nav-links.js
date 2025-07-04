"use client";

import { usePathname } from "next/navigation";
import classes from "./nav-links.module.css";
import Link from "next/link";

export default function NavLinks({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
