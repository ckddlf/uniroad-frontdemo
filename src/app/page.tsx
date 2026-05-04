'use client';

import React from 'react';
import Image from 'next/image';
import { Bell, Search, Plane, Home as HomeIcon, Smartphone, Shield, CheckSquare, ChevronRight } from 'lucide-react';
import { HOME_MOCK } from '@/data/mock';

export default function Home() {
  const iconMap: { [key: string]: any } = {
    Plane, Home: HomeIcon, Smartphone, Shield, CheckSquare
  };

  return (
    <div className="home-page fade-in">
      {/* Header */}
      <header className="header">
        <div className="user-info">
          <div className="avatar">👤</div>
          <div>
            <h3>안녕하세요, {HOME_MOCK.user.name}님!</h3>
            <p>{HOME_MOCK.user.status}</p>
          </div>
        </div>
        <div className="header-actions">
          <Search size={24} />
          <Bell size={24} />
        </div>
      </header>

      {/* Countdown Banner */}
      <section className="banner-section">
        <div className="banner-card">
          <Image 
            src={HOME_MOCK.countdown.image} 
            alt="Munich" 
            width={440} 
            height={200} 
            className="banner-image"
          />
          <div className="banner-overlay">
            <h2>D-{HOME_MOCK.countdown.days} to {HOME_MOCK.countdown.destination}</h2>
            <button className="primary-btn">준비물 확인</button>
          </div>
        </div>
      </section>

      {/* Quick Menu */}
      <section className="quick-menu">
        {HOME_MOCK.quickMenu.map((item, idx) => {
          const Icon = iconMap[item.icon] || Plane;
          return (
            <div key={idx} className="menu-item">
              <div className="icon-circle">
                <Icon size={24} color="#2563eb" />
              </div>
              <span>{item.label}</span>
            </div>
          );
        })}
      </section>

      {/* Recommended Content */}
      <section className="recommended-section">
        <div className="section-title">
          파견 준비를 위한 맞춤 콘텐츠
          <span>더보기 <ChevronRight size={14} /></span>
        </div>
        <div className="content-grid">
          {HOME_MOCK.recommended.map((item) => (
            <div key={item.id} className="content-card">
              <div className="card-image-wrapper">
                <Image src={item.image} alt={item.title} fill className="card-image" />
              </div>
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>by {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding: 1rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .user-info h3 {
          font-size: 1rem;
          margin: 0;
        }

        .user-info p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 16px;
          color: #334155;
        }

        .banner-section {
          margin-bottom: 1.5rem;
        }

        .banner-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 180px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .banner-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem;
          color: white;
        }

        .banner-overlay h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .primary-btn {
          background: #2563eb;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          width: fit-content;
        }

        .quick-menu {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 2rem;
        }

        .menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: #eff6ff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .menu-item:hover .icon-circle {
          transform: translateY(-5px);
        }

        .menu-item span {
          font-size: 0.75rem;
          font-weight: 500;
          color: #334155;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .content-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #f1f5f9;
        }

        .card-image-wrapper {
          position: relative;
          height: 100px;
        }

        .card-image {
          object-fit: cover;
        }

        .card-body {
          padding: 12px;
        }

        .card-body h4 {
          font-size: 0.85rem;
          margin-bottom: 4px;
          line-height: 1.3;
          height: 2.6rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .card-body p {
          font-size: 0.7rem;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}
