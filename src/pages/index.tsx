import React from 'react';
import Layout from '@components/Layout';
import HeroCard from '@components/HeroCard';
import FeaturedSection from '@components/FeaturedSection';

export default function Home() {
  return (
    <Layout>
      <HeroCard />
      <FeaturedSection />
    </Layout>
  );
}
