import { Link, NavLink } from "react-router-dom";
import { Menu, House, X } from "lucide-react";
import { useState } from "react";
import navpath from "../routes/navpath";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", navpath.home],
    ["About", navpath.about],
    ["Service", navpath.services],
    ["Concerns", navpath.concerns],
    ["Event", navpath.events],
    ["Contact", navpath.contact],
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="container-custom min-h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-emerald-600 text-white p-2 rounded-xl">
            <House size={24} />
          </span>
          <span className="text-2xl font-bold tracking-tight">
            House<span className="text-emerald-600">Rent</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex gap-3">
          <Link
            to={navpath.login}
            className="px-5 py-3 font-semibold text-gray-700"
          >
            Login
          </Link>

          <Link
            to={navpath.register}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-5 py-3 font-semibold"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden container-custom pb-5 flex flex-col gap-4">
          {links.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {label}
            </Link>
          ))}

          <Link to={navpath.login} onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link to={navpath.register} onClick={() => setOpen(false)}>
            Create Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
