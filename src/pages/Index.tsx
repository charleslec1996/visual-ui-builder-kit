import React from 'react';
import Hero from '@/components/homepage/Hero';
import UpcomingTrips from '@/components/homepage/UpcomingTrips';
import BookingSteps from '@/components/homepage/BookingSteps';
import Testimonials from '@/components/homepage/Testimonials';
import FAQ from '@/components/homepage/FAQ';
import Footer from '@/components/homepage/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(235,240,215,1)] flex flex-col overflow-hidden items-center">
      <Hero />
      <UpcomingTrips />
      <BookingSteps />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
