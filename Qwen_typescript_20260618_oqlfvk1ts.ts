'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { products, collections } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (p) =>
        (selectedCategory === 'all' || p.category === selectedCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = [...result].sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-rose-gold-500 uppercase mb-3">Our Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Shop</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our complete collection of handcrafted jewelry
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-rose-gold-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-rose-gold-50 dark:hover:bg-gray-800'
              }`}
            >
              All
            </button>
            {collections.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  selectedCategory === c.id
                    ? 'bg-rose-gold-500 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-rose-gold-50 dark:hover:bg-gray-800'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-sm outline-none border border-gray-200 dark:border-gray-800"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sticky top-28">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-lg font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="lg:hidden">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-rose-gold-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-sm">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all' ? 'bg-rose-gold-50 dark:bg-rose-gold-900/30 text-rose-gold-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    All Products
                  </button>
                  {collections.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm capitalize transition-colors ${
                        selectedCategory === c.id ? 'bg-rose-gold-50 dark:bg-rose-gold-900/30 text-rose-gold-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Showing {filteredProducts.length} products
            </p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No products match your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-28 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}