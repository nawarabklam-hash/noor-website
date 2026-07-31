export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    path: string;
  }
  
  export const servicesData: ServiceItem[] = [
    {
      id: "1",
      title: "Box Letters",
      description: "تصميم وتصنيع حروف بارزة مضيئة بجودة عالية تلفت الانتباه وتعزز حضور علامتك التجارية.",
      image: "/path-to-your-image/box-letters.jpg",
      path: "/box-letters",
    },
    {
      id: "2",
      title: "Sign",
      description: "لوحات إعلانية خارجية وداخلية مبتكرة تناسب كافة الأنشطة التجارية وتدعم هويتك.",
      image: "/path-to-your-image/sign.jpg",
      path: "/sign",
    },
    {
      id: "3",
      title: "Digital Printing",
      description: "خدمات الطباعة الرقمية الفاخرة بأحدث التقنيات لضمان ألوان دقيقة وتفاصيل مذهلة.",
      image: "/path-to-your-image/digital-printing.jpg",
      path: "/digital-printing",
    },
  ];