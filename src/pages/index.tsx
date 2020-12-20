import React from 'react';
import Layout from '@components/Layout';
import HeroCard from '@components/HeroCard';
import FeaturedSection from '@components/FeaturedSection';
import PopularSection from '@components/PopularSection';
import TopBakerSection from '@components/TopBakerSection';
import RecentSection from '@components/RecentSection';

export default function Home() {
  return (
    <Layout>
      <HeroCard />
      <FeaturedSection />
      <PopularSection />
      <TopBakerSection />
      <RecentSection />
    </Layout>
  );
}
