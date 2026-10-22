
import React, { useState } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("Any type");

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (propertyType !== "Any type") {
      params.set("propertyType", propertyType);
    }

    // Replace this URL with your actual listings route.
    window.location.href = `/properties?${params.toString()}`;
  };

  return (
    <section className="relative isolate flex min-h-[650px] w-full items-center overflow-hidden bg-[#18372e] sm:min-h-[650px] lg:h-[650px] lg:min-h-0">

      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2200&q=90')",
          backgroundPosition: "center 48%",
        }}
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102d24]/95 via-[#102d24]/70 to-[#102d24]/15" />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-[1735px] px-6 pb-10 pt-14 sm:px-10 lg:px-[5.55%] lg:pb-0 lg:pt-0">

        {/* Introductory badge */}
        <div className="mb-10 inline-flex min-h-[48px] items-center rounded-full border border-white/25 bg-white/15 px-5 py-2 backdrop-blur-sm lg:mb-[43px]">
          <span className="text-[17px] font-medium text-white sm:text-[19px]">
            A better way to find home
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[850px] font-serif text-[43px] font-bold leading-[1.12] tracking-[-1.5px] text-white sm:text-[56px] lg:text-[66px]">
          Find Your Perfect Space
        </h1>

        {/* Description */}
        <p className="mt-7 mb-5 max-w-[740px] text-[16px] font-medium leading-[1.55] text-white sm:text-[19px]">
          Discover thoughtfully selected rentals and properties for sale.
          Find the space that fits your life, right where you want to be.
        </p>

        {/* Property search bar */}
        <form
          onSubmit={handleSearch}
          className="mt-10 grid w-full grid-cols-1 gap-4 rounded-[16px] bg-white p-5 shadow-xl sm:grid-cols-2 lg:absolute lg:bottom-[100px] lg:left-[5.55%] lg:right-[5.55%] lg:mt-0 lg:w-auto lg:grid-cols-[1.55fr_0.97fr_0.97fr_1.2fr_auto] lg:items-end lg:gap-[15px] lg:px-[1px] lg:py-[1px]"
        >
          {/* Location */}
          <div className="min-w-0">
            <label
              htmlFor="property-location"
              className="mb-[10px] block text-[17px] font-medium text-[#374151]"
            >
              LOCATION
            </label>

            <input
              id="property-location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Thika, Nairobi, Kiambu"
              className="h-[61px] w-full min-w-0 rounded-[16px] border border-[#e5e7eb] bg-white px-4 text-[17px] text-[#374151] outline-none transition-colors placeholder:text-[#a3acbb] focus:border-[#105638]"
            />
          </div>

          {/* Minimum price */}
          <div className="min-w-0">
            <label
              htmlFor="min-price"
              className="mb-[10px] block whitespace-nowrap text-[16px] font-medium text-[#374151] sm:text-[17px]"
            >
              MIN PRICE · KES
            </label>

            <input
              id="min-price"
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) => setMinPrice(event.target.value)}
              placeholder="No minimum"
              className="h-[61px] w-full min-w-0 rounded-[16px] border border-[#e5e7eb] bg-white px-4 text-[17px] text-[#374151] outline-none transition-colors placeholder:text-[#a3acbb] focus:border-[#105638]"
            />
          </div>

          {/* Maximum price */}
          <div className="min-w-0">
            <label
              htmlFor="max-price"
              className="mb-[10px] block whitespace-nowrap text-[16px] font-medium text-[#374151] sm:text-[17px]"
            >
              MAX PRICE · KES
            </label>

            <input
              id="max-price"
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              placeholder="No maximum"
              className="h-[61px] w-full min-w-0 rounded-[16px] border border-[#e5e7eb] bg-white px-4 text-[17px] text-[#374151] outline-none transition-colors placeholder:text-[#a3acbb] focus:border-[#105638]"
            />
          </div>

          {/* Property type */}
          <div className="min-w-0">
            <label
              htmlFor="property-type"
              className="mb-[10px] block text-[17px] font-medium text-[#374151]"
            >
              PROPERTY TYPE
            </label>

            <select
              id="property-type"
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
              className="h-[61px] w-full min-w-0 rounded-[16px] border border-[#e5e7eb] bg-white px-4 text-[17px] text-[#374151] outline-none transition-colors focus:border-[#105638]"
            >
              <option>Any type</option>
              <option>Apartments</option>
              <option>Houses</option>
              <option>Villas</option>
              <option>Commercial</option>
              <option>Plots</option>
            </select>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="mb-7 flex h-[30px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-[#105638] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#0b422b] lg:w-[125px]"
          >
            <Search size={21} strokeWidth={2} />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
