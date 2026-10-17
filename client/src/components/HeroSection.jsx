import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#f5f8f5] overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            Find a place to call home
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900">
            Discover the latest Rent available{" "}
            <span className="text-emerald-600">today.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            We're an agency tailored to all clients' needs that always
            delivers. Find your perfect home with less stress and more
            confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-white font-semibold hover:bg-emerald-700"
            >
              Explore Houses <ArrowRight size={20} />
            </Link>

            <Link
              to="/add-rent-house"
              className="rounded-xl border border-gray-300 px-6 py-4 font-semibold hover:bg-white"
            >
              List Your Property
            </Link>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-500 text-sm mt-1">Rental Properties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1.2k+</h3>
              <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">4.9/5</h3>
              <p className="text-gray-500 text-sm mt-1">Customer Rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
            alt="Modern house with garden"
            className="w-full h-[400px] lg:h-[570px] object-cover rounded-[2rem]"
          />

          <div className="absolute bottom-5 left-5 right-5 sm:left-8 sm:right-8 bg-white p-5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-700 p-3 rounded-xl">
                <MapPin />
              </span>
              <div>
                <h3 className="font-bold text-lg">Find your next home</h3>
                <p className="text-sm text-gray-500">
                  Explore properties that fit your lifestyle.
                </p>
              </div>
              <Search className="ml-auto text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
