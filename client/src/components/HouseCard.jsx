import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, ArrowUpRight } from "lucide-react";

const HouseCard = ({ house }) => {
  return (
    <article className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-shadow">
      <Link to={`/houses/${house._id}`}>
        <img
          src={house.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"}
          alt={house.title}
          className="w-full h-60 object-cover"
        />
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-center gap-3">
          <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            {house.type || "Residential"}
          </span>
          <span className="font-bold text-xl text-emerald-700">
            ৳{Number(house.rent).toLocaleString("en-BD")}
            <span className="text-xs text-gray-500 font-normal"> /month</span>
          </span>
        </div>

        <h3 className="text-xl font-bold mt-4">{house.title}</h3>

        <p className="mt-2 text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={16} /> {house.location}
        </p>

        <div className="border-t mt-5 pt-4 flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <BedDouble size={17} /> {house.bedrooms || 0} Beds
          </span>
          <span className="flex items-center gap-2">
            <Bath size={17} /> {house.bathrooms || 0} Baths
          </span>
          <Link
            to={`/houses/${house._id}`}
            aria-label={`View ${house.title}`}
            className="text-emerald-600"
          >
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HouseCard;
