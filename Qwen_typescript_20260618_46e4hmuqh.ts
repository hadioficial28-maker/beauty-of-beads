'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream-50 via-soft-pink-50 to-rose-gold-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-soft-pink-200 dark:bg-rose-gold-900/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gold-200 dark:bg-gold-900/20 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">New Collection 2026</span>
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              Handcrafted{' '}
              <span className="bg-gradient-to-r from-rose-gold-500 via-rose-gold-400 to-gold-500 bg-clip-text text-transparent">
                Beauty
              </span>
              <br />
              in Every Bead
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Unique handmade accessories designed with love and creativity. Each piece is a one-of-a-kind work of art, crafted just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="btn-primary group">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              {[
                { value: '500+', label: 'Happy Customers' },
                { value: '100%', label: 'Handmade' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-rose-gold-600 dark:text-rose-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-gold-300 dark:border-rose-gold-700 animate-[spin_30s_linear_infinite]" />

              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-rose-gold-500/30">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                  alt="Handcrafted jewelry"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Handmade</p>
                  <p className="font-serif font-bold text-gray-900 dark:text-white">With Love</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">500+ Happy Customers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}