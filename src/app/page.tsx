'use client';

import React, { useState } from 'react';
import { Plane, Search, ShoppingCart, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    country: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1500684885449506896/wZxM7lr_PUB5sSnUPUwiD1C7pZ-5HXkjKjWedp9UPKp0AYJSjOqt0pBja6U5HJ2rtOtF'; // 사용자가 나중에 입력할 수 있도록 비워둡니다.

  const countries = [
    "독일", "프랑스", "스페인", "영국", "이탈리아", "네덜란드", "스웨덴", "스위스", "오스트리아", "체코", 
    "폴란드", "포르투갈", "아일랜드", "미국", "캐나다", "일본", "중국", "대만", "싱가포르", "베트남", 
    "태국", "호주", "뉴질랜드", "핀란드", "노르웨이", "덴마크"
  ].sort();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!DISCORD_WEBHOOK_URL) {
      alert('디스코드 웹훅 URL이 설정되지 않았습니다.');
      return;
    }

    setIsSubmitting(true);

    const discordPayload = {
      embeds: [{
        title: '🚀 새로운 사전 등록!',
        color: 0x2563eb,
        fields: [
          { name: '이름', value: formData.name, inline: true },
          { name: '학교', value: formData.school, inline: true },
          { name: '파견 예정 국가', value: formData.country, inline: true },
          { name: '이메일', value: formData.email, inline: false },
        ],
        timestamp: new Date().toISOString(),
      }]
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error(error);
      alert('사전 등록 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="section-content">
          <div className="badge">
            <Plane size={14} style={{ marginRight: 6 }} />
            교환학생 전용 플랫폼
          </div>
          <h1 className="main-title">
            아는 선배가 없어도,<br />
            <span className="highlight">유니로드</span>가 선배가 되어준다
          </h1>
          <p className="sub-title">
            매 학기 반복되는 정보 탐색과 중고거래를<br />
            흩어진 채널 없이 하나의 앱으로 해결합니다
          </p>
          
          <div className="registration-count">
            <span className="dot"></span>
            현재 <span className="count">22</span> 명이 사전 등록했습니다
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="section-content">
          {!isSubmitted ? (
            <div className="form-card">
              <h2>베타 출시 알림 받기</h2>
              <p>사전 등록하고 유니로드 첫 번째 유저가 되세요</p>
              
              <form onSubmit={handleSubmit}>
                <div className="input-grid">
                  <div className="input-group">
                    <label>이름</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="홍길동" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>학교</label>
                    <input 
                      type="text" 
                      name="school"
                      placeholder="서울과학기술대학교" 
                      value={formData.school}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>파견 예정 국가</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>국가를 선택하세요</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>이메일</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="hello@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? '전송 중...' : '사전 등록하기 →'}
                </button>
                <p className="privacy-info">개인정보는 출시 알림 발송에만 사용됩니다</p>
              </form>
            </div>
          ) : (
            <div className="form-card success">
              <CheckCircle2 size={48} color="#2563eb" />
              <h2>사전 등록 완료!</h2>
              <p>유니로드의 첫 번째 소식을 이메일로 전해드릴게요.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-content stats-grid">
          <div className="stat-item">
            <h3>27,252명</h3>
            <p>연간 국내 교환학생<br />파견 인원</p>
          </div>
          <div className="stat-item">
            <h3>40시간</h3>
            <p>평균 정보 탐색에<br />낭비되는 시간</p>
          </div>
          <div className="stat-item">
            <h3>4.6개</h3>
            <p>평균 교차 탐색 채널<br />수</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-content">
          <h2 className="section-heading">교환학생의 모든 준비,<br />유니로드 하나로</h2>
          <p className="section-subheading">파편화된 정보와 불안한 거래를 한 곳에서 해결합니다</p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <Search size={24} />
              </div>
              <div className="feature-text">
                <h4>파교 탐색</h4>
                <p>조건 입력 시 최적 학교 추천. 선배 후기·체크리스트·장학금 등 경험 중심 정보를 한눈에</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShoppingCart size={24} />
              </div>
              <div className="feature-text">
                <h4>교환학생 전용 중고거래</h4>
                <p>교환학생 인증 기반 신뢰 거래. 파견 전 생필품 구매부터 귀국 전 판매까지 안전하게</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageSquare size={24} />
              </div>
              <div className="feature-text">
                <h4>1:1 멘토링</h4>
                <p>해당 학교를 다녀온 귀국생에게 직접 질문. 인맥 없이도 검증된 정보를 얻을 수 있는 구조</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-content">
          <p>© 2026 UniRoad · 교환학생 전용 라이프사이클 플랫폼</p>
          <p>문의: uniroad.official@gmail.com</p>
        </div>
      </footer>

      <style jsx>{`
        .landing-container {
          background: #0f172a;
          color: white;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, sans-serif;
          width: 100%;
        }

        .section-content {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }

        .hero {
          padding: 80px 24px 60px;
          text-align: center;
          background: radial-gradient(circle at top, #1e3a8a 0%, #0f172a 100%);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background: rgba(37, 99, 235, 0.2);
          color: #60a5fa;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 30px;
          border: 1px solid rgba(37, 99, 235, 0.3);
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .highlight {
          color: #60a5fa;
          background: linear-gradient(to right, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-title {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 48px;
        }

        .registration-count {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 0.95rem;
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          margin-right: 12px;
          box-shadow: 0 0 15px #10b981;
        }

        .count {
          font-weight: 700;
          color: white;
          margin: 0 4px;
        }

        .form-section {
          padding: 0 24px 80px;
          margin-top: -30px;
        }

        .form-card {
          background: white;
          color: #1e293b;
          padding: 50px 40px;
          border-radius: 32px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          text-align: center;
        }

        .form-card h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .form-card p {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 40px;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
          text-align: left;
        }

        .input-group {
          margin-bottom: 0;
        }

        .input-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #334155;
        }

        .input-group input, .input-group select {
          width: 100%;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          font-size: 1rem;
          outline: none;
          transition: all 0.2s;
          background: #f8fafc;
        }

        .input-group input:focus, .input-group select:focus {
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .submit-btn {
          width: 100%;
          background: #1e293b;
          color: white;
          padding: 18px;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 700;
          margin-top: 10px;
          transition: transform 0.2s, background 0.2s;
        }

        .submit-btn:hover:not(:disabled) {
          background: #0f172a;
          transform: translateY(-2px);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .privacy-info {
          font-size: 0.8rem !important;
          margin-top: 20px !important;
          margin-bottom: 0 !important;
        }

        .stats-section {
          background: #f8fafc;
          padding: 80px 24px;
          color: #1e293b;
        }

        .stats-grid {
          display: flex;
          justify-content: space-around;
          text-align: center;
        }

        .stat-item h3 {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .stat-item p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        .features-section {
          padding: 100px 24px;
          text-align: center;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 20px;
          color: #60a5fa;
        }

        .section-subheading {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 60px;
        }

        .feature-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background: white;
          padding: 32px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
          color: #1e293b;
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: #eff6ff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
        }

        .feature-text h4 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .feature-text p {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
        }

        .footer {
          padding: 60px 24px 80px;
          text-align: center;
          font-size: 0.9rem;
          color: #475569;
          border-top: 1px solid #1e293b;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
          .input-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            flex-direction: column;
            gap: 40px;
          }
          .feature-cards {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 40px 24px;
          }
        }
      `}</style>
    </div>
  );
}
