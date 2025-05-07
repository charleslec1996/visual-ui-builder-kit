
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchTrips } from '@/services/tripService';
import { Trip } from '@/types';

const AdminDashboard: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const adminUser = localStorage.getItem('adminUser');
    if (!adminUser) {
      navigate('/admin/login');
      return;
    }

    const loadTrips = async () => {
      try {
        setLoading(true);
        const data = await fetchTrips();
        setTrips(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch trips:', err);
        setError('Failed to load trips data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-[rgba(0,68,20,1)]">QiblaTrip Admin</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow px-5 py-6">
            <h2 className="text-xl font-semibold mb-4">Trip Management</h2>
            
            {loading && <p>Loading trips...</p>}
            
            {error && <p className="text-red-500">{error}</p>}
            
            {!loading && !error && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {trips.map((trip) => (
                      <tr key={trip.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trip.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.class_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(trip.departure_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Rp {new Intl.NumberFormat('id-ID').format(trip.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link to={`/admin/trips/edit/${trip.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            <div className="mt-6">
              <button className="bg-[rgba(0,68,20,1)] text-white px-4 py-2 rounded-lg">
                Add New Trip
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow px-5 py-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Booking Management</h2>
            <p className="text-gray-500">No bookings available yet.</p>
            <div className="mt-4">
              <button className="bg-[rgba(0,68,20,1)] text-white px-4 py-2 rounded-lg">
                View All Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
