'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Gem, Sparkles, Award } from 'lucide-react';

export function AboutSection() {
  const features = [
    { icon: Heart, title: 'Made with Love', desc: 'Each piece is handcrafted with passion and care' },
    { icon: Gem, title: 'Premium Materials', desc: 'Only the finest beads and quality components' },
    { icon: Sparkles, title: 'Unique Designs', desc: 'One-of-a-kind pieces you won\'t find anywhere else' },
    { icon: Award, title: 'Quality Guaranteed', desc: 'Every piece is inspected for perfection' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80"
                    alt="Handmade jewelry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
                    alt="Beads"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80"
                    alt="Jewelry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80"
                    alt="Craft"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
            >
              <span className="font-serif text-3xl font-bold">10+</span>
              <span className="text-xs uppercase tracking-wider">Years of</span>
              <span className="text-xs uppercase tracking-wider">Craft</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Crafting Beauty,<br />
              <span className="bg-gradient-to-r from-rose-gold-500 to-gold-500 bg-clip-text text-transparent">
                One Bead at a Time
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              At Beauty of Beads, every piece tells a story. Founded with a passion for handmade craftsmanship,
              we create unique jewelry that celebrates individuality and femininity.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              From carefully selected beads to the final stitch, each creation is made with love, patience,
              and an unwavering commitment to quality. We believe that jewelry is more than an accessory—it's
              a form of self-expression.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-cream-50 dark:bg-gray-900 rounded-2xl"
                >
                  <feature.icon className="w-8 h-8 text-rose-gold-500 mb-2" />
                  <h4 className="font-serif font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}