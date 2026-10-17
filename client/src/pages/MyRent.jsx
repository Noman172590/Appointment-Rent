
import { Link } from "react-router-dom";

export default function MyRent() {
  // TODO: Load the logged-in user's properties from the backend API.
  const properties = [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              My Rent
            </h1>
            <p className="mt-2 text-gray-600">
              Manage your rental property listings.
            </p>
          </div>

          <Link
            to="/add-rent-house"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Rent House
          </Link>
        </div>

        {properties.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
              🏠
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-900">
              No Properties Yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              You haven't added any rental properties yet.
              Add your first property to get started.
            </p>

            <Link
              to="/add-rent-house"
              className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
            >
              Add Your First Property
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property._id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {property.location}
                  </p>

                  <p className="mt-3 font-bold text-blue-600">
                    ৳{property.rent} / month
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
