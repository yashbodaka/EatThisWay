import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eat This Way - Delicious Recipes for Everyone",
  description: "Discover amazing recipes from around the world. From quick breakfasts to elaborate dinners, find your next favorite dish at Eat This Way.",
  keywords: ["recipes", "cooking", "food", "chef", "kitchen", "meals", "dinner", "breakfast"],
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
