'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/products';

export function Reviews() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Testimonials</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real stories from real customers who love our handcrafted jewelry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-gradient-to-br from-cream-50 to-soft-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-6 card-hover"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-rose-gold-200 dark:text-rose-gold-900" />

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-gold-200"
                />
                <div>
                  <h4 className="font-serif font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                "{review.comment}"
              </p>

              <p className="text-xs text-rose-gold-500 italic">Purchased: {review.product}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}