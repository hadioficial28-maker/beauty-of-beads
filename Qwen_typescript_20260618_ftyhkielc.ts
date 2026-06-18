'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cream-100 dark:bg-gray-900 flex items-center justify-center">
            <Heart className="w-12 h-12 text-rose-gold-500" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Save your favorite pieces to come back to them later.
          </p>
          <Link href="/shop" className="btn-primary">Explore Collection</Link>
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
            My Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{items.length} saved items</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-hover"
            >
              <Link href={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-cream-100 dark:bg-gray-800">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </Link>
              <div className="p-4">
                <p className="text-xs text-rose-gold-500 uppercase tracking-wider mb-1 capitalize">{product.category}</p>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-rose-gold-500 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {formatPrice(product.price)}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 btn-primary !py-2 text-sm justify-center"
                  >
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-500 hover:text-red-500 transition-all"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}