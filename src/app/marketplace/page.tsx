'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Bell, SlidersHorizontal, MapPin } from 'lucide-react';
import { MARKET_MOCK } from '@/data/mock';

export default function Marketplace() {
  return (
    <div className="market-page fade-in">
      <header className="page-header">
        <h1>중고 거래</h1>
        <div className="header-actions">
          <Bell size={24} />
        </div>
      </header>

      <div className="banner-ad">
        <div className="ad-content">
          <span className="badge">교환학생 전용</span>
          <h3>안전하고 투명한 직거래</h3>
          <p>내 학교 학생 인증하고 더 안심하세요</p>
        </div>
      </div>

      <div className="filter-row">
        <div className="search-small">
          <Search size={18} />
          <input type="text" placeholder="필요한 물건을 검색하세요" />
        </div>
        <button className="filter-btn"><SlidersHorizontal size={20} /></button>
      </div>

      <div className="market-grid">
        {MARKET_MOCK.map((item) => (
          <div key={item.id} className="market-card">
            <div className="item-image">
              <Image src={item.image} alt={item.title} fill objectFit="cover" />
            </div>
            <div className="item-info">
              <h4>{item.title}</h4>
              <p className="price">{item.price}</p>
              <p className="location"><MapPin size={12} /> {item.location}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="fab">+</button>

      <style jsx>{`
        .market-page {
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

        .banner-ad {
          background: #2563eb;
          padding: 20px;
          border-radius: 20px;
          color: white;
          margin-bottom: 1.5rem;
          background-image: linear-gradient(45deg, #2563eb, #60a5fa);
        }

        .badge {
          background: rgba(255,255,255,0.2);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 8px;
        }

        .banner-ad h3 {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        .banner-ad p {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .filter-row {
          display: flex;
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        .search-small {
          flex: 1;
          background: #f1f5f9;
          padding: 10px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
        }

        .search-small input {
          background: transparent;
          border: none;
          outline: none;
          font-size: 0.9rem;
          width: 100%;
        }

        .filter-btn {
          width: 44px;
          height: 44px;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .market-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .market-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        }

        .item-image {
          position: relative;
          height: 140px;
        }

        .item-info {
          padding: 12px;
        }

        .item-info h4 {
          font-size: 0.9rem;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .price {
          font-weight: 800;
          color: #1e293b;
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .location {
          font-size: 0.7rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .fab {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 56px;
          height: 56px;
          background: #2563eb;
          color: white;
          border-radius: 28px;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </div>
  );
}
