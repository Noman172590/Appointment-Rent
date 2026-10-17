const SearchFilter = ({ filters, setFilters, onSearch }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
    >
      <input
        value={filters.location}
        onChange={(event) =>
          setFilters({ ...filters, location: event.target.value })
        }
        placeholder="Enter location"
        className="border rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
      />

      <select
        value={filters.type}
        onChange={(event) =>
          setFilters({ ...filters, type: event.target.value })
        }
        className="border rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
      >
        <option value="">All property types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Studio">Studio</option>
        <option value="Villa">Villa</option>
      </select>

      <input
        type="number"
        min="0"
        value={filters.maxRent}
        onChange={(event) =>
          setFilters({ ...filters, maxRent: event.target.value })
        }
        placeholder="Maximum rent (৳)"
        className="border rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
      />

      <button
        type="submit"
        className="bg-emerald-600 text-white rounded-xl px-5 py-3 font-semibold hover:bg-emerald-700"
      >
        Search Houses
      </button>
    </form>
  );
};

export default SearchFilter;
