
import React from 'react';

const BoxLetters: React.FC = () => {
  return (
    // bg-secondary لتوحيد اللون الرمادي، و min-h-screen ليعطي الصفحة خلفية كاملة، و pt-28 لنزول النصوص تحت الهيدر
    <div className="min-h-screen w-full bg-secondary pt-28 px-8 text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Box Letters
        </h1>
        <p className="text-lg text-white/85 leading-relaxed">
          هنا نقوم بتصميم وتركيب الحروف البارزة المضيئة بأحدث التقنيات وأجود الخامات لتناسب هويتك التجارية.
        </p>
      </div>
    </div>
  );
};

export default BoxLetters;