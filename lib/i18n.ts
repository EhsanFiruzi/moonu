import type { Lang } from "./links";

const fa = {
  meta: { title: "مونو؛ همراه صدای خواب تو، با مومو", desc: "مونو اپ صدای خواب است: باران، آتش، جنگل و دریا را ترکیب کن، خوابت را ثبت کن و با مومو، دوست خرسی‌ات، روتین شبانه‌ی آرام‌تری بساز. دانلود از مایکت." },
  nav: { label: "بخش‌های صفحه", home: "خانه", features: "امکانات", sounds: "صداها", how: "نحوه کار", faq: "سوالات", download: "دانلود اپ" },
  a11y: { skip: "پرش به محتوای اصلی", download: "دانلود مونو از مایکت (در تب جدید باز می‌شود)" },
  hero: {
    eyebrow: "صدای خواب برای روتین شبانه‌ات",
    h1: "همراه صدای خواب تو",
    sub: "صداهای آرام‌بخش را در ترکیب دلخواه خودت بساز، تایمر پخش را تنظیم کن و خوابت را ثبت کن؛ مومو، خرس کوچولوی مونو، همراهت است.",
    benefits: ["صداهای آرام‌بخش", "ترکیب‌های شخصی", "مومو و ثبت خواب"],
    note: "اپ اندروید · فعلاً فقط در مایکت",
  },
  why: { eyebrow: "چرا مونو؟", title: "ساده. آرام. ساخته‌شده برای تو." },
  features: [
    { t: "صداهای آرام‌بخش", d: "باران، جنگل، دریا، آتش و بیشتر، هر وقت لازم داشتی آماده‌اند." },
    { t: "ترکیب‌های شخصی", d: "چند صدا را هم‌زمان پخش کن، میزان هرکدام را تنظیم کن و ترکیبت را ذخیره کن." },
    { t: "مومو، دوست خرسی تو", d: "مومو خرس کوچولوی مونوست و همراه روتین شبانه‌ات می‌شود. اسمش را هم خودت انتخاب می‌کنی." },
    { t: "تایمر و ثبت خواب", d: "تایمر پخش را تنظیم کن و ثبت‌های خوابت را در طول زمان مرور کن." },
  ],
  explore: { eyebrow: "صداها را بشناس", title: "طبیعت، باران، دریا و بیشتر", sub: "از جنگل‌های آرام تا بارانی ملایم، مونو آرام‌بخش‌ترین صداها را به نوک انگشتانت می‌آورد.", group: "دسته‌های صدا", cta: "دانلود از مایکت" },
  carousel: { region: "تصاویر محیط اپ", prev: "تصویر قبلی", next: "تصویر بعدی", dot: "نمایش تصویر {n} از {total}", alt: "تصویر {n} از {total} از محیط اپ مونو" },
  how: {
    eyebrow: "نحوه کار",
    title: "از صدا تا ثبت خواب، در سه قدم",
    steps: [
      { t: "صدای دلخواهت را انتخاب کن", d: "از میان باران، آتش، جنگل، دریا، باد و بیشتر." },
      { t: "ترکیب کن و مدت پخش را تنظیم کن", d: "چند صدا را با میزان جداگانه ترکیب کن و تعیین کن چقدر پخش شود." },
      { t: "خوابت را ثبت و مرور کن", d: "هر صبح مدت و ساعت خوابت را ثبت کن و میانگین‌ها و نمودارها را ببین." },
    ],
    privacy: {
      title: "شفاف درباره‌ی ثبت خواب",
      items: [
        "خواب را خودت ثبت می‌کنی؛ مونو مراحل خواب را اندازه نمی‌گیرد و تشخیص نمی‌دهد.",
        "میانگین‌ها و نمودارها فقط بر پایه‌ی ثبت‌هایی‌اند که خودت وارد کرده‌ای.",
        "مونو برای آرامش و روتین شبانه است؛ ابزار پزشکی یا درمان اختلال خواب نیست.",
      ],
      contact: "درباره‌ی داده‌هایت سوالی داری؟ به ایمیل پشتیبانی پایین صفحه پیام بده.",
    },
  },
  about: { eyebrow: "قدم‌های کوچک، تغییر بزرگ", title: "آرامش تو، ماموریت ما", sub: "ما باور داریم هر کسی شایسته‌ی یک شب خوب است. مونو اینجاست تا این اتفاق بیفتد، هر بار با یک صدا.", note: "رویاهای شیرین از اینجا شروع می‌شود" },
  faqTitle: "سوالات پرتکرار",
  faq: [
    { q: "مونو چیست؟", a: "مونو یک اپ اندرویدی برای صدای خواب و روتین شبانه است. صداهای طبیعت را ترکیب می‌کنی، مدت پخش را تنظیم می‌کنی و خوابت را ثبت می‌کنی؛ مومو، شخصیت خرسی اپ، همراهت است." },
    { q: "مونو را از کجا دانلود کنم؟", a: "فعلاً فقط از مایکت. دکمه‌ی دانلود همین صفحه تو را به صفحه‌ی مونو در مایکت می‌برد." },
    { q: "آیا مونو فارسی را پشتیبانی می‌کند؟", a: "بله. رابط مونو دو زبانه است (فارسی و انگلیسی) و برای نوشتار راست‌به‌چپ طراحی شده است." },
    { q: "می‌توانم چند صدا را با هم ترکیب کنم؟", a: "بله. چند صدا را هم‌زمان پخش کن، میزان هر کدام را جدا تنظیم کن و ترکیب را برای شب‌های بعد ذخیره کن." },
    { q: "آیا می‌توانم خوابم را ثبت کنم؟", a: "بله. هر صبح مدت خواب و ساعت خواب و بیداری‌ات را خودت ثبت می‌کنی و مونو میانگین‌ها و نمودار هفته و ماه را نشان می‌دهد." },
    { q: "چطور با پشتیبانی تماس بگیرم؟", a: "برای گزارش مشکل یا پرسش، به ایمیل پشتیبانی پایین صفحه پیام بده." },
  ],
  cta: { title: "امشب روتین آرام‌تری شروع کن", sub: "مونو را دانلود کن و مومو را ملاقات کن.", avail: "اپ اندروید · فعلاً فقط در مایکت موجود است" },
  footer: { rights: "همه حقوق محفوظ است", support: "پشتیبانی", other: "برنامه‌های دیگر", myket: "مایکت", bazaar: "کافه‌بازار" },
};

