'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/lib/products';

export function FeaturedCollections() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Explore</p>
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">
            Discover our carefully curated collections, each piece crafted with passion and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/shop?category=${collection.id}`}
                className="group block relative overflow-hidden rounded-3xl aspect-[3/4] card-hover"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <p className="text-rose-gold-300 text-xs tracking-widest uppercase mb-2">
                      {collection.count} Pieces
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{collection.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{collection.description}</p>
                    <div className="flex items-center gap-2 text-white font-medium text-sm">
                      <span>Shop Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}