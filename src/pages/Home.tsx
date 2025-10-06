import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import ListingCard from "../components/ListingCard";
import { Search, TrendingUp } from "lucide-react";

export default function Home() {
  const listings = useAppSelector((state) => state.listings.listings);
  const featuredListings = listings.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-rose-500 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-rose-100">
              Discover unique homes and experiences around the world
            </p>
            <Link
              to="/listings"
              className="inline-flex items-center space-x-2 bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Search className="h-5 w-5" />
              <span>Explore Listings</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-rose-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Listings
            </h2>
          </div>
          <Link
            to="/listings"
            className="text-rose-500 hover:text-rose-600 font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-rose-500 mb-2">
                {listings.length}+
              </div>
              <div className="text-gray-600 font-medium">
                Amazing Properties
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-rose-500 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Cities Worldwide</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-rose-500 mb-2">4.8</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
