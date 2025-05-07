
import { supabase } from "@/integrations/supabase/client";
import { Trip } from "@/types";

export const fetchTrips = async (): Promise<Trip[]> => {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching trips:", error);
    throw error;
  }
  
  return data as Trip[];
};

export const fetchTripById = async (id: string): Promise<Trip | null> => {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') {
      // No data found
      return null;
    }
    console.error("Error fetching trip:", error);
    throw error;
  }
  
  return data as Trip;
};

export const fetchTripWithDetails = async (id: string) => {
  const { data: trip, error: tripError } = await supabase
    .from('trips')
    .select('*')
    .eq('id', id)
    .single();

  if (tripError) {
    console.error("Error fetching trip:", tripError);
    throw tripError;
  }

  // Fetch benefits
  const { data: benefits, error: benefitsError } = await supabase
    .from('benefits')
    .select('*')
    .eq('trip_id', id);

  // Fetch flights
  const { data: flights, error: flightsError } = await supabase
    .from('flights')
    .select('*')
    .eq('trip_id', id);

  // Fetch hotels
  const { data: hotels, error: hotelsError } = await supabase
    .from('hotels')
    .select('*')
    .eq('trip_id', id);

  // Fetch itineraries
  const { data: itineraries, error: itinerariesError } = await supabase
    .from('itineraries')
    .select('*')
    .eq('trip_id', id)
    .order('day_number', { ascending: true });

  return {
    trip,
    benefits: benefits || [],
    flights: flights || [],
    hotels: hotels || [],
    itineraries: itineraries || [],
  };
};
