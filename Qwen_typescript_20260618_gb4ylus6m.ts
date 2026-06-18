'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '', country: '',
    cardNumber: '', expiry: '', cvv: '', cardName: '',
  });

  const shipping = totalPrice > 100 ? 0 : 9.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Your cart is empty</h1>
          <Link href="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            A confirmation email has been sent to {form.email || 'your email'}.
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 mb-6 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Order Number</p>
            <p className="font-serif text-xl font-bold text-rose-gold-600 dark:text-rose-gold-400">
              #BOB-{Math.floor(Math.random() * 900000 + 100000)}
            </p>
          </div>
          <Link href="/shop" className="btn-primary">Continue Shopping</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Checkout
          </h1>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Secure checkout
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <input
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
              />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-rose-gold-500" />
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="Address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="col-span-2 px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="ZIP code"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="Country"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="col-span-2 px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-rose-gold-500" />
                Payment Method
              </h2>
              <div className="space-y-3">
                <input
                  required
                  placeholder="Card number"
                  value={form.cardNumber}
                  onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <input
                  required
                  placeholder="Name on card"
                  value={form.cardName}
                  onChange={(e) => setForm({ ...form, cardName: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                    className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                  />
                  <input
                    required
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                    className="px-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-gold-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg h-fit sticky top-28">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative flex-shrink-0">
                    <img src={item.images[0]} alt="" className="w-14 h-14 object-cover rounded-lg" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-rose-gold-500 text-white text-xs rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                    <p className="text-sm text-gray-500">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl font-bold">Total</span>
              <span className="font-serif text-2xl font-bold text-rose-gold-600 dark:text-rose-gold-400">
                {formatPrice(total)}
              </span>
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <Lock className="w-4 h-4 mr-2" />
              Place Order
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              By placing your order, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}