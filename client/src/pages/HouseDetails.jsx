
import { Link, useParams } from "react-router-dom";

export default function HouseDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="font-medium text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex h-64 items-center justify-center bg-gray-100 text-6xl">
            🏠
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
              Property Details
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              House Details
            </h1>

            <p className="mt-3 text-gray-600">
              Property ID: {id || "Not available"}
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              Detailed property information, rental price, location,
              facilities, and photos will appear here when the house
              details API is connected.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Browse Houses
              </Link>

              <Link
                to="/booking-list"
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Booking List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
