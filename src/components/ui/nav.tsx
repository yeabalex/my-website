'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { openSans } from '@/components/pages/HomePage';

const Nav: React.FC = () => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const baseClasses = "transition-colors";
    const activeClasses = "text-emerald-300 font-semibold";
    const inactiveClasses = "text-white hover:text-emerald-300";
    
    return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className={`${openSans.className} z-50`}>
      <ul className="flex justify-center space-x-6 text-sm md:text-base">
        <li><Link href="/" className={getLinkClassName('/')}>Home</Link></li>
        <li><Link href="/about" className={getLinkClassName('/about')}>About</Link></li>
        <li><Link href="/projects" className={getLinkClassName('/projects')}>Projects</Link></li>
        <li><Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
