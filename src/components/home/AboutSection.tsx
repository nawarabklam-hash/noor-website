import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader"; // استيراد مكون العنوان المشترك
import aboutImg from "../../assets/2.png";

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isAr = language === "AR";
  const aboutT = t.about || {};

  return (
    <section id="about"  className="relative w-full py-24 bg-[#141414] text-white overflow-hidden border-y border-white/5" dir={isAr ? "rtl" : "ltr"}>
      
      {/* خلفية مضيئة خفيفة لإعطاء جمالية */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B00]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الجانب الأيسر: استخدام SectionHeader للعنوان والـ Tag والوصف */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="w-full">
              <SectionHeader 
                badge={aboutT.tag}
                title={aboutT.title}
                description={aboutT.description}
                centered={true}
              />
            </div>

            {/* Features Grid مع هوفر قوي وواضح */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {[aboutT.feature1, aboutT.feature2, aboutT.feature3, aboutT.feature4].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-xl bg-[#18181b] border border-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6B00] hover:bg-[#222222] hover:shadow-xl hover:shadow-[#FF6B00]/15 group cursor-pointer"
                >
                  <span className="text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                    {feature}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#FF6B00] group-hover:text-white">
                    ✓
                  </div>
                </div>
              ))}
            </div>

            {/* Button مع هوفر وتوهج قوي */}
            <Link to="/about-us">
              <button className="px-8 py-4 rounded-full bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/60 flex items-center gap-2">
                <span>{aboutT.learnMore}</span>
              </button>
            </Link>

          </div>

          {/* الجانب الأيمن: الصورة مع إطار وتوهج هافر واضح جداً */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B00]/40 to-transparent rounded-2xl blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full h-[400px] lg:h-[480px] rounded-2xl overflow-hidden bg-[#18181b] border border-white/15 shadow-2xl transition-all duration-500 group-hover:border-[#FF6B00]">
              <img
                src={aboutImg}
                alt="About Noor Advertising"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;