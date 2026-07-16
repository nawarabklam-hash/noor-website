/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

import enTranslations from "../../locales/en.json";
import arTranslations from "../../locales/er.json";

const translations = {
  EN: enTranslations,
  AR: arTranslations
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;
      
      // المنطق: يختفي عند الصعود، يظهر عند النزول، وفي القمة/القاع
      if (currentScrollY < 50 || isAtBottom) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: t.home, path: "/" },
    { name: t.boxLetters, path: "/box-letters" },
    { name: t.sign, path: "/sign" },
    { name: t.digitalPrinting, path: "/digital-printing" },
    { name: t.gallery, path: "/gallery" },
    { name: t.aboutUs, path: "/about-us" },
    { name: t.communication, path: "/communication" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled 
          ? "bg-black/10 backdrop-blur-md py-4 border-b border-white/5" 
          : "bg-transparent py-6 border-transparent"
      }`}>
        {/* الحاوية المركزية بتوزيع متوازن */}
        <div className="container mx-auto flex items-center justify-center gap-65 px-4">
          
          {/* 1. اللوجو */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Noor Logo" className="h-7 w-auto object-contain" />
          </div>
          
          {/* 2. الروابط متقاربة بـ gap-6 */}
          <div className="hidden lg:flex items-center gap-6 text-white">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-[14px] font-semibold transition-all ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* 3. زر اللغة */}
          <div className="hidden lg:block flex-shrink-0">
            <Button size="md" variant="secondary" onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}>
              {language === "AR" ? "English" : "العربية"}
            </Button>
          </div>

          {/* زر الموبايل */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          </button>
        </div>
      </nav>

      {/* قائمة الموبايل */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0a0a0a] z-[60] flex flex-col p-8 border-l border-white/10 shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="self-start text-white bg-white/10 p-2 rounded-full mb-10">✕</button>
        <div className="flex flex-col gap-6 text-right">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-xl font-bold text-white hover:text-primary transition-colors">
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto">
          <Button size="lg" variant="secondary" className="w-full" onClick={() => { setLanguage(language === "EN" ? "AR" : "EN"); setIsOpen(false); }}>
            {language === "AR" ? "English" : "العربية"}
          </Button>
        </div>
      </div>
      
      {isOpen && <div className="fixed inset-0 bg-black/70 z-[50] backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;