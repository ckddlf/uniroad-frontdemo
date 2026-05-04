'use client';

import React from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';
import { EXPLORE_MOCK } from '@/data/mock';

export default function Explore() {
  return (
    <div className="explore-page fade-in">
      <header className="page-header">
        <h1>정보 탐색</h1>
        <div className="header-actions">
          <Bell size={24} />
        </div>
      </header>

      <div className="search-bar">
        <Search size={20} color="#94a3b8" />
        <input type="text" placeholder="국가, 도시, 정보를 검색하세요" />
      </div>

      <section className="section">
        <h3>내 목적지 찾기</h3>
        <div className="select-box">국가를 선택하세요 <ChevronRight size={18} /></div>
        <div className="select-box">파견 대학을 검색하세요 <ChevronRight size={18} /></div>
      </section>

      <section className="section">
        <div className="section-title">
          인기 국가
          <span>전체보기</span>
        </div>
        <div className="country-scroll">
          {EXPLORE_MOCK.countries.map((country, idx) => (
            <div key={idx} className="country-card">
              <div className="flag">{country.flag}</div>
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">추천 테마</div>
        <div className="theme-grid">
          {EXPLORE_MOCK.themes.map((theme, idx) => (
            <div key={idx} className="theme-card">
              <h4>{theme.title}</h4>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .explore-page {
          padding: 1rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .page-header h1 {
          font-size: 1.4rem;
          font-weight: 800;
        }

        .search-bar {
          background: #f1f5f9;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .search-bar input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.95rem;
        }

        .section {
          margin-bottom: 2rem;
        }

        .section h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .select-box {
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          color: #64748b;
          font-size: 0.9rem;
        }

        .country-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
        }

        .country-scroll::-webkit-scrollbar {
          display: none;
        }

        .country-card {
          min-width: 90px;
          height: 100px;
          background: white;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
        }

        .flag {
          font-size: 2rem;
        }

        .country-card span {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .theme-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .theme-card {
          padding: 20px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-radius: 16px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .theme-card h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .theme-card p {
          font-size: 0.75rem;
          color: #3b82f6;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
