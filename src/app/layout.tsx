import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Inter,
  Oooh_Baby,
  Sofia_Sans_Condensed,
  Manrope,
  Poppins,
  Playfair,
  Racing_Sans_One,
  Quicksand,
  Rozha_One,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Levent",
  description: "Levent",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const racing = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-racing",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400"],
});

const rozha = Rozha_One({
  subsets: ["latin"],
  variable: "--font-rozha",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",

          manrope.variable,
          inter.variable,
          poppins.variable,
          playfair.variable,
          racing.variable,
          quicksand.variable,
          rozha.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
