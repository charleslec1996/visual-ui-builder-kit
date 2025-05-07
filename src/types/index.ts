
// Custom types that work with our Supabase database structure
// These types don't modify the auto-generated types

export interface Trip {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  departure_date: string;
  class_name: string;
  image_url?: string | null;
  max_passengers: number;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Benefit {
  id: string;
  trip_id?: string | null;
  title: string;
  description: string;
  icon_url?: string | null;
  created_at?: string | null;
}

export interface Flight {
  id: string;
  trip_id?: string | null;
  airline: string;
  class_type: string;
  from_location: string;
  from_code: string;
  to_location: string;
  to_code: string;
  departure_airport: string;
  created_at?: string | null;
}

export interface Hotel {
  id: string;
  trip_id?: string | null;
  name: string;
  location: string;
  country: string;
  description?: string | null;
  nights: number;
  rating: number;
  image_url?: string | null;
  created_at?: string | null;
}

export interface Itinerary {
  id: string;
  trip_id?: string | null;
  day_number: number;
  location: string;
  title: string;
  description: string;
  days: number;
  created_at?: string | null;
}

export interface ItineraryImage {
  id: string;
  itinerary_id?: string | null;
  image_url: string;
  created_at?: string | null;
}

export interface Booking {
  id: string;
  trip_id?: string | null;
  booking_number: string;
  full_name: string;
  phone_number: string;
  email: string;
  total_passengers: number;
  subtotal: number;
  tax: number;
  insurance: number;
  total: number;
  payment_status: string;
  transfer_proof?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Passenger {
  id: string;
  booking_id?: string | null;
  title: string;
  first_name: string;
  mid_name?: string | null;
  last_name: string;
  date_of_birth: string;
  nationality: string;
  passport_number: string;
  date_of_issue: string;
  date_of_expiry: string;
  issuing_country: string;
  created_at?: string | null;
}

export interface AdminUser {
  id: string;
  username: string;
  password: string;
  role: string;
  created_at?: string | null;
}
