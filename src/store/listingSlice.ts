import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  amenities: string[];
  host: string;
  rating: number;
}

interface ListingsState {
  listings: Listing[];
}

const initialListings: Listing[] = [
  {
    id: "1",
    title: "Cozy Beach House",
    description:
      "Beautiful beachfront property with stunning ocean views. Perfect for a relaxing getaway.",
    price: 250,
    location: "Malibu, California",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ["WiFi", "Kitchen", "Beach Access", "Parking"],
    host: "Sarah Johnson",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    description:
      "Stylish loft in the heart of downtown. Walking distance to restaurants and nightlife.",
    price: 180,
    location: "New York, NY",
    image:
      "https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["WiFi", "Kitchen", "Gym", "Doorman"],
    host: "Michael Chen",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Mountain Cabin Retreat",
    description:
      "Peaceful cabin surrounded by nature. Ideal for hiking and outdoor adventures.",
    price: 150,
    location: "Aspen, Colorado",
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["WiFi", "Fireplace", "Hot Tub", "Hiking Trails"],
    host: "Emily Rodriguez",
    rating: 4.7,
  },
  {
    id: "4",
    title: "Luxury Villa with Pool",
    description:
      "Stunning villa with private pool and garden. Perfect for families and groups.",
    price: 450,
    location: "Miami, Florida",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    amenities: ["WiFi", "Pool", "Kitchen", "BBQ", "Parking"],
    host: "David Martinez",
    rating: 5.0,
  },
  {
    id: "5",
    title: "Charming City Apartment",
    description:
      "Comfortable apartment in a vibrant neighborhood. Close to public transportation.",
    price: 120,
    location: "San Francisco, CA",
    image:
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["WiFi", "Kitchen", "Washer/Dryer"],
    host: "Jessica Lee",
    rating: 4.6,
  },
];

const initialState: ListingsState = {
  listings: initialListings,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    addListing: (state, action: PayloadAction<Omit<Listing, "id">>) => {
      const newListing: Listing = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.listings.push(newListing);
    },
    updateListing: (state, action: PayloadAction<Listing>) => {
      const index = state.listings.findIndex(
        (listing) => listing.id === action.payload.id
      );
      if (index !== -1) {
        state.listings[index] = action.payload;
      }
    },
    deleteListing: (state, action: PayloadAction<string>) => {
      state.listings = state.listings.filter(
        (listing) => listing.id !== action.payload
      );
    },
  },
});

export const { addListing, updateListing, deleteListing } =
  listingsSlice.actions;
export default listingsSlice.reducer;
