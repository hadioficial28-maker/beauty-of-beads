import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty of Beads | Handcrafted Jewelry & Accessories',
  description: 'Discover unique handmade jewelry crafted with love. Shop bracelets, necklaces, earrings, and custom accessories at Beauty of Beads.',
  keywords: 'handmade jewelry, bead bracelets, necklaces, earrings, custom jewelry, handmade accessories',
  authors: [{ name: 'Beauty of Beads' }],
  openGraph: {
    title: 'Beauty of Beads | Handcrafted Jewelry',
    description: 'Unique handmade accessories designed with love and creativity.',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty of Beads',
    description: 'Handcrafted jewelry made with love',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Beauty of Beads',
              description: 'Handcrafted jewelry and bead accessories',
              email: 'beautyofbeads87@gmail.com',
              sameAs: ['https://www.instagram.com/beauty_of_beads_1/'],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}