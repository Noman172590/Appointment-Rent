import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HouseCard from "../components/HouseCard";
import SearchFilter from "../components/SearchFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import api from "../services/api";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    maxRent: "",
  });
  const [search, setSearch] = useState({
    location: "",
    type: "",
    maxRent: "",
  });

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      setError("");

      try {
        const params = {};

        if (search.location) params.location = search.location;
        if (search.type) params.type = search.type;
        if (search.maxRent) params.maxRent = search.maxRent;

        const response = await api.get("/houses", { params });
        setHouses(response.data.houses || []);
      } catch {
        setError("Could not load houses. Please check that the server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [search]);

  return (
    <>
      <HeroSection />

      <section className="container-custom py-16">
        <div className="max-w-2xl mb-8">
          <p className="text-emerald-600 font-semibold mb-3">
            FIND YOUR SPACE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Search for your perfect home
          </h2>
          <p className="text-gray-500 mt-3">
            Filter available rental properties by location, type and budget.
          </p>
        </div>

        <SearchFilter
          filters={filters}
          setFilters={setFilters}
          onSearch={() => setSearch({ ...filters })}
        />
      </section>

      <section className="container-custom pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-emerald-600 font-semibold mb-2">
              FEATURED PROPERTIES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Houses available for rent
            </h2>
          </div>

          <Link
            to="/add-rent-house"
            className="text-emerald-700 font-semibold"
          >
            List your property →
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="bg-red-50 text-red-700 p-5 rounded-xl">{error}</p>
        ) : houses.length === 0 ? (
          <div className="text-center py-14 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-semibold">No houses found</h3>
            <p className="text-gray-500 mt-2">
              Try a different search or add a rental property.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {houses.map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
