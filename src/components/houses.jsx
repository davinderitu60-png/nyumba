
import React, { useMemo, useState } from "react";
import {
  Search,
  Heart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Phone,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";

const properties = [
  {
    id: 1,
    category: "2 Bed",
    status: "RENT",
    price: 25000,
    priceLabel: "KES 25,000 / mo",
    title: "Modern Two-Bed Apartment",
    location: "Thika Town",
    code: "NY-101",
    beds: 2,
    baths: 2,
    area: 980,
    description:
      "Bright living spaces and a practical layout close to town amenities.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 2,
    category: "1 Bed",
    status: "RENT",
    price: 18000,
    priceLabel: "KES 18,000 / mo",
    title: "Bright One-Bed Retreat",
    location: "Section 9",
    code: "NY-102",
    beds: 1,
    baths: 1,
    area: 620,
    description:
      "An easy-to-maintain home with natural light and a welcoming feel.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 3,
    category: "3 Bed",
    status: "SALE",
    price: 8500000,
    priceLabel: "KES 8,500,000",
    title: "Contemporary Family Home",
    location: "Landless",
    code: "NY-103",
    beds: 3,
    baths: 2,
    area: 1850,
    description:
      "Room to grow, with generous shared spaces and a family-friendly layout.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 4,
    category: "Single Room",
    status: "RENT",
    price: 8500,
    priceLabel: "KES 8,500 / mo",
    title: "Comfortable Single Room",
    location: "Makongeni",
    code: "NY-104",
    beds: 1,
    baths: 1,
    area: 290,
    description:
      "A compact, bright option for simple everyday living.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 5,
    category: "Commercial",
    status: "RENT",
    price: 45000,
    priceLabel: "KES 45,000 / mo",
    title: "Flexible Town Centre Office",
    location: "Thika Town",
    code: "NY-105",
    beds: 0,
    baths: 2,
    area: 1200,
    description:
      "A versatile space for a growing business in a convenient location.",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    ],
  },
  {
    id: 6,
    category: "Plots",
    status: "SALE",
    price: 2200000,
    priceLabel: "KES 2,200,000",
    title: "Residential Development Plot",
    location: "Landless",
    code: "NY-106",
    beds: 0,
    baths: 0,
    area: 4500,
    description:
      "Open land offering flexibility for your residential development plans.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    ],
  },
];

const categories = [
  "All",
  "Single Room",
  "1 Bed",
  "2 Bed",
  "3 Bed",
  "Luxury Villa",
  "Commercial",
  "Plots",
];

