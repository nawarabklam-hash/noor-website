import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { digitalPrintingSlides } from "../data/digitalPrintingData";

// متغيرات عالمية لضمان عمل الأنيميشن مرة واحدة فقط في الجلسة للصفحة
let hasAnimatedDigitalPrinting = false;

const DigitalPrinting: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "AR";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const isScrolling = useRef(false);
  const shouldAnimate = !hasAnimatedDigitalPrinting;

  const slidesContent = [
    t.digitalPrinting?.slides?.slide1,
    t.digitalPrinting?.slides?.slide2,
    t.digitalPrinting?.slides?.slide3,
  ];

  const currentSlideData = digitalPrintingSlides[currentIndex];
  const currentContent = slidesContent[currentIndex];

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;

    // بمجرد التمرير نعتبر أن الأنيميشن الأول قد تم وحصل التفاعل
    hasAnimatedDigitalPrinting = true;

    if (e.deltaY > 0) {
      if (currentIndex < digitalPrintingSlides.length - 1) {
        isScrolling.current = true;
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    } else {
      if (currentIndex > 0) {
        isScrolling.current = true;
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    }
  };

  const isReversed = currentIndex % 2 !== 0;

  return (
    <main 
      onWheel={handleWheel}
      className="w-full h-screen bg-[#161317] pt-20 pb-6 px-4 md:px-12 flex flex-col justify-center overflow-hidden relative select-none" 
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-[1350px] mx-auto relative flex flex-col justify-center h-full my-auto">
        
        <AnimatePresence mode="wait" onExitComplete={() => { hasAnimatedDigitalPrinting = true; }}>
          <motion.div
            key={currentIndex}
            initial={shouldAnimate && !hasAnimatedDigitalPrinting ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full flex flex-col ${isReversed ? "lg:flex-col-reverse" : "lg:flex-col"} justify-center gap-4 md:gap-6`}
          >
            
            {/* 1. قسم النصوص */}
            <motion.div 
              initial={shouldAnimate && !hasAnimatedDigitalPrinting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-4xl space-y-2"
            >
              <span className="text-[#FF6600] font-semibold text-xs md:text-sm block tracking-wide">
                {currentContent?.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {currentContent?.title}
              </h2>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-3xl">
                {currentContent?.description}
              </p>
            </motion.div>

            {/* 2. حاوية الصور المشتركة */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
              
              {/* الصورة الرئيسية */}
              <motion.div 
                initial={shouldAnimate && !hasAnimatedDigitalPrinting ? { opacity: 0, scale: 0.97 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-8 h-[220px] md:h-[350px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(currentSlideData.image)}
              >
                <img 
                  src={currentSlideData.image} 
                  alt="Digital Printing Visual" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-3 right-3 bg-[#161317]/90 backdrop-blur-md border border-[#FF6600]/40 px-3 py-1 rounded-xl shadow-xl flex items-center gap-2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-[9px]">
                    VR
                  </div>
                  <span className="text-white text-xs font-semibold tracking-wider">
                    Venus Reklam
                  </span>
                </div>
              </motion.div>

              {/* الصورة الإضافية (تم تعديل القسم الثالث حصراً لتملء الكرت تماماً) */}
              <motion.div 
                initial={shouldAnimate && !hasAnimatedDigitalPrinting ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -8, 0] 
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1a20]/60 backdrop-blur-sm group cursor-pointer ${
                  currentIndex === 2 
                    ? "lg:col-span-4 h-[220px] md:h-[350px] p-0" 
                    : "lg:col-span-4 h-[180px] md:h-[290px] p-3 flex items-center justify-center"
                }`}
                onClick={() => setActiveImage(currentSlideData.secondaryImage)}
              >
                <img 
                  src={currentSlideData.secondaryImage} 
                  alt="Secondary Graphic Detail" 
                  className={`transition-transform duration-500 filter drop-shadow-xl ${
                    currentIndex === 2 
                      ? "w-full h-full object-cover group-hover:scale-105" 
                      : "max-h-full max-w-full object-contain group-hover:scale-105"
                  }`}
                />
              </motion.div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* مؤشرات التنقل الجانبية */}
        <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2.5 z-20">
          {digitalPrintingSlides.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "h-6 bg-[#FF6600]" : "h-2 bg-white/20"}`}
            />
          ))}
        </div>

      </div>

      {/* نافذة تكبير الصورة (Lightbox) */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 bg-[#FF6600] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold z-50 cursor-pointer"
            >
              ✕
            </button>
            <img src={activeImage} alt="Zoomed" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
          </div>
        </div>
      )}

    </main>
  );
};

export default DigitalPrinting;