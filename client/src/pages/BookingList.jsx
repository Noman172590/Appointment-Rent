
import { Link } from "react-router-dom";

export default function BookingList() {
  // TODO: Connect this page to the bookings API.
  const bookings = [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Booking List
            </h1>
            <p className="mt-2 text-gray-600">
              View and manage your house rental bookings.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
              🏠
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-900">
              No Bookings Yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              You haven't made any house rental bookings yet.
              Explore available houses and find your next home.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Explore Houses
            </Link>
          </div>
        ) : (
          <div className="grid gap-5">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900">
                  {booking.house?.title || "Rental Property"}
                </h2>

                <p className="mt-2 text-gray-600">
                  Status: {booking.status || "Pending"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