const Houses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("Newest First");
  const [favorites, setFavorites] = useState([]);
  const [imageIndexes, setImageIndexes] = useState({});
  const [search, setSearch] = useState("");

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const matchesCategory =
        activeCategory === "All" ||
        property.category === activeCategory;

      const query = location.trim().toLowerCase();
      const matchesLocation =
        !query ||
        property.location.toLowerCase().includes(query);

      const textQuery = search.trim().toLowerCase();
      const matchesSearch =
        !textQuery ||
        property.title.toLowerCase().includes(textQuery) ||
        property.location.toLowerCase().includes(textQuery) ||
        property.code.toLowerCase().includes(textQuery);

      return matchesCategory && matchesLocation && matchesSearch;
    });

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [activeCategory, location, search, sortBy]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const changeImage = (id, direction, imageCount) => {
    setImageIndexes((current) => {
      const currentIndex = current[id] || 0;

      return {
        ...current,
        [id]:
          (currentIndex + direction + imageCount) % imageCount,
      };
    });
  };

  return (
    <section
      id="properties"
      className="w-full bg-white px-5 py-10 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1580px]">

        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[2px] text-[#238354]">
              Explore Nyumba
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#17231d] sm:text-[28px]">
              Featured properties
            </h2>
          </div>

          <p className="whitespace-nowrap text-xs text-gray-500">
            {filteredProperties.length} properties
          </p>
        </div>

        {/* Category navigation */}
        <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors ${
                activeCategory === category
                  ? "border-[#105638] bg-[#105638] text-white"
                  : "border-gray-200 bg-white text-[#374151] hover:border-[#105638] hover:text-[#105638]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search and sorting */}
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Location search */}
            <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 focus-within:border-[#105638]">
              <MapPin size={16} className="shrink-0 text-[#105638]" />

              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Search by location..."
                aria-label="Search properties by location"
                className="w-full min-w-0 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400 sm:w-48"
              />

              {location && (
                <button
                  type="button"
                  onClick={() => setLocation("")}
                  className="text-xs text-gray-400 hover:text-gray-700"
                  aria-label="Clear location"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Property title or ID search */}
            <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 focus-within:border-[#105638]">
              <Search size={16} className="shrink-0 text-[#105638]" />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Property name or ID..."
                aria-label="Search by property name or ID"
                className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-gray-400 sm:w-48"
              />
            </div>
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-2 self-end text-xs text-gray-500 md:self-auto">
            <SlidersHorizontal size={14} />

            <label htmlFor="property-sort">Sort by</label>

            <select
              id="property-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="max-w-[155px] cursor-pointer bg-white py-1 text-xs font-medium text-gray-700 outline-none"
            >
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <p className="mb-5 text-xs text-gray-500">
          Explore homes and spaces around Thika.
        </p>

        {/* Property cards */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProperties.map((property) => {
              const currentImage = imageIndexes[property.id] || 0;

              return (
                <article
                  key={property.id}
                  className="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  {/* Image and image controls */}
                  <div className="group relative h-[220px] overflow-hidden bg-gray-100 sm:h-[190px] lg:h-[205px]">
                    <img
                      src={property.images[currentImage]}
                      alt={property.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />

                    {/* Image count */}
                    <span className="absolute right-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white">
                      {currentImage + 1}/{property.images.length}
                    </span>

                    {/* Previous image */}
                    <button
                      type="button"
                      onClick={() =>
                        changeImage(
                          property.id,
                          -1,
                          property.images.length
                        )
                      }
                      aria-label="Previous property image"
                      className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-gray-100"
                    >
                      <ChevronLeft size={19} />
                    </button>

                    {/* Next image */}
                    <button
                      type="button"
                      onClick={() =>
                        changeImage(
                          property.id,
                          1,
                          property.images.length
                        )
                      }
                      aria-label="Next property image"
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-gray-100"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>

                  {/* Property details */}
                  <div className="p-[18px]">

                    {/* Status and favorite */}
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#effaf1] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#17613b]">
                        {property.category} · {property.status}
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleFavorite(property.id)}
                        aria-label={
                          favorites.includes(property.id)
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                        className="flex h-7 w-7 items-center justify-center text-gray-800 transition-colors hover:text-red-600"
                      >
                        <Heart
                          size={19}
                          strokeWidth={1.8}
                          fill={
                            favorites.includes(property.id)
                              ? "#dc2626"
                              : "none"
                          }
                          className={
                            favorites.includes(property.id)
                              ? "text-red-600"
                              : ""
                          }
                        />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="mb-2 text-[16px] font-medium text-[#17613b]">
                      {property.priceLabel}
                    </p>

                    {/* Title */}
                    <h3 className="mb-1 text-[15px] font-medium leading-5 text-[#17231d]">
                      {property.title}
                    </h3>

                    {/* Location and listing ID */}
                    <p className="mb-3 flex flex-wrap items-center gap-x-1 text-[12px] text-gray-500">
                      <MapPin size={13} className="shrink-0" />
                      {property.location} · {property.code}
                    </p>

                    {/* Property features */}
                    <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] text-gray-600">
                      {property.beds > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <BedDouble size={14} />
                          {property.beds}{" "}
                          {property.beds === 1 ? "bed" : "beds"}
                        </span>
                      )}

                      {property.baths > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Bath size={14} />
                          {property.baths}{" "}
                          {property.baths === 1 ? "bath" : "baths"}
                        </span>
                      )}

                      {property.area > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Maximize size={13} />
                          {property.area.toLocaleString()} sq ft
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mb-4 min-h-[36px] text-[12px] leading-[1.55] text-gray-600">
                      {property.description}
                    </p>

                    {/* Contact actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="#contact"
                        className="flex min-h-10 items-center justify-center gap-1 rounded-lg border border-[#9bb9a6] px-2 text-center text-[11px] font-medium text-[#17613b] transition-colors hover:bg-[#f0f8f2]"
                      >
                        <Phone size={13} />
                        Call Agent
                      </a>

                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          `Hello, I am interested in ${property.title} (${property.code}) in ${property.location}, listed at ${property.priceLabel}. Please share more details.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-10 items-center justify-center gap-1 rounded-lg bg-[#105638] px-2 text-center text-[11px] font-medium text-white transition-colors hover:bg-[#0b422b]"
                      >
                        <MessageCircle size={13} />
                        WhatsApp Agent
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-gray-200 px-5 py-14 text-center">
            <Search
              size={30}
              className="mx-auto mb-3 text-gray-400"
            />

            <h3 className="mb-2 text-base font-semibold text-gray-800">
              No properties found
            </h3>

            <p className="mb-4 text-sm text-gray-500">
              Try another location, property name, or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setLocation("");
                setSearch("");
                setActiveCategory("All");
              }}
              className="rounded-lg bg-[#105638] px-4 py-2 text-sm font-medium text-white hover:bg-[#0b422b]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Houses;
