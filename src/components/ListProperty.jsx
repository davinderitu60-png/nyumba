
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { House, ArrowLeft } from "lucide-react";

const ListProperty = () => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    type: "Apartment",
    status: "Rent",
    bedrooms: "1",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only: connect this to your Django API
    // to save the property permanently.
    setMessage(
      "Your property details have been entered successfully. Connect the backend to publish your listing."
    );
  };

  const inputClass =
    "mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#105638]";

  return (
    <main className="min-h-screen bg-[#f7f9f7] px-5 py-10">
      <div className="mx-auto max-w-3xl">

        <Link
          to="/"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#105638] hover:underline"
        >
          <ArrowLeft size={17} />
          Back to homepage
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-9">

          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-[#105638]"
          >
            <House size={27} />
            <span className="font-serif text-2xl font-bold">
              Nyumba
            </span>
          </Link>

          <h1 className="text-3xl font-semibold text-gray-900">
            List your property
          </h1>

          <p className="mb-8 mt-2 text-sm leading-6 text-gray-500">
            Provide the details below to prepare your property listing.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label
                htmlFor="property-title"
                className="text-sm font-medium text-gray-700"
              >
                Property title
              </label>
              <input
                id="property-title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Modern 2-bedroom apartment"
                required
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="property-location"
                  className="text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="property-location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Thika, Kiambu"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="property-price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price (KES)
                </label>
                <input
                  id="property-price"
                  name="price"
                  type="number"
                  min="1"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 25000"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="property-type"
                  className="text-sm font-medium text-gray-700"
                >
                  Property type
                </label>
                <select
                  id="property-type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                  <option>Single Room</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="property-status"
                  className="text-sm font-medium text-gray-700"
                >
                  Listing purpose
                </label>
                <select
                  id="property-status"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Rent</option>
                  <option>Sale</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="property-bedrooms"
                  className="text-sm font-medium text-gray-700"
                >
                  Bedrooms
                </label>
                <select
                  id="property-bedrooms"
                  name="bedrooms"
                  value={form.bedrooms}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="0">Not applicable</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedrooms</option>
                  <option value="3">3 bedrooms</option>
                  <option value="4">4 bedrooms</option>
                  <option value="5+">5+ bedrooms</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="property-description"
                className="text-sm font-medium text-gray-700"
              >
                Property description
              </label>
              <textarea
                id="property-description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the property, nearby amenities, and key features..."
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 text-sm outline-none focus:border-[#105638]"
              />
            </div>

            {message && (
              <p
                role="status"
                className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm leading-6 text-[#105638]"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-[#105638] px-6 font-semibold text-white transition-colors hover:bg-[#0b422b] sm:w-auto"
            >
              Submit Property
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ListProperty;
