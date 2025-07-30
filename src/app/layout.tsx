import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { metadata } from "./metadata";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export { metadata };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 