
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRentHouse() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "Apartment",
    description: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend API integration will be added next.
    console.log("New house:", formData);

    setMessage(
      "Form validated successfully. Connect the backend API to publish this property."
    );
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Add Rent House
          </h1>
          <p className="mt-2 text-gray-600">
            Provide your property details to create a rental listing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block font-medium text-gray-700"
            >
              Property Title *
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength={100}
              placeholder="e.g. Modern Family Apartment"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block font-medium text-gray-700"
            >
              Location *
            </label>
            <input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. Dhanmondi, Dhaka"
              className={inputClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="rent"
                className="mb-2 block font-medium text-gray-700"
              >
                Monthly Rent (৳) *
              </label>
              <input
                id="rent"
                name="rent"
                type="number"
                min="1"
                value={formData.rent}
                onChange={handleChange}
                required
                placeholder="15000"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="mb-2 block font-medium text-gray-700"
              >
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Room">Room</option>
                <option value="Studio">Studio</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="bedrooms"
                className="mb-2 block font-medium text-gray-700"
              >
                Bedrooms *
              </label>
              <input
                id="bedrooms"
                name="bedrooms"
                type="number"
                min="0"
                value={formData.bedrooms}
                onChange={handleChange}
                required
                placeholder="3"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="bathrooms"
                className="mb-2 block font-medium text-gray-700"
              >
                Bathrooms *
              </label>
              <input
                id="bathrooms"
                name="bathrooms"
                type="number"
                min="0"
                value={formData.bathrooms}
                onChange={handleChange}
                required
                placeholder="2"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block font-medium text-gray-700"
            >
              Property Image URL
            </label>
            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/house.jpg"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block font-medium text-gray-700"
            >
              Property Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              maxLength={2000}
              placeholder="Describe the property, facilities, and rental conditions..."
              className={inputClass}
            />
          </div>

          {message && (
            <p
              role="status"
              className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800"
            >
              {message}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Property
            </button>

            <Link
              to="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
