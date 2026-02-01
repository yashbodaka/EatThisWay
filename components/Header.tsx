'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    // Only apply scroll logic on local home page
    if (pathname !== '/') {
      setCurrentSection('stats'); // Default to "standard light" theme
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Detect which section we're in based on scroll position
      if (scrollY < windowHeight * 0.7) {
        setCurrentSection('hero');
        setIsScrolled(false);
      } else if (scrollY < windowHeight * 1.5) {
        setCurrentSection('stats');
        setIsScrolled(true);
      } else if (scrollY < windowHeight * 2.5) {
        setCurrentSection('featured');
        setIsScrolled(true);
      } else {
        setCurrentSection('categories');
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/recipes?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={`backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
      currentSection === 'hero' 
        ? 'bg-[#0C2C55]/40 border-[#629FAD]/20 shadow-lg'
        : currentSection === 'stats' || currentSection === 'categories'
        ? 'bg-white/80 border-gray-200/50 shadow-md'
        : 'bg-[#296374]/60 border-[#296374]/20 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              currentSection === 'hero' ? 'text-white'
              : currentSection === 'stats' || currentSection === 'categories' ? 'text-[#233D4D]'
              : 'text-[#F5F5F5]'
            }`}>Eat This Way</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors ${
              currentSection === 'hero' ? 'text-gray-200 hover:text-white'
              : currentSection === 'stats' || currentSection === 'categories' ? 'text-[#233D4D]/90 hover:text-[#233D4D]'
              : 'text-[#F5F5F5]/90 hover:text-[#F5F5F5]'
            }`}>
              Home
            </Link>
            <Link href="/recipes" className={`transition-colors ${
              currentSection === 'hero' ? 'text-gray-200 hover:text-white'
              : currentSection === 'stats' || currentSection === 'categories' ? 'text-[#233D4D]/90 hover:text-[#233D4D]'
              : 'text-[#F5F5F5]/90 hover:text-[#F5F5F5]'
            }`}>
              Recipes
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes..."
                className={`w-full px-4 py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  currentSection === 'hero'
                    ? 'text-white bg-white/10 border border-white/20 placeholder:text-gray-300 focus:ring-white/40'
                    : currentSection === 'stats' || currentSection === 'categories'
                    ? 'text-[#233D4D] bg-white/50 border border-[#233D4D]/20 placeholder:text-[#233D4D]/60 focus:ring-[#233D4D]/30'
                    : 'text-[#F5F5F5] bg-white/15 border border-white/25 placeholder:text-[#F5F5F5]/70 focus:ring-[#F5F5F5]'
                }`}
              />
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                currentSection === 'hero' ? 'text-white/80'
                : currentSection === 'stats' || currentSection === 'categories' ? 'text-[#233D4D]/70'
                : 'text-[#F5F5F5]/80'
              }`} />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              currentSection === 'hero' ? 'text-gray-200 hover:text-white'
              : currentSection === 'stats' || currentSection === 'categories' ? 'text-[#233D4D]/90 hover:text-[#233D4D]'
              : 'text-[#F5F5F5]/90 hover:text-[#F5F5F5]'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[64px] z-40 bg-[#FAFCF5] p-6 space-y-6 md:hidden overflow-y-auto border-t border-[#296374]/10 shadow-xl">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recipes..."
                  className="w-full px-5 py-3 pl-11 bg-white border border-[#296374]/20 rounded-xl text-[#233D4D] placeholder-[#233D4D]/50 focus:outline-none focus:border-[#296374] focus:ring-1 focus:ring-[#296374] transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#296374]/60" />
              </div>
            </form>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-bold text-[#0C2C55] py-3 border-b border-[#296374]/10 hover:text-[#296374] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/recipes"
                className="text-lg font-bold text-[#0C2C55] py-3 border-b border-[#296374]/10 hover:text-[#296374] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
