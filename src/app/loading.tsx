'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export default function Loading() {
  const pathname = usePathname();
  const path = pathname.split('/')[1]===''? 'home': pathname.split('/')[1];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-12 h-12 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        <div className="mt-6 text-white text-lg">
        {['Taking', 'you','to', path].map((word, index) => (
          <span 
            key={index} 
            className={`inline-block mr-2 ${dmSans.className}`}
            style={{
              animation: `slideUp 1.5s ease-in-out ${index * 0.2}s infinite`
            }}
          >
            {word}{' '}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideUp {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-10px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
