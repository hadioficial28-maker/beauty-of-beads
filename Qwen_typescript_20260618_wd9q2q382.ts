'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Orders',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 5-7 business days within the country. International orders typically arrive within 10-15 business days. Express shipping options are available at checkout.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can use this to track your package in real-time.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Absolutely! We ship to most countries worldwide. Shipping costs and delivery times vary by location.',
      },
    ],
  },
  {
    category: 'Products',
    items: [
      {
        q: 'Are your pieces really handmade?',
        a: 'Yes! Every single piece is carefully handcrafted by our artisans. We take pride in the quality and uniqueness of each creation.',
      },
      {
        q: 'What materials do you use?',
        a: 'We use premium materials including genuine gemstones, freshwater pearls, 14k gold-filled components, sterling silver, and high-quality glass beads. All materials are listed in each product description.',
      },
      {
        q: 'Can I request a custom design?',
        a: 'Of course! We love creating custom pieces. Contact us via email or our contact form to discuss your vision, and we\'ll bring it to life.',
      },
    ],
  },
  {
    category: 'Returns & Care',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 14-day return policy for unworn items in their original packaging. Custom orders are final sale. Please contact us to initiate a return.',
      },
      {
        q: 'How do I care for my jewelry?',
        a: 'To keep your jewelry beautiful, avoid contact with water, perfumes, and lotions. Store in a soft pouch or jewelry box when not wearing. Gently clean with a soft cloth.',
      },
      {
        q: 'Do your pieces come with a warranty?',
        a: 'Yes, all our pieces come with a 30-day warranty against manufacturing defects. We stand behind the quality of our craftsmanship.',
      },
    ],
  },
  {
    category: 'Payments',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Absolutely. We use industry-standard SSL encryption and work with trusted payment processors to ensure your information is always protected.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about our jewelry and services
          </p>
        </motion.div>

        <div className="space-y-10">
          {faqs.map((section) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-rose-gold-200 dark:border-rose-gold-900">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-cream-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium text-gray-900 dark:text-white pr-4">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-rose-gold-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-rose-gold-500 to-gold-500 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-serif text-3xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-white/90 mb-6">We're here to help! Reach out anytime.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-rose-gold-600 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}