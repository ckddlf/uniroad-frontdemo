'use client';

import React from 'react';
import { Settings, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Utensils, Bus, ShoppingCart, Globe, Plus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="dashboard-page fade-in">
      <header className="page-header">
        <div className="header-left">
           <h1>나의 교환 관리</h1>
        </div>
        <Settings size={24} />
      </header>

      <section className="budget-section">
        <div className="budget-header">
          <span>남은 예산</span>
          <span className="badge">D-12</span>
        </div>
        <h2 className="budget-amount">€510</h2>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: '68%' }}></div>
        </div>
        <div className="budget-info">
          <span>총 예산 €1,500</span>
          <span>68% 사용</span>
        </div>
      </section>

      <div className="category-icons">
        {[
          { icon: Utensils, label: '식비' },
          { icon: Bus, label: '교통' },
          { icon: ShoppingCart, label: '쇼핑' },
          { icon: Globe, label: '여행' },
          { icon: Plus, label: '기타' }
        ].map((item, idx) => (
          <div key={idx} className="cat-icon-item">
            <div className="icon-wrap"><item.icon size={20} /></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <section className="calendar-section">
        <div className="section-title">
          나의 일정
          <div className="calendar-nav">
             <ChevronLeft size={20} />
             <span>October 2026</span>
             <ChevronRight size={20} />
          </div>
        </div>
        <div className="calendar-grid">
           {/* Mock calendar days */}
           {Array.from({ length: 31 }).map((_, i) => (
             <div key={i} className={`day ${i + 1 === 2 ? 'active' : ''}`}>
               {i + 1}
             </div>
           ))}
        </div>
        <div className="event-card">
           <div className="event-time">19:00 - 22:00</div>
           <div className="event-info">
             <h4>Study Abroad Meetup</h4>
             <p>Marienplatz center</p>
           </div>
        </div>
      </section>

      <style jsx>{`
        .dashboard-page {
          padding: 1rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 1.3rem;
          font-weight: 800;
        }

        .budget-section {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 24px;
          border-radius: 24px;
          color: white;
          margin-bottom: 2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .badge {
          background: rgba(255,255,255,0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.75rem;
        }

        .budget-amount {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .progress-container {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .progress-bar {
          height: 100%;
          background: #3b82f6;
          border-radius: 4px;
        }

        .budget-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .category-icons {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2.5rem;
        }

        .cat-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .icon-wrap {
          width: 50px;
          height: 50px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
        }

        .cat-icon-item span {
          font-size: 0.75rem;
          color: #64748b;
        }

        .calendar-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          margin-bottom: 1.5rem;
        }

        .day {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          border-radius: 8px;
        }

        .day.active {
          background: #2563eb;
          color: white;
          font-weight: 700;
        }

        .event-card {
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          padding: 16px;
          border-radius: 0 12px 12px 0;
          display: flex;
          gap: 16px;
        }

        .event-time {
          font-size: 0.75rem;
          font-weight: 700;
          color: #2563eb;
          min-width: 80px;
        }

        .event-info h4 {
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .event-info p {
          font-size: 0.75rem;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}
