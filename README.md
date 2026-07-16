# NOOR Website

## Project Structure

هذا الملف يوضح تنظيم المشروع ومسؤولية كل مجلد وملف داخل المشروع.


---

# Root Structure


NOOR/
│
├── public/
├── src/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env
└── README.md



---

# public/

يحتوي على الملفات العامة التي يتم الوصول إليها مباشرة بدون معالجة من Vite.

يتم وضع:

- الصور العامة
- ملفات الـ favicon
- ملفات static
- ملفات الـ videos


مثال:


public/
│
├── images/
├── videos/
└── favicon.svg



---

# src/

المجلد الرئيسي الذي يحتوي على كود التطبيق.


---

# src/assets/

يحتوي على الملفات التي يتم استيرادها داخل React.

يتم وضع:

- الصور المستخدمة داخل Components
- Icons
- Fonts
- ملفات التصميم المحلية


مثال:


assets/
│
├── images/
├── icons/
└── fonts/



---

# src/components/

يحتوي على Components قابلة لإعادة الاستخدام داخل المشروع.


يتم تقسيمه حسب الوظيفة:


## components/common/

Components عامة تستخدم في أكثر من مكان.

مثل:

- Button
- Input
- Modal
- Container
- SectionTitle


---

## components/layout/

Components الخاصة بهيكل الموقع.

مثل:

- Navbar
- Footer
- Layout


---

## components/ui/

Components الخاصة بعناصر الواجهة الصغيرة.

مثل:

- Cards
- Loaders
- Sliders
- Dropdowns


---

## components/sections/

يحتوي على Sections كبيرة من الصفحات.

مثل:

- Hero Section
- Services Section
- Gallery Section


---

# src/pages/

يحتوي على صفحات الموقع الرئيسية.

كل ملف يمثل Route أو صفحة مستقلة.


مثال:


pages/

├── Home.tsx
├── About.tsx
├── Gallery.tsx
└── Contact.tsx



---

# src/routes/

يحتوي على إعدادات Routing الخاصة بالمشروع.

يتم وضع:

- تعريف الصفحات
- Paths
- Route Configuration


مثال:


routes/
└── index.tsx



---

# src/data/

يحتوي على البيانات الثابتة الخاصة بالمشروع.


يتم وضع:

- Arrays
- Objects
- Static Content


مثال:


data/

├── services.ts
├── projects.ts
└── references.ts



---

# src/hooks/

يحتوي على Custom React Hooks.


يتم وضع:

- Hooks مشتركة
- Logic قابل لإعادة الاستخدام


مثال:


hooks/

├── useScroll.ts
├── useTheme.ts
└── useFetch.ts



---

# src/types/

يحتوي على TypeScript Interfaces و Types.


يتم وضع:

- Interface Definitions
- Type Aliases


مثال:


types/

└── index.ts



---

# src/utils/

يحتوي على Functions مساعدة تستخدم في أكثر من مكان.


يتم وضع:

- Format Functions
- Validation Functions
- Helper Functions


مثال:


utils/

├── formatDate.ts
└── validation.ts



---

# src/styles/

يحتوي على ملفات التصميم العامة.


يتم وضع:

- Global CSS
- Variables
- Custom Styles


مثال:


styles/

└── index.css



---

# src/App.tsx

الملف الرئيسي للتطبيق.

يحتوي على:

- Application Layout
- Routes
- Global Components


---

# src/main.tsx

نقطة تشغيل المشروع.

يحتوي على:

- React Root
- Providers
- Application Initialization


---

# .env

يحتوي على المتغيرات السرية وإعدادات البيئة.


مثل:

- API URLs
- Keys
- Environment Variables


---

# package.json

يحتوي على:

- Project Information
- Dependencies
- Scripts


---

# vite.config.ts

ملف إعدادات Vite.

يحتوي على:

- Plugins
- Build Configuration
- Development Settings


---

# tsconfig.json

ملف إعدادات TypeScript.

يحتوي على:

- Compiler Options
- Type Checking Configuration


---

# Development Commands

تشغيل المشروع:

```bash
npm run dev"# noor-website" 
