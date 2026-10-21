import type { Metadata, Viewport } from "next";
import { Nunito, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { SITE, isLang, momo } from "@/lib/links";
import "../globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const vaz = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vaz", display: "swap" });

// viewportFit: "cover" lets env(safe-area-inset-bottom) work for the mobile download bar
export const viewport: Viewport = { themeColor: "#050818", colorScheme: "dark", viewportFit: "cover" };
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

export const metadata: Metadata = { metadataBase: new URL(SITE), icons: { icon: momo("moonu_icon"), apple: momo("moonu_icon") } };
