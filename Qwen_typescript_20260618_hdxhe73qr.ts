'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <div className="space-y-5">
                <a
                  href="mailto:beautyofbeads87@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cream-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 break-all">beautyofbeads87@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/beauty_of_beads_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cream-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Instagram</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@beauty_of_beads_1</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Response Time</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-gold-500 to-gold-500 rounded-3xl p-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-3">Custom Orders</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Want something truly unique? We love creating custom pieces tailored just for you.
                Reach out to discuss your vision!
              </p>
              <a href="mailto:beautyofbeads87@gmail.com?subject=Custom Order Inquiry" className="inline-block px-6 py-3 bg-white text-rose-gold-600 rounded-full font-medium hover:shadow-lg transition-all">
                Request Custom Order
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500 transition-all resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}