'use client';

import Link from 'next/link';
import { Youtube, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#296374] text-white overflow-hidden">
      {/* Dense Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAxNiAwIEwgMCAwIDAgMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZBRkNGNSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#FAFCF5] mb-4">Eat This Way</h3>
            <p className="text-[#FAFCF5]/80 mb-4 leading-relaxed">
              Discover delicious recipes from around the world. Join our community of food lovers!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FAFCF5]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#FAFCF5]/70 hover:text-[#FAFCF5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-[#FAFCF5]/70 hover:text-[#FAFCF5] transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/recipes?category=Breakfast" className="text-[#FAFCF5]/70 hover:text-[#FAFCF5] transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes?category=Main Course" className="text-[#FAFCF5]/70 hover:text-[#FAFCF5] transition-colors">
                  Main Course
                </Link>
              </li>
              <li>
                <Link href="/recipes?category=Dessert" className="text-[#FAFCF5]/70 hover:text-[#FAFCF5] transition-colors">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F5FBE6]">Follow Me</h4>
            <p className="text-[#629FAD]/80 mb-6 leading-relaxed">
              Stay connected and never miss a recipe!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@yourchannelname"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#296374] p-3 rounded-xl hover:bg-[#629FAD] transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#296374] p-3 rounded-xl hover:bg-[#629FAD] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#296374] p-3 rounded-xl hover:bg-[#629FAD] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#296374]/30 mt-12 pt-8 text-center text-[#629FAD]/60">
          <p>&copy; {new Date().getFullYear()} Eat This Way. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
