'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#464646c2] shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-3xl italic font-bold text-white">
            <Link href="/">CarShowcase</Link>
          </div>

          <div className="hidden md:flex space-x-8 text-white font-medium">
            <Link href="/" className="hover:text-gray-500 transition">Buy Car</Link>
            <Link href="/" className="hover:text-gray-500 transition">Sell Car</Link>
            <Link href="/" className="hover:text-gray-500 transition">More Options</Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
