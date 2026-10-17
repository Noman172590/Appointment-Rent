const Services = () => (
  <section className="container-custom py-20">
    <h1 className="text-4xl font-bold">Our Services</h1>
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {[
        ["Find a Home", "Explore rental properties by location and budget."],
        ["List a Property", "Publish your rental property for potential tenants."],
        ["Manage Bookings", "View and manage your rental booking requests."],
      ].map(([title, description]) => (
        <article key={title} className="border rounded-2xl p-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-3">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;