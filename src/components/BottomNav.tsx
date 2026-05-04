'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Users, ShoppingBag, User } from 'lucide-react';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: '홈', path: '/' },
    { icon: Search, label: '탐색', path: '/explore' },
    { icon: Users, label: '커뮤니티', path: '/community' },
    { icon: ShoppingBag, label: '장터', path: '/marketplace' },
    { icon: User, label: '나의 관리', path: '/dashboard' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link key={item.path} href={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
            <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 70px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 1px solid #eee;
          z-index: 100;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #94a3b8;
          font-size: 0.7rem;
          gap: 4px;
          transition: all 0.2s;
        }

        .nav-item.active {
          color: #2563eb;
        }

        .nav-item span {
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
