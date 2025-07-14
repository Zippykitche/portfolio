"use client";
import "./Header.css";
import { useState } from "react";
import { Pacifico } from 'next/font/google';


const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className={`logo ${pacifico.className}`}>Zipporah</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <a
  href="mailto:zippyk80@gmail.com"
  onClick={(e) => {
    setTimeout(() => {
      const newTab = window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=zippyk80@gmail.com",
        "_blank"
      );
      if (newTab) {
        newTab.focus();
      }
    }, 500); 
  }}
  className="hire-me"
>
  HIRE ME
</a>

      </div>
    </header>
  );
}
