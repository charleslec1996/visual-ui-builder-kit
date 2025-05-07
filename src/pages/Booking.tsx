
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="bg-[rgba(235,240,215,1)] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-6">Book Your Trip</h1>
        <p className="mb-4">Trip ID: {id}</p>
        <p className="mb-8">This is a placeholder for the booking page. Full booking functionality coming soon.</p>
        <Link 
          to={`/trip/${id}`} 
          className="bg-[rgba(0,68,20,1)] text-white text-center py-3 px-6 rounded-xl inline-block"
        >
          Back to Trip Details
        </Link>
      </div>
    </div>
  );
};

export default Booking;
