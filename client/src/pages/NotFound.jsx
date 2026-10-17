import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="container-custom py-24 text-center">
    <h1 className="text-7xl font-bold text-emerald-600">404</h1>
    <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
    <Link to="/" className="inline-block mt-6 text-emerald-700 font-semibold">
      Back to Home
    </Link>
  </section>
);

export default NotFound;