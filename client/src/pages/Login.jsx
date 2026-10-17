import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(form);
      login(data);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-sm border p-8 sm:p-10 w-full max-w-md">
        <Link to="/" className="text-2xl font-bold">
          House<span className="text-emerald-600">Rent</span>
        </Link>

        <h1 className="text-3xl font-bold mt-8">Welcome back</h1>
        <p className="text-gray-500 mt-2">Sign in to your account.</p>

        <div className="space-y-3 mt-7">
          <button
            type="button"
            onClick={() => setError("Facebook OAuth needs to be configured.")}
            className="w-full border rounded-xl p-3 font-semibold"
          >
            Continue with Facebook
          </button>
          <button
            type="button"
            onClick={() => setError("Google OAuth needs to be configured.")}
            className="w-full border rounded-xl p-3 font-semibold"
          >
            Continue with Google
          </button>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-400 text-sm">OR EMAIL</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Password"
            className="w-full border rounded-xl p-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-emerald-600 text-white rounded-xl p-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-emerald-700 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;