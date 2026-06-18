import Link from 'next/link';
import { Instagram, Mail, Heart, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cream-100 to-cream-200 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 flex items-center justify-center">
                <span className="text-white font-serif text-xl">B</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Beauty of Beads</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Handcrafted jewelry made with love, creativity, and the finest beads. Each piece tells a unique story.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/beauty_of_beads_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-rose-gold-500 hover:text-white transition-all shadow-sm" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop?category=bracelets" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Bracelets</Link></li>
              <li><Link href="/shop?category=necklaces" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Necklaces</Link></li>
              <li><Link href="/shop?category=earrings" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Earrings</Link></li>
              <li><Link href="/shop?category=custom" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Custom Orders</Link></li>
              <li><Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:beautyofbeads87@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="break-all">beautyofbeads87@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/beauty_of_beads_1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span>@beauty_of_beads_1</span>
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Order Tracking</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Track your order via email</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Beauty of Beads. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-gold-500 fill-rose-gold-500" /> for jewelry lovers
          </p>
        </div>
      </div>
    </footer>
  );
}