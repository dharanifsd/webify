import type { Metadata } from "next";
import { Inter, Inter_Tight, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const interTight = Inter_Tight({ 
  subsets: ["latin"],
  variable: "--font-satoshi", // Using Inter Tight as the Satoshi alternative
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Webify | Premium Digital Growth Partner",
  description: "We engineer digital systems that increase revenue. From high-converting websites to custom software and automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${interTight.variable} ${dancingScript.variable} antialiased bg-primary text-white selection:bg-accent selection:text-white`}>
        <CustomCursor />
        <SmoothScroll>
          <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
