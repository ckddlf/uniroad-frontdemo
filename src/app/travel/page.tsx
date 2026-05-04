'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Bell, Plane, Bed, Map, Smartphone, Gift } from 'lucide-react';

export default function Travel() {
  const categories = [
    { icon: Plane, label: '항공권' },
    { icon: Bed, label: '숙소' },
    { icon: Map, label: '유레일' },
    { icon: Smartphone, label: '데이터' },
    { icon: Gift, label: '쿠폰' },
  ];

  return (
    <div className="travel-page fade-in">
      <header className="page-header">
        <h1>교환학생 특가 여행</h1>
        <div className="header-actions">
          <Bell size={24} />
        </div>
      </header>

      <div className="search-bar">
        <Search size={20} color="#94a3b8" />
        <input type="text" placeholder="어디로 떠나고 싶으신가요?" />
      </div>

      <div className="travel-categories">
        {categories.map((cat, idx) => (
          <div key={idx} className="travel-cat-item">
            <div className="cat-icon-box"><cat.icon size={24} /></div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      <section className="promo-banner">
        <div className="promo-content">
          <span className="promo-tag">4월 한정</span>
          <h2>유럽 숙소 15% 할인</h2>
          <p>교환학생 전용 시크릿 쿠폰북</p>
        </div>
        <div className="promo-image">
           <Image src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=300&auto=format&fit=crop" alt="Promo" fill objectFit="cover" />
        </div>
      </section>

      <section className="section">
        <div className="section-title">이번 주 인기 여행지</div>
        <div className="trip-grid">
           {[
             { name: '로마, 이탈리아', price: '€45~', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=300&auto=format&fit=crop' },
             { name: '파리, 프랑스', price: '€52~', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=300&auto=format&fit=crop' }
           ].map((trip, idx) => (
             <div key={idx} className="trip-card">
               <div className="trip-image-wrap">
                 <Image src={trip.image} alt={trip.name} fill objectFit="cover" />
               </div>
               <div className="trip-details">
                 <h4>{trip.name}</h4>
                 <p className="trip-price">최저 {trip.price}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      <style jsx>{`
        .travel-page {
          padding: 1rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .page-header h1 {
          font-size: 1.3rem;
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

        .travel-categories {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .travel-cat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .cat-icon-box {
          width: 50px;
          height: 50px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .travel-cat-item span {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .promo-banner {
          background: #fdf2f8;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          height: 120px;
          margin-bottom: 2rem;
        }

        .promo-content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .promo-tag {
          font-size: 0.7rem;
          color: #db2777;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .promo-content h2 {
          font-size: 1.1rem;
          margin-bottom: 2px;
        }

        .promo-content p {
          font-size: 0.75rem;
          color: #64748b;
        }

        .promo-image {
          width: 100px;
          position: relative;
        }

        .trip-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .trip-card {
          border-radius: 16px;
          overflow: hidden;
          background: white;
          border: 1px solid #f1f5f9;
        }

        .trip-image-wrap {
          height: 120px;
          position: relative;
        }

        .trip-details {
          padding: 12px;
        }

        .trip-details h4 {
          font-size: 0.9rem;
          margin-bottom: 4px;
        }

        .trip-price {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
