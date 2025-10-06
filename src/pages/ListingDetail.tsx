import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteListing } from "../store/listingSlice";
import {
  MapPin,
  Users,
  Bed,
  Bath,
  Star,
  Trash2,
  CreditCard as Edit,
  ArrowLeft,
} from "lucide-react";

export default function ListingDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const listing = useAppSelector((state) =>
    state.listings.listings.find((l) => l.id === id)
  );

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Listing not found
          </h2>
          <Link to="/listings" className="text-rose-500 hover:text-rose-600">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      dispatch(deleteListing(listing.id));
      navigate("/listings");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/listings"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Listings</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {listing.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{listing.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">
                    {listing.rating}
                  </span>
                  <span className="text-gray-600 ml-2">
                    · Hosted by {listing.host}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  to={`/edit-listing/${listing.id}`}
                  className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </Link>
                <button
                  onClick={handleDelete}
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">Guests</div>
                    <div className="font-semibold">{listing.guests}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bed className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                    <div className="font-semibold">{listing.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                    <div className="font-semibold">{listing.bathrooms}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About this place
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {listing.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${listing.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-lg">/ night</span>
                  </div>
                </div>
                <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors font-semibold text-lg">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
