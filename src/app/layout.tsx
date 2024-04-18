import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] }); // Шрифт Graphik как в макете бесплатный не нашла

export const metadata: Metadata = {
  title: "Лаборатория интернет",
  description: "Тестовое задание для компании Лаборатория интернет",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
