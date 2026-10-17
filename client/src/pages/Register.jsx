import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await registerUser(form);
      login(data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="bg-white border rounded-3xl p-8 w-full max-w-md">
        <Link to="/" className="text-2xl font-bold">
          House<span className="text-emerald-600">Rent</span>
        </Link>

        <h1 className="text-3xl font-bold mt-8">Create account</h1>
        <p className="text-gray-500 mt-2">Join HouseRent today.</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-7">
          <input
            required
            placeholder="Full name"
            className="w-full border rounded-xl p-3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="w-full border rounded-xl p-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            required
            type="password"
            minLength={8}
            placeholder="Password (at least 8 characters)"
            className="w-full border rounded-xl p-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-emerald-600 text-white rounded-xl p-3 font-semibold"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;