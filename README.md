# HElkady-memory-game

Memory card matching game PWA: three levels, move and time counters, best scores saved locally.

## بالعربي
لعبة ذاكرة: اقلب الكروت وطابق الأزواج. تلات مستويات، عداد حركات ووقت، وأفضل نتيجة محفوظة.

## Run
No build step. It is a static web app (PWA) that works on phones and desktop.

```
npm start        # serves the folder, open the printed URL
npm test         # logic tests (Node 18+, no dependencies)
```

Deploy: upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages). On a phone, open the site and choose "Add to Home Screen" to install it like an app. To get an APK later, wrap the folder with Capacitor (`npx cap add android`).

## التشغيل
مفيش بناء. افتح `index.html` من خلال أي سيرفر ساكن (`npm start`) أو ارفع المجلد على GitHub Pages أو Netlify، وعلى الموبايل اختار "إضافة إلى الشاشة الرئيسية".


## License
MIT
