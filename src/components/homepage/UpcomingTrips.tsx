
import React, { useEffect, useState } from 'react';
import TripCard from './TripCard';
import { fetchTrips } from '@/services/tripService';
import { Trip } from '@/types';

const UpcomingTrips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const fetchedTrips = await fetchTrips();
        setTrips(fetchedTrips);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
        setError("Failed to load trips. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getTrips();
  }, []);

  return (
    <section id="upcoming-trips" className="w-full px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-[rgba(0,68,20,1)]">
        Upcoming Trips
      </h2>
      
      {isLoading && (
        <div className="flex justify-center">
          <p>Loading trips...</p>
        </div>
      )}
      
      {error && (
        <div className="flex justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!isLoading && !error && trips.length === 0 && (
        <div className="flex justify-center">
          <p>No upcoming trips available at the moment.</p>
        </div>
      )}

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            trip={{
              id: trip.id,
              image: trip.image_url || '/placeholder.svg',
              className: trip.class_name,
              name: trip.name,
              price: `Rp ${new Intl.NumberFormat('id-ID').format(trip.price)}`,
              duration: trip.duration,
              departureDate: new Date(trip.departure_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }),
              durationIcon: '/public/lovable-uploads/5d093e52-e500-40a0-ae0b-76615b453ee3.png',
              dateIcon: '/public/lovable-uploads/a0a50f01-f0ed-407d-9d23-9264a174ac2e.png'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingTrips;
