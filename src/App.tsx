import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import BoxLetters from './pages/BoxLetters';
import Sign from './pages/Sign';
import DigitalPrinting from './pages/DigitalPrinting';
import ContactUs from './pages/References'; // تم تعديل مسار الاستيراد ليكون متوافقاً مع مجلداتك
import About from './pages/About';
import Communication from './pages/References';

// مكون داخلي للتحقق من المسار الحالي وإخفاء الفوتر عند الحاجة
function LayoutContent() {
  const location = useLocation();
  const isDigitalPrinting = location.pathname === '/digital-printing';

  // إعادة التمرير للأعلى تلقائياً فور تغير أي مسار
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // أو 'smooth' للحركة الانسيابية
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-letters" element={<BoxLetters />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/digital-printing" element={<DigitalPrinting />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      
      {/* الفوتر سيظهر في كل الصفحات ما عدا صفحة الطباعة الرقمية */}
      {!isDigitalPrinting && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutContent />
    </BrowserRouter>
  );
}

export default App;