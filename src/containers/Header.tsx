"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#destinos", label: "Destinos" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-negro-profundo/70 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "py-2 px-8" : "py-4 px-8"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="#inicio">
          <Image
            src="/logo1.png"
            alt="Tropicalia Logo"
            width={130}
            height={130}
            className="h-[130px] w-auto object-contain opacity-85"
            priority
          />
        </Link>

        <ul className="flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white font-medium transition-colors duration-300 hover:text-gold-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
