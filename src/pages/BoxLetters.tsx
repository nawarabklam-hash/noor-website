import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Moon, Sun } from "lucide-react";

const IlluminatedLettersSection: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === "AR";

  // حالة الإضاءة: True تعني مضاء، False تعني مطفأ
  const [isLightOn, setIsLightOn] = useState(true);

  // روابط الصور (يمكنك استبدالها بصور المشروع الفعلية الخاصة بك للحالة المضاءة والمطفأة)
  const imageOn = "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"; 
  const imageOff = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"; 

  return (
    <section className="relative w-full min-h-[85vh] bg-[#121013] text-white overflow-hidden flex flex-col lg:flex-row">
      
      {/* القسم الأيسر: عرض الصورة مع زر التبديل العائم فوق حافة الصورة تماماً كما في الفيديو */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] overflow-hidden bg-black flex items-center justify-center">
        
        {/* الصورة في حالة الإطفاء (OFF) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isLightOn ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src={imageOff}
            alt="Letters Off"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* الصورة في حالة الإضاءة (ON) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isLightOn ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={imageOn}
            alt="Letters On"
            className="w-full h-full object-cover scale-105 filter brightness-110"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* زر التبديل العائم (يطابق مكان وتصميم الفيديو تماماً على الحافة الفاصلة للصورة) */}
        <div className="absolute z-30 top-1/2 -translate-y-1/2 right-4 lg:-right-6">
          <button
            onClick={() => setIsLightOn(!isLightOn)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 hover:bg-[#FF6B00] border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Toggle Light"
          >
            {isLightOn ? (
              <Moon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* القسم الأيمن: النصوص والعنوان باللون الأبيض والخلفية السوداء المتناسقة */}
      <div 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-20 bg-[#161317]"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="max-w-xl space-y-6">
          
          {/* بادج ترويجي */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-semibold">
            <span>✨</span>
            <span>{isAr ? "خيارات متقدمة ومضيئة" : "Illuminated Options"}</span>
          </div>

          {/* العنوان الرئيسي (أبيض) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white">
            {isAr ? "حروف صندوقية مضيئة - خيارات معدنية وأكريليك" : "Illuminated Box Letters - Metal & Acrylic Options"}
          </h2>

          {/* الوصف والفقرة الصغيرة (أبيض/رمادي فاتح) */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal">
            {isAr 
              ? "تُصنع حروف الصناديق المضيئة من الأكريليك العقيقي والزخارف المعدنية. ويمكن تخصيصها بخيارات مختلفة من المعادن والألوان، كما يمكن إنتاجها بدون إضاءة LED عند الطلب."
              : "Illuminated box letters are crafted from genuine acrylic and metal finishes. They can be customized with various metal and color options, and can also be produced without LED lighting upon request."}
          </p>

        </div>
      </div>

    </section>
  );
};

export default IlluminatedLettersSection;