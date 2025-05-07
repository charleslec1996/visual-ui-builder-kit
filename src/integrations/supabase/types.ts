export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          password: string
          role: string
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          password: string
          role: string
          username: string
        }
        Update: {
          created_at?: string | null
          id?: string
          password?: string
          role?: string
          username?: string
        }
        Relationships: []
      }
      benefits: {
        Row: {
          created_at: string | null
          description: string
          icon_url: string | null
          id: string
          title: string
          trip_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          icon_url?: string | null
          id?: string
          title: string
          trip_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          icon_url?: string | null
          id?: string
          title?: string
          trip_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "benefits_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          booking_number: string
          created_at: string | null
          email: string
          full_name: string
          id: string
          insurance: number
          payment_status: string
          phone_number: string
          subtotal: number
          tax: number
          total: number
          total_passengers: number
          transfer_proof: string | null
          trip_id: string | null
          updated_at: string | null
        }
        Insert: {
          booking_number: string
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          insurance: number
          payment_status?: string
          phone_number: string
          subtotal: number
          tax: number
          total: number
          total_passengers: number
          transfer_proof?: string | null
          trip_id?: string | null
          updated_at?: string | null
        }
        Update: {
          booking_number?: string
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          insurance?: number
          payment_status?: string
          phone_number?: string
          subtotal?: number
          tax?: number
          total?: number
          total_passengers?: number
          transfer_proof?: string | null
          trip_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      flights: {
        Row: {
          airline: string
          class_type: string
          created_at: string | null
          departure_airport: string
          from_code: string
          from_location: string
          id: string
          to_code: string
          to_location: string
          trip_id: string | null
        }
        Insert: {
          airline: string
          class_type: string
          created_at?: string | null
          departure_airport: string
          from_code: string
          from_location: string
          id?: string
          to_code: string
          to_location: string
          trip_id?: string | null
        }
        Update: {
          airline?: string
          class_type?: string
          created_at?: string | null
          departure_airport?: string
          from_code?: string
          from_location?: string
          id?: string
          to_code?: string
          to_location?: string
          trip_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flights_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      hotels: {
        Row: {
          country: string
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string
          name: string
          nights: number
          rating: number
          trip_id: string | null
        }
        Insert: {
          country: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          name: string
          nights: number
          rating: number
          trip_id?: string | null
        }
        Update: {
          country?: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          name?: string
          nights?: number
          rating?: number
          trip_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hotels_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      itineraries: {
        Row: {
          created_at: string | null
          day_number: number
          days: number
          description: string
          id: string
          location: string
          title: string
          trip_id: string | null
        }
        Insert: {
          created_at?: string | null
          day_number: number
          days: number
          description: string
          id?: string
          location: string
          title: string
          trip_id?: string | null
        }
        Update: {
          created_at?: string | null
          day_number?: number
          days?: number
          description?: string
          id?: string
          location?: string
          title?: string
          trip_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "itineraries_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      itinerary_images: {
        Row: {
          created_at: string | null
          id: string
          image_url: string
          itinerary_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url: string
          itinerary_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string
          itinerary_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "itinerary_images_itinerary_id_fkey"
            columns: ["itinerary_id"]
            isOneToOne: false
            referencedRelation: "itineraries"
            referencedColumns: ["id"]
          },
        ]
      }
      passengers: {
        Row: {
          booking_id: string | null
          created_at: string | null
          date_of_birth: string
          date_of_expiry: string
          date_of_issue: string
          first_name: string
          id: string
          issuing_country: string
          last_name: string
          mid_name: string | null
          nationality: string
          passport_number: string
          title: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string | null
          date_of_birth: string
          date_of_expiry: string
          date_of_issue: string
          first_name: string
          id?: string
          issuing_country: string
          last_name: string
          mid_name?: string | null
          nationality: string
          passport_number: string
          title: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string | null
          date_of_birth?: string
          date_of_expiry?: string
          date_of_issue?: string
          first_name?: string
          id?: string
          issuing_country?: string
          last_name?: string
          mid_name?: string | null
          nationality?: string
          passport_number?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "passengers_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      trips: {
        Row: {
          class_name: string
          created_at: string | null
          departure_date: string
          description: string
          duration: string
          id: string
          image_url: string | null
          max_passengers: number
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          class_name: string
          created_at?: string | null
          departure_date: string
          description: string
          duration: string
          id?: string
          image_url?: string | null
          max_passengers: number
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          class_name?: string
          created_at?: string | null
          departure_date?: string
          description?: string
          duration?: string
          id?: string
          image_url?: string | null
          max_passengers?: number
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
