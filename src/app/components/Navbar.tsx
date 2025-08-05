'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#464646c2] shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-3xl italic font-bold text-white">
            <Link href="/">CarShowcase</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <Link href="/" className="hover:text-gray-300 transition">Buy Car</Link>
            <Link href="/" className="hover:text-gray-300 transition">Sell Car</Link>
            <Link href="/" className="hover:text-gray-300 transition">More Options</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 space-y-2 bg-[#464646c2] px-4 py-3 my-2 rounded-b-lg"
            >
              <Link
                href="/"
                className="block text-white font-medium hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Car
              </Link>
              <Link
                href="/"
                className="block text-white font-medium hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell Car
              </Link>
              <Link
                href="/"
                className="block text-white font-medium hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                More Options
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
