import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "유니로드 | 교환학생 준비, 먼저 써보세요",
  description: "파견교 탐색부터 중고거래까지, MVP 테스터 신청하기",
  openGraph: {
    title: "유니로드 | 교환학생 준비, 먼저 써보세요",
    description: "파견교 탐색부터 중고거래까지, MVP 테스터 신청하기",
    type: "website",
  }
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
