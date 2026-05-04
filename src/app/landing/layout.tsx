import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니로드 | 귀국 후 짐, 교환학생끼리 거래하세요",
  description: "교환학생 전용 중고거래, MVP 테스터 신청하기",
  openGraph: {
    title: "유니로드 | 귀국 후 짐, 교환학생끼리 거래하세요",
    description: "교환학생 전용 중고거래, MVP 테스터 신청하기",
    type: "website",
  }
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
