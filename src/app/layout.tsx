import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "유니로드 (UniRoad) | 교환학생 사전 예약",
  description: "아는 선배가 없어도 유니로드가 선배가 되어준다. 교환학생 필수 앱 유니로드 사전 예약 중!",
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
          <main className="page-content" style={{ paddingBottom: 0 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
