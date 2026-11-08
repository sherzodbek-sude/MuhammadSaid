MUHAMMAD SAID JABBORALIYEV — REFINED PORTFOLIO
================================================
Bu versiya ixchamroq, tartibli va professional ko'rinishga ega.
Sayt mobil telefon va kompyuter ekranlariga moslashadi.

RASMLARNI ALMASHTIRISH
1. images papkasiga 26 ta rasmingizni joylang.
2. Nomlarini rasm-01.jpg, rasm-02.jpg, ... rasm-26.jpg qiling.
3. script.js faylini oching.
4. Quyidagi qatorni toping:
   const photos=Array.from({length:count},(_,i)=>{const n=String(i+1).padStart(2,'0');return{src:`images/rasm-${n}.svg`,title:`SURAT ${n}`}});
5. .svg ni .jpg ga almashtiring va saqlang.
PNG rasmlar uchun .png deb yozing.
Hozirgi 26 ta SVG — vaqtinchalik namuna rasmlar, haqiqiy suratlar emas.

PROFIL SURATI
index.html ichida <div class="hero-photo"> blokini toping va ichidagi
kontentni quyidagi bilan almashtiring:
<img class="profile-img" src="images/profil.jpg" alt="Muhammad Said">
style.css oxiriga qo'shing:
.profile-img { width:100%; height:100%; object-fit:cover; display:block; }
Suratingizni images/profil.jpg nomi bilan saqlang.

IJTIMOIY TARMOQLAR
index.html ichida href="#" qismlarini topib, # o'rniga profilingiz URL manzilini yozing.

GITHUB PAGES
1. github.com ga kiring va New repository yarating.
2. ZIP faylni oching.
3. Ichidagi index.html, style.css, script.js, images papkasi va README.txt
   fayllarini repository root qismiga yuklang.
4. Commit changes bosing.
5. Settings -> Pages -> Deploy from a branch ni tanlang.
6. Branch: main, Folder: / (root), Save.
7. GitHub Pages saytingiz uchun havola beradi.

Saytni tekshirish uchun index.html faylini brauzerda oching.
Google Fonts shriftlari internet orqali yuklanadi.
