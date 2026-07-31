import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/Services";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative w-full py-24 text-white overflow-x-hidden max-w-full">
      
      {/* تأثير إضاءة خفي تم تصغيره وتقييده للموبايل لمنع السكرول الأفقي */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[600px] md:w-[1000px] h-[250px] md:h-[400px] bg-[#FF6B00]/15 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        
        {/* استخدام مكون الترويسة المشترك */}
        <SectionHeader
        
          badge={t.whyChooseUs.badge}
          title={t.services.sectionTitle}
          description={t.services.sectionDesc}
          centered={true}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {servicesData.map((service, index) => {
            const translationsList = [
              {
                title: t.servicesGrid.boxLettersTitle,
                description: t.servicesGrid.boxLettersDesc,
              },
              {
                title: t.servicesGrid.signTitle,
                description: t.servicesGrid.signDesc,
              },
              {
                title: t.servicesGrid.digitalPrintingTitle || service.title,
                description: t.servicesGrid.digitalPrintingDesc || service.description,
              }
            ];

            const currentService = translationsList[index] || service;

            return (
              <Link
                key={service.id}
                to={service.path}
                className="group relative bg-[#121212] rounded-2xl overflow-hidden border border-white/5 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FF6B00]/60 hover:shadow-2xl hover:shadow-[#FF6B00]/10 flex flex-col w-full max-w-full"
              >
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={service.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between relative">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#FF6B00] break-words">
                      {currentService.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/90 break-words">
                      {currentService.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[#FF6B00] font-semibold text-sm transition-all duration-300 group-hover:translate-x-2">
                    <span>{t.servicesGrid.learnMore}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;