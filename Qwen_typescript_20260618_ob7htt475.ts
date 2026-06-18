'use client';

import { motion } from 'framer-motion';
import { Heart, Gem, Sparkles, Award, Leaf, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Passion', desc: 'Every piece is crafted with genuine love and dedication to our art.' },
    { icon: Gem, title: 'Quality', desc: 'We source only the finest beads and materials for lasting beauty.' },
    { icon: Sparkles, title: 'Uniqueness', desc: 'Each creation is one-of-a-kind, just like the person who wears it.' },
    { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly practices and responsibly sourced materials.' },
    { icon: Users, title: 'Community', desc: 'Building connections through the universal language of beauty.' },
    { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards in every detail.' },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Beauty of Beads
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Where every bead tells a story and every piece is crafted with love.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1400&q=80"
            alt="Our workshop"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Beauty of Beads was born from a simple yet profound passion — the art of transforming
              humble beads into wearable works of art. What started as a creative hobby soon blossomed
              into a mission to share handcrafted beauty with the world.
            </p>
            <p>
              Every piece in our collection is meticulously handcrafted, with careful attention to
              detail, color harmony, and quality. We believe that jewelry is more than an accessory;
              it's a form of self-expression, a confidence booster, and a cherished keepsake.
            </p>
            <p>
              From delicate bracelets to statement necklaces, each creation is designed to celebrate
              the unique beauty of the person who wears it. We take pride in our craftsmanship and
              are honored to be part of our customers' most special moments.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">What We Stand For</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Our Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-gold-100 to-soft-pink-100 dark:from-rose-gold-900/30 dark:to-soft-pink-900/30 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-rose-gold-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-gold-500 to-gold-500 p-12 md:p-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            To inspire confidence and celebrate individuality through beautifully handcrafted jewelry
            that tells a story — your story. We're committed to creating pieces that bring joy,
            spark conversations, and become treasured parts of your life's journey.
          </p>
        </motion.div>
      </section>
    </div>
  );
}