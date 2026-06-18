'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { instagramPosts } from '@/lib/products';

export function InstagramGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-pink-50 to-cream-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-rose-gold-500" />
            <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase">Follow Us</p>
          </div>
          <h2 className="section-title">@beauty_of_beads_1</h2>
          <p className="section-subtitle">
            Join our community and get inspired by our latest creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/beauty_of_beads_1/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-rose-gold-500/0 group-hover:bg-rose-gold-500/70 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/beauty_of_beads_1/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}