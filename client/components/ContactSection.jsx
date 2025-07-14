"use client";
import { useState } from "react";
import { FaFacebookF, FaFacebookMessenger, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import LoginForm from "./LoginForm";
import { Pacifico } from 'next/font/google';


const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function ContactSection() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section id="contact" className=" contact-section bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-8xl font-bold text-[rgb(246,119,138)] opacity-14 mb-2">Get in Touch</h2>
        <p className="text-2xl font-bold mb-12">Need to talk about project?</p>
        <a href="mailto:zippyk80@gmail.com?subject=Hello%20Zipporah&body=Hi%20Zipporah%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
    onClick={(e) => {setTimeout(() => {
      const newTab = window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=zippyk80@gmail.com&su=Hello%20Zipporah&body=Hi%20Zipporah%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!",
        "_blank"
      );
      if (newTab) {
        newTab.focus();
      }
    }, 500); 
  }}
          className="inline-block bg-[rgb(246,119,138)] text-[black] px-6 py-3 rounded-md font-semibold hover:bg-[rgba(246,119,138,0.557)] transition"
        >
          Say Hello
        </a>
        <p className="mt-10 mb-4 text-lg">You can find me on</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <IconLink href="https://www.facebook.com/Zipporah.KwambokaX/"><FaFacebookF /></IconLink>
          <IconLink href="https://m.me/Zipporah.KwambokaX"><FaFacebookMessenger /></IconLink>
          <IconLink href="https://x.com/zippy_kwamboka"><SiX /></IconLink>
          <IconLink href="https://www.instagram.com/zipporah_kwa.mboka/"><FaInstagram /></IconLink>
          <IconLink href="https://www.linkedin.com/in/zipporah-kwamboka/"><FaLinkedinIn /></IconLink>
          <IconLink href="https://wa.me/+254757142737"><FaWhatsapp /></IconLink>
        </div>
      </div>
       {/* Show Login Button + Form */}
      <div className="absolute bottom-6 left-6">
        {!showLogin && (
          <button
            onClick={() => setShowLogin(true)}
            className={`logo ${pacifico.className}`}>Zipporah
          </button>
        )}
      </div>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </section>
  );
}

function IconLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[black] bg-[rgb(246,119,138)] p-3 rounded-full hover:bg-[rgba(246,119,138,0.557)] transition text-xl"
    >
      {children}
    </a>
  );
}
