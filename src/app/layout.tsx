import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vloggle.co"),
  title: "Vloggle - Turn Your Blogs Into Scroll-Stopping Vlogs!",
  description:
    "Vloggle is a video marketing service that turns your high-performing blogs into Youtube Channel vlogs, including script-writing, authentic presenting, and on-brand editing.",
  openGraph: {
    type: "website",
    title: "Vloggle - Turn Your Blogs Into Scroll-Stopping Vlogs!",
    description:
      "Vloggle is a video marketing service that turns your high-performing blogs into Youtube Channel vlogs, including script-writing, authentic presenting, and on-brand editing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vloggle - Turn Your Blogs Into Scroll-Stopping Vlogs!",
    description:
      "Vloggle is a video marketing service that turns your high-performing blogs into Youtube Channel vlogs, including script-writing, authentic presenting, and on-brand editing.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-42GKSQD5YW"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42GKSQD5YW');
          `}
        </Script>
      </body>
    </html>
  );
}
