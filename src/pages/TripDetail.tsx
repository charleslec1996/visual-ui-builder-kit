import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchTripWithDetails } from '@/services/tripService';
import { Trip, Benefit, Flight, Hotel, Itinerary } from '@/types';

const TripDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trip, setTrip] = useState<Trip | null>(null);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const loadTripDetails = async () => {
      if (!id) {
        setError("Trip ID is missing");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const details = await fetchTripWithDetails(id);
        
        setTrip(details.trip);
        setBenefits(details.benefits);
        setFlights(details.flights);
        setHotels(details.hotels);
        setItineraries(details.itineraries);
        
        setError(null);
      } catch (err) {
        console.error("Failed to load trip details:", err);
        setError("Failed to load trip details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadTripDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgba(235,240,215,1)]">
        <p className="text-xl">Loading trip details...</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(235,240,215,1)]">
        <p className="text-xl text-red-600 mb-4">{error || "Trip not found"}</p>
        <Link to="/" className="bg-[rgba(0,68,20,1)] text-white px-6 py-2 rounded-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(235,240,215,1)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Trip Header */}
        <div className="bg-white rounded-3xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={trip.image_url || '/placeholder.svg'} 
                alt={trip.name}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <div className="bg-[rgba(138,244,169,1)] gap-3 p-2 rounded-[120px] text-center w-fit mb-4">
                  {trip.class_name}
                </div>
                <h1 className="text-3xl font-bold mb-4">{trip.name}</h1>
                <p className="mb-6">{trip.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img 
                    src="/public/lovable-uploads/5d093e52-e500-40a0-ae0b-76615b453ee3.png" 
                    alt="Duration" 
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold">{trip.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <img 
                    src="/public/lovable-uploads/a0a50f01-f0ed-407d-9d23-9264a174ac2e.png" 
                    alt="Departure" 
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Departure</p>
                    <p className="font-semibold">
                      {new Date(trip.departure_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">
                    Rp {new Intl.NumberFormat('id-ID').format(trip.price)}
                  </p>
                  <p className="text-gray-500">/passenger</p>
                </div>
                
                <Link 
                  to={`/booking/${trip.id}`} 
                  className="bg-[rgba(0,68,20,1)] text-white text-center py-3 px-6 rounded-xl w-full block"
                >
                  Book This Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        {benefits.length > 0 && (
          <div className="bg-white rounded-3xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-4">
                  {benefit.icon_url && (
                    <img 
                      src={benefit.icon_url} 
                      alt={benefit.title}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Flight Information */}
        {flights.length > 0 && (
          <div className="bg-white rounded-3xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Flight Information</h2>
            {flights.map((flight) => (
              <div key={flight.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
                  <div>
                    <p className="text-gray-500">Airline</p>
                    <p className="font-semibold">{flight.airline}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Class</p>
                    <p className="font-semibold">{flight.class_type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Airport</p>
                    <p className="font-semibold">{flight.departure_airport}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{flight.from_code}</p>
                    <p>{flight.from_location}</p>
                  </div>
                  
                  <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[rgba(0,68,20,1)] rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[rgba(0,68,20,1)] rounded-full"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold">{flight.to_code}</p>
                    <p>{flight.to_location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Hotels */}
        {hotels.length > 0 && (
          <div className="bg-white rounded-3xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  {hotel.image_url && (
                    <img 
                      src={hotel.image_url} 
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg">{hotel.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{hotel.location}, {hotel.country}</p>
                    <p className="mb-4">{hotel.description}</p>
                    <p className="font-semibold">{hotel.nights} nights</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Itinerary */}
        {itineraries.length > 0 && (
          <div className="bg-white rounded-3xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
            <div className="space-y-6">
              {itineraries.map((item, index) => (
                <div key={item.id} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[rgba(0,68,20,1)] text-white flex items-center justify-center font-bold">
                      {item.day_number}
                    </div>
                    {index < itineraries.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 mb-3">{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDetail;
