'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag, Share2, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/lib/products';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.originalPrice);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 overflow-x-auto">
          <Link href="/" className="hover:text-rose-gold-500 whitespace-nowrap">Home</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href="/shop" className="hover:text-rose-gold-500 whitespace-nowrap">Shop</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-rose-gold-500 capitalize whitespace-nowrap">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-gray-900 dark:text-white truncate">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-900 zoom-container shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover cursor-zoom-in"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-rose-gold-500' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm tracking-widest text-rose-gold-500 uppercase mb-2">{product.category}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-4xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="px-3 py-1 bg-rose-gold-500 text-white text-sm font-medium rounded-full">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{product.description}</p>

            <div>
              <h4 className="font-serif font-semibold text-gray-900 dark:text-white mb-2">Materials</h4>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 bg-cream-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-rose-gold-500 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-rose-gold-500 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className="flex-1 btn-primary justify-center"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${
                  inWishlist
                    ? 'bg-rose-gold-500 border-rose-gold-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 hover:border-rose-gold-500 hover:text-rose-gold-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            <Link href="/checkout" className="btn-gold w-full justify-center">
              Buy Now
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto text-rose-gold-500 mb-2" />
                <p className="text-xs text-gray-600 dark:text-gray-400">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto text-rose-gold-500 mb-2" />
                <p className="text-xs text-gray-600 dark:text-gray-400">Secure Checkout</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto text-rose-gold-500 mb-2" />
                <p className="text-xs text-gray-600 dark:text-gray-400">Easy Returns</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-rose-gold-500 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share this product
              </button>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="font-serif text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}