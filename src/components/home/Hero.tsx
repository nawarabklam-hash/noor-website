import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";

// استيراد مكتبة Swiper والمكونات الخاصة بها
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/effect-fade";

// استيراد ملفات الـ JSON للترجمة
import enTranslations from "../../locales/en.json";
import arTranslations from "../../locales/er.json"; 
import { slideImages } from "../../data";


const translations = {
  EN: enTranslations,
  AR: arTranslations
};



const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 📸 سلايدر الصور كخلفية متقلبة */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          key={language} // الحل الجذري لمشكلة توقف السلايدر عند تغيير اللغة
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}     className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={image}
                alt={`Noor Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🖤 طبقة داكنة لضمان سهولة قراءة النصوص */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 💡 تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px] pointer-events-none z-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none z-20" />

      {/* 📝 المحتوى النصي الرئيسي */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <span className="inline-block px-8 py-2.5 rounded-full bg-white/5 border border-white/10 text- font-medium tracking-wider uppercase text-primary mb-6 animate-fade-in select-none">
          {t.welcome}
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-6">
          {t.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
            {t.titleHighlight}
          </span>
        </h1>

        <p className="text-base md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-40">
          <Link to="/gallery" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full">
              {t.btnGallery}
            </Button>
          </Link>
          
          <Link to="/communication" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full">
              {t.btnContact}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;