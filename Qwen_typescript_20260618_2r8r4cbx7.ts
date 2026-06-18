import { Hero } from '@/components/Hero';
import { FeaturedCollections } from '@/components/FeaturedCollections';
import { BestSellers } from '@/components/BestSellers';
import { AboutSection } from '@/components/AboutSection';
import { InstagramGallery } from '@/components/InstagramGallery';
import { Reviews } from '@/components/Reviews';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <AboutSection />
      <InstagramGallery />
      <Reviews />
      <Newsletter />
    </>
  );
}