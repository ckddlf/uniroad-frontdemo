import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Global | 교환학생 커뮤니티",
  description: "해외 교환학생들을 위한 정보 공유 및 커뮤니티 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="app-container">
          <main className="page-content">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
