import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니로드 | 귀국 짐 정리를 더 간편하게",
  description: "교환학생 전용 중고거래, MVP 테스터 신청하기",
  openGraph: {
    title: "유니로드 | 귀국 짐 정리를 더 간편하게",
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
