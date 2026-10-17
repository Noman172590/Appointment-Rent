import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-white text-2xl font-bold"
          >
            <span className="text-emerald-400 text-3xl">⌂</span>
            HouseRent
          </Link>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Find your perfect home with a simple, transparent and reliable
            house rental experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/events">Events</Link>
          </div>
        </div>

        {/* For Renters */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Renters</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/booking-list">Booking List</Link>
            <Link to="/my-rent">My Rent</Link>
            <Link to="/add-rent-house">List Your Property</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates about available rental homes.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-500 transition-colors text-white font-bold text-xl"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-500 transition-colors text-white font-bold"
            >
              ◎
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-500 transition-colors text-white"
            >
              ✉
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HouseRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
