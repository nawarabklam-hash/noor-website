/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

// 1. تعريف الأنواع
type Language = "EN" | "AR";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
}

// 2. إنشاء الـ Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. إنشاء الـ Provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem("lang");
    return (savedLang as Language) || "EN";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const isRtl = language === "AR";

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = isRtl ? "rtl" : "ltr";
    htmlElement.lang = language.toLowerCase();
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. الـ Custom Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};