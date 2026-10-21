import type { Lang } from "./links";

const fa = {
  meta: { title: "مونو؛ همراه صدای خواب تو، با مومو", desc: "مونو اپ صدای خواب است: باران، آتش، جنگل و دریا را ترکیب کن، خوابت را ردیابی کن و با مومو، دوست خرسی‌ات، شب آرام‌تری داشته باش. دانلود از مایکت." },
  nav: { home: "خانه", features: "امکانات", sounds: "صداها", about: "درباره", faq: "سوالات", download: "دانلود اپ" },
  hero: { eyebrow: "خواب بهتر · صبح‌های شادتر", h1: "همراه صدای خواب تو", sub: "مونو با صداهای آرام‌بخش، ملودی‌های دلنشین و یک خرس کوچولوی دوست‌داشتنی کمکت می‌کند راحت‌تر بخوابی و آرام شوی.", note: "برای اندروید، فعلاً در مایکت" },
  why: { eyebrow: "چرا مونو؟", title: "ساده. آرام. ساخته‌شده برای تو." },
  features: [
    { t: "صداهای آرام‌بخش", d: "باران، جنگل، دریا، آتش و بیشتر، هر وقت لازم داشتی آماده‌اند." },
    { t: "ترکیب‌های شخصی", d: "چند صدا را هم‌زمان پخش کن، میزان هرکدام را تنظیم کن و ترکیبت را ذخیره کن." },
    { t: "مومو، دوست خرسی تو", d: "مومو با تو می‌خوابد و بیدار می‌شود و اسمت را صدا می‌زند. اسمش را هم خودت انتخاب کن." },
    { t: "شب‌های بهتر", d: "مدت پخش را تعیین کن و با بینش‌های خواب ببین شب‌هایت چطور بهتر می‌شوند." },
  ],
  explore: { eyebrow: "صداها را بشناس", title: "طبیعت، باران، دریا و بیشتر", sub: "از جنگل‌های آرام تا بارانی ملایم، مونو آرام‌بخش‌ترین صداها را به نوک انگشتانت می‌آورد.", cta: "دانلود از مایکت", next: "تصویر بعدی اپ" },
  about: { eyebrow: "قدم‌های کوچک، تغییر بزرگ", title: "آرامش تو، ماموریت ما", sub: "ما باور داریم هر کسی شایسته‌ی یک شب خوب است. مونو اینجاست تا این اتفاق بیفتد، هر بار با یک صدا.", note: "رویاهای شیرین از اینجا شروع می‌شود" },
  faqTitle: "سوالات پرتکرار",
  faq: [
    { q: "مونو چیست؟", a: "مونو یک اپ اندرویدی برای صدای خواب و روتین شبانه است. صداهای طبیعت را ترکیب می‌کنی، مدت پخش را تنظیم می‌کنی و با مومو، شخصیت خرسی اپ، خوابت را دنبال می‌کنی." },
    { q: "مونو را از کجا دانلود کنم؟", a: "فعلاً فقط از مایکت. دکمه‌ی دانلود همین صفحه تو را به صفحه‌ی مونو در مایکت می‌برد." },
    { q: "آیا مونو فارسی را پشتیبانی می‌کند؟", a: "بله. رابط مونو دو زبانه است (فارسی و انگلیسی) و برای نوشتار راست‌به‌چپ طراحی شده است." },
    { q: "می‌توانم چند صدا را با هم ترکیب کنم؟", a: "بله. چند صدا را هم‌زمان پخش کن، میزان هر کدام را جدا تنظیم کن و ترکیب را برای شب‌های بعد ذخیره کن." },
    { q: "مونو خواب مرا ردیابی می‌کند؟", a: "هر صبح مدت خواب و ساعت خواب و بیداری‌ات را ثبت می‌کنی و مونو میانگین‌ها و نمودار هفته و ماه را نشان می‌دهد." },
    { q: "چطور با پشتیبانی تماس بگیرم؟", a: "برای گزارش مشکل یا پرسش، به ایمیل پشتیبانی پایین صفحه پیام بده." },
  ],
  cta: { title: "امشب آرام‌تر بخواب", sub: "مونو را دانلود کن و مومو را ملاقات کن.", avail: "فعلاً فقط در مایکت موجود است" },
  footer: { rights: "همه حقوق محفوظ است", support: "پشتیبانی", other: "برنامه‌های دیگر", myket: "مایکت", bazaar: "کافه‌بازار" },
};

const en: typeof fa = {
  meta: { title: "Moonu: your sleep sounds companion, with Momo", desc: "Moonu is a sleep sounds app. Mix rain, fire, forest and ocean, track your sleep and unwind with Momo, your bear companion. Get it on Myket." },
  nav: { home: "Home", features: "Features", sounds: "Sounds", about: "About", faq: "FAQ", download: "Download app" },
  hero: { eyebrow: "Better sleep · Happier mornings", h1: "Your sleep sounds companion", sub: "Moonu helps you fall asleep, relax and feel better, with calming sounds, soothing melodies and a cute little bear.", note: "For Android, on Myket for now" },
  why: { eyebrow: "Why Moonu?", title: "Simple. Calming. Made for you." },
  features: [
    { t: "Calming sounds", d: "Rain, forest, ocean, fire and more, ready whenever you need them." },
    { t: "Personalized mixes", d: "Layer sounds, set each volume and save your mix as a preset." },
    { t: "Momo, your bear friend", d: "Momo sleeps and wakes with you and calls you by name. You pick the name." },
    { t: "Better nights", d: "Choose how long sounds play and see your sleep improve with insights." },
  ],
  explore: { eyebrow: "Explore the sounds", title: "Nature, rain, ocean and more", sub: "From peaceful forests to gentle rain, Moonu brings the most relaxing sounds right to your fingertips.", cta: "Get it on Myket", next: "Next app screen" },
  about: { eyebrow: "Small steps, big changes", title: "Your peace, our mission", sub: "We believe everyone deserves a good night's sleep. Moonu is here to make that happen, one sound at a time.", note: "Sweet dreams start here" },
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "What is Moonu?", a: "Moonu is an Android app for sleep sounds and a bedtime routine. You layer nature sounds, set how long they play and follow your sleep with Momo, the app's bear character." },
    { q: "Where can I download Moonu?", a: "For now, on Myket only. The download button on this page takes you to the Moonu page there." },
    { q: "Does Moonu support Persian?", a: "Yes. Moonu is bilingual (Persian and English) and built for right-to-left text." },
    { q: "Can I mix several sounds together?", a: "Yes. Play multiple sounds at once, set each volume separately and save the mix for later nights." },
    { q: "Does Moonu track my sleep?", a: "Each morning you log how long you slept and when. Moonu shows averages plus weekly and monthly charts." },
    { q: "How do I contact support?", a: "Email the support address at the bottom of the page to report a bug or ask a question." },
  ],
  cta: { title: "Sleep calmer tonight", sub: "Download Moonu and meet Momo.", avail: "Available on Myket for now" },
  footer: { rights: "All rights reserved", support: "Support", other: "Other apps", myket: "Myket", bazaar: "Cafe Bazaar" },
};

export const dict: Record<Lang, typeof fa> = { fa, en };
