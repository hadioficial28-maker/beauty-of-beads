'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/products';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-hover">
        <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-cream-100 dark:bg-gray-800">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestSeller && (
              <span className="px-3 py-1 bg-gold-400 text-white text-xs font-medium rounded-full">
                Best Seller
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 bg-rose-gold-500 text-white text-xs font-medium rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              inWishlist
                ? 'bg-rose-gold-500 text-white'
                : 'bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 hover:bg-rose-gold-500 hover:text-white'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="w-full btn-primary !py-2.5 text-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2 inline" />
              Add to Cart
            </button>
          </div>
        </Link>

        <div className="p-4">
          <p className="text-xs text-rose-gold-500 uppercase tracking-wider mb-1 capitalize">{product.category}</p>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-rose-gold-500 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-gray-300 dark:text-gray-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-gray-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}