const en: typeof fa = {
  meta: { title: "Moonu: your sleep sounds companion, with Momo", desc: "Moonu is a sleep sounds app. Mix rain, fire, forest and ocean, log your sleep and wind down with Momo, your bear companion. Get it on Myket." },
  nav: { label: "Page sections", home: "Home", features: "Features", sounds: "Sounds", how: "How it works", faq: "FAQ", download: "Download app" },
  a11y: { skip: "Skip to main content", download: "Download Moonu from Myket (opens in a new tab)" },
  hero: {
    eyebrow: "Sleep sounds for your bedtime routine",
    h1: "Your sleep sounds companion",
    sub: "Build your own mix of calming sounds, set a playback timer and log your sleep, with Momo the bear beside you.",
    benefits: ["Calming sounds", "Personal mixes", "Momo & sleep log"],
    note: "Android app · on Myket for now",
  },
  why: { eyebrow: "Why Moonu?", title: "Simple. Calming. Made for you." },
  features: [
    { t: "Calming sounds", d: "Rain, forest, ocean, fire and more, ready whenever you need them." },
    { t: "Personalized mixes", d: "Layer sounds, set each volume and save your mix as a preset." },
    { t: "Momo, your bear friend", d: "Momo is Moonu's little bear, a companion for your bedtime routine. You choose its name." },
    { t: "Timer and sleep log", d: "Set a playback timer and review your sleep logs over time." },
  ],
  explore: { eyebrow: "Explore the sounds", title: "Nature, rain, ocean and more", sub: "From peaceful forests to gentle rain, Moonu brings the most relaxing sounds right to your fingertips.", group: "Sound categories", cta: "Get it on Myket" },
  carousel: { region: "App screenshots", prev: "Previous screenshot", next: "Next screenshot", dot: "Show screenshot {n} of {total}", alt: "Moonu app screenshot {n} of {total}" },
  how: {
    eyebrow: "How it works",
    title: "From sounds to sleep log, in three steps",
    steps: [
      { t: "Choose your favorite sounds", d: "Pick from rain, fireplace, forest, ocean, wind and more." },
      { t: "Mix them and set the duration", d: "Layer sounds, set each volume and choose how long they play." },
      { t: "Log your sleep and review it", d: "Each morning, log how long and when you slept, then see averages and charts." },
    ],
    privacy: {
      title: "Clear about sleep logging",
      items: [
        "You log your sleep yourself; Moonu does not measure or detect sleep stages.",
        "Averages and charts are based only on the entries you add.",
        "Moonu is for relaxation and a bedtime routine. It is not a medical device or a treatment for sleep disorders.",
      ],
      contact: "Questions about your data? Email the support address at the bottom of the page.",
    },
  },
  about: { eyebrow: "Small steps, big changes", title: "Your peace, our mission", sub: "We believe everyone deserves a good night's sleep. Moonu is here to make that happen, one sound at a time.", note: "Sweet dreams start here" },
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "What is Moonu?", a: "Moonu is an Android app for sleep sounds and a bedtime routine. You layer nature sounds, set how long they play and log your sleep, with Momo, the app's bear character, beside you." },
    { q: "Where can I download Moonu?", a: "For now, on Myket only. The download button on this page takes you to the Moonu page there." },
    { q: "Does Moonu support Persian?", a: "Yes. Moonu is bilingual (Persian and English) and built for right-to-left text." },
    { q: "Can I mix several sounds together?", a: "Yes. Play multiple sounds at once, set each volume separately and save the mix for later nights." },
    { q: "Can I log my sleep?", a: "Yes. Each morning you log how long you slept and when, and Moonu shows averages plus weekly and monthly charts." },
    { q: "How do I contact support?", a: "Email the support address at the bottom of the page to report a bug or ask a question." },
  ],
  cta: { title: "Start a calmer bedtime tonight", sub: "Download Moonu and meet Momo.", avail: "Android app · available on Myket for now" },
  footer: { rights: "All rights reserved", support: "Support", other: "Other apps", myket: "Myket", bazaar: "Cafe Bazaar" },
};

export const dict: Record<Lang, typeof fa> = { fa, en };
