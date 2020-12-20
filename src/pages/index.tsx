import React from 'react';
import Layout from '@components/Layout';
import HeroCard from '@components/HeroCard';
import FeaturedSection from '@components/FeaturedSection';
import PopularSection from '@components/PopularSection';

export default function Home() {
  return (
    <Layout>
      <HeroCard />
      <FeaturedSection />
      <PopularSection />
    </Layout>
  );
}
