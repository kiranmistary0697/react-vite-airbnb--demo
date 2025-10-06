import { Link } from "react-router-dom";
import { Home, PlusCircle, List } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-gray-900">Airbnb</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/listings"
              className="flex items-center space-x-1 text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              <List className="h-4 w-4" />
              <span>All Listings</span>
            </Link>
            <Link
              to="/add-listing"
              className="flex items-center space-x-1 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Add Listing</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
