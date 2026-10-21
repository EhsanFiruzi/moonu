export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moonu.app"; // TODO: real domain
export const LINKS = {
  email: "ijaeyung1286@gmail.com",
  download: "https://myket.ir/app/ir.ehsan.moonu", // only on Myket for now
  myketDev: "https://myket.ir/developer/dev-105207", // other apps
  bazaarDev: "https://cafebazaar.ir/developer/045014426640", // other apps
};
export type Lang = "fa" | "en";
export const isLang = (l: string): l is Lang => l === "fa" || l === "en";
const A = "/assets/";
export const sounds = [
  { id: "rain", icon: "rain", bg: "cozy_rainy_cabin_lake_retreat", fa: "باران", en: "Rain", dfa: "قطره‌های آرام روی کلبه و دریاچه", den: "Soft drops on a cabin and a quiet lake" },
  { id: "fire", icon: "fire", bg: "cozy_winter_cabin_by_the_fire", fa: "آتش", en: "Fireplace", dfa: "گرمای شومینه در شبی سرد", den: "A crackling fire on a cold night" },
  { id: "forest", icon: "forest", bg: "moonlit_mossy_forest_stream", fa: "جنگل", en: "Forest", dfa: "نهری در جنگل زیر نور ماه", den: "A mossy stream under the moon" },
  { id: "ocean", icon: "ocean", bg: "golden_sunset_over_tranquil_waves", fa: "دریا", en: "Ocean", dfa: "موج‌های آرام هنگام غروب", den: "Gentle waves at sunset" },
  { id: "wind", icon: "wind", bg: "wind_swept_golden_lakeside_vista", fa: "باد", en: "Wind", dfa: "نسیمی کنار دریاچه", den: "A breeze across the lakeside" },
  { id: "yoga", icon: "yoga", bg: "yoga", fa: "یوگا", en: "Yoga", dfa: "فضایی برای نفس‌های عمیق", den: "Room for slow, deep breaths" },
  { id: "night", icon: "music-genre-moon", bg: "cozy_moonlit_nursery_dreamscape", fa: "موسیقی شب", en: "Night music", dfa: "ملودی‌های آرام زیر ماه", den: "Soft melodies under the moon" }, // adjust names to match the app
].map((s) => ({ ...s, iconUrl: `${A}svg_icons/${s.icon}.svg`, bgUrl: `${A}sound_categories_bg/${s.bg}.png` }));
export const momo = (n: string) => `${A}moonu_momo/${n}.png`;
const shot = (n: string) => encodeURI(`${A}app_screenshots/${n}.png`); // tip: rename files to plain ASCII
export const shots: Record<Lang, string[]> = {
  en: ["find_your_night_time_calm", "moonu_ a_dreamy_night_of_calm_1", "moonu_cozy_fireplace_sleepscape"].map(shot),
  fa: ["Moonu_ آرامش شب، به سبک تو", "ترکیب صداها در شب آرام", "ردیابی خواب در شب_های آرام"].map(shot),
};
export const bgs = { hero: "/assets/backgrounds/momo_sleep_with_stars.jpg", mission: "/assets/backgrounds/momo_looking_at_moon.jpg" };
