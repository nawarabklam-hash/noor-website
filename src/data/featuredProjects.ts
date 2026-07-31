export interface Project {
    id: string;
    titleEn: string;
    titleAr: string;
    categoryEn: string;
    categoryAr: string;
    image: string;
    path: string;
  }
  
  export const featuredProjectsData: Project[] = [
    {
      id: "1",
      titleEn: "Restaurant Sign",
      titleAr: "لوحة مطعم",
      categoryEn: "Box Letters",
      categoryAr: "حروف بارزة",
      image: "/assets/projects/project1.jpg", // استبدل بمسار الصورة الفعلي
      path: "/projects/restaurant-sign",
    },
    {
      id: "2",
      titleEn: "Coffee Shop",
      titleAr: "مقالـة / مقهى",
      categoryEn: "Sign",
      categoryAr: "لوحات إعلانية",
      image: "/assets/projects/project2.jpg",
      path: "/projects/coffee-shop",
    },
    {
      id: "3",
      titleEn: "Pharmacy Sign",
      titleAr: "لوحة صيدلية",
      categoryEn: "Box Letters",
      categoryAr: "حروف بارزة",
      image: "/assets/projects/project3.jpg",
      path: "/projects/pharmacy-sign",
    },
    {
      id: "4",
      titleEn: "Clothing Store",
      titleAr: "متجر ملابس",
      categoryEn: "Digital Printing",
      categoryAr: "طباعة رقمية",
      image: "/assets/projects/project4.jpg",
      path: "/projects/clothing-store",
    },
    {
      id: "5",
      titleEn: "Hotel Entrance",
      titleAr: "مدخل فندق",
      categoryEn: "Sign",
      categoryAr: "لوحات إعلانية",
      image: "/assets/projects/project5.jpg",
      path: "/projects/hotel-entrance",
    },
    {
      id: "6",
      titleEn: "Corporate Office",
      titleAr: "مكتب شركة",
      categoryEn: "Box Letters",
      categoryAr: "حروف بارزة",
      image: "/assets/projects/project6.jpg",
      path: "/projects/corporate-office",
    },
  ];