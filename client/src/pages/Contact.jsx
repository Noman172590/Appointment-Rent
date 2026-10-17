import { useState } from "react";
import api from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Your message form is ready. Connect a contact API to submit it.");
  };

  return (
    <section className="container-custom py-20 max-w-2xl">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          required
          placeholder="Your name"
          className="w-full border rounded-xl p-4"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Your email"
          className="w-full border rounded-xl p-4"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          placeholder="Your message"
          className="w-full border rounded-xl p-4 min-h-36"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl">
          Send Message
        </button>
        {status && <p className="text-gray-600">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;