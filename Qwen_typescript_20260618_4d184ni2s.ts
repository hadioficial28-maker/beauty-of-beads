'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cream-100 dark:bg-gray-900 flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-rose-gold-500" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any beautiful pieces yet.
          </p>
          <Link href="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  const shipping = totalPrice > 100 ? 0 : 9.99;
  const total = totalPrice + shipping;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{totalItems} items in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-4 md:p-6 flex gap-4 shadow-sm"
                >
                  <Link href={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <p className="text-xs text-rose-gold-500 uppercase tracking-wider mb-1">{item.category}</p>
                        <Link href={`/product/${item.id}`}>
                          <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white hover:text-rose-gold-500 transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                        </Link>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center gap-2 bg-cream-50 dark:bg-gray-800 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-rose-gold-500"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-rose-gold-500"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg h-fit sticky top-28"
          >
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-rose-gold-500">
                  Add {formatPrice(100 - totalPrice)} more for free shipping!
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl font-bold text-gray-900 dark:text-white">Total</span>
              <span className="font-serif text-2xl font-bold text-rose-gold-600 dark:text-rose-gold-400">
                {formatPrice(total)}
              </span>
            </div>

            <Link href="/checkout" className="btn-primary w-full justify-center mb-3">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/shop" className="btn-secondary w-full justify-center">
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                🔒 Secure checkout powered by SSL encryption
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}