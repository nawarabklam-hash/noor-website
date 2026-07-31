export interface AboutHighlight {
    id: string;
    title: string;
    icon: string; // يمكنك استخدام اسم الأيقونة أو وصفها
  }
  
  export const aboutData = {
    sectionLabel: "About Us",
    mainHeading: "Advertising Solutions That Strengthen Your Brand",
    description: "نحن متخصصون في تقديم حلول إعلانية متكاملة تجمع بين دقة التصنيع وجودة المواد العالية. نعتمد على أحدث التقنيات لنضمن تنفيذ مشاريعك بأفضل صورة ممكنة، مع التزام تام بتحقيق رضا العملاء وبناء هوية تجارية قوية تبرز في السوق.",
    image: "/path-to-your-image/about-workshop.jpg", // استبدله بمسار الصورة الفعلية من ورشتك أو أعمالك
    highlights: [
      { id: "1", title: "High Quality Materials", icon: "shield" },
      { id: "2", title: "Professional Team", icon: "users" },
      { id: "3", title: "Modern Manufacturing Equipment", icon: "cpu" },
      { id: "4", title: "On-Time Delivery", icon: "clock" },
    ],
    ctaText: "Learn More About Us",
    ctaPath: "/about",
  };