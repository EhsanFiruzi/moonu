import type { Metadata, Viewport } from "next";
import { Nunito, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { SITE, isLang } from "@/lib/links";
import "../globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const vaz = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vaz", display: "swap" });

export const viewport: Viewport = { themeColor: "#050818", colorScheme: "dark" };
export const generateStaticParams = () => [{ lang: "fa" }, { lang: "en" }];

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"} className={`${nunito.variable} ${vaz.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

export const metadata: Metadata = { metadataBase: new URL(SITE), icons: { icon: "/assets/moonu_momo/moonu_icon.png", apple: "/assets/moonu_momo/moonu_icon.png" } };
