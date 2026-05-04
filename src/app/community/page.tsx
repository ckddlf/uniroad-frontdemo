'use client';

import React from 'react';
import { Search, Bell, MessageSquare, ThumbsUp, PenLine } from 'lucide-react';
import { COMMUNITY_MOCK } from '@/data/mock';

export default function Community() {
  const categories = [
    { name: '자유 게시판', icon: '📝' },
    { name: '동행 구하기', icon: '🤝' },
    { name: '교환학생 정보', icon: '💡' },
    { name: '질문답변', icon: '❓' },
  ];

  return (
    <div className="community-page fade-in">
      <header className="page-header">
        <h1>커뮤니티</h1>
        <div className="header-actions">
          <Bell size={24} />
        </div>
      </header>

      <div className="search-bar">
        <Search size={20} color="#94a3b8" />
        <input type="text" placeholder="글 제목, 내용, 해시태그" />
      </div>

      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-item">
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-name">{cat.name}</span>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="section-title">실시간 인기글</div>
        <div className="popular-list">
          {COMMUNITY_MOCK.popular.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <span className="board-tag">{post.board}</span>
              </div>
              <h4>{post.title}</h4>
              <div className="post-footer">
                <div className="stats">
                  <span><ThumbsUp size={14} /> {post.likes}</span>
                  <span><MessageSquare size={14} /> {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="fab"><PenLine size={24} /></button>

      <style jsx>{`
        .community-page {
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
          margin-bottom: 1.5rem;
        }

        .search-bar input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.95rem;
        }

        .category-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .category-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 16px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cat-icon {
          font-size: 1.4rem;
        }

        .cat-name {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .popular-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .post-card {
          padding: 16px;
          background: white;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
        }

        .board-tag {
          font-size: 0.7rem;
          color: #2563eb;
          font-weight: 600;
          background: #eff6ff;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .post-card h4 {
          margin: 8px 0;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .post-footer {
          display: flex;
          justify-content: flex-end;
        }

        .stats {
          display: flex;
          gap: 12px;
          color: #94a3b8;
          font-size: 0.8rem;
        }

        .stats span {
          display: flex;
          align-items: center;
          gap: 4px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </div>
  );
}
