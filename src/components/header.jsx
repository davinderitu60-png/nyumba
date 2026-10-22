
import React from "react";
import { House, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const categories = [
    "Apartments",
    "Houses",
    "Villas",
    "Commercial",
    "Plots",
  ];

  return (
    <header className="relative z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex min-h-[73px] max-w-[1735px] items-center gap-7 px-6 sm:px-10 lg:px-[5.55%]">

        {/* Logo and brand */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-[45px] w-[45px] items-center justify-center rounded-[11px] bg-[#105638] text-white">
            <House size={25} strokeWidth={2} />
          </span>

          <span className="font-serif text-[29px] font-bold tracking-[-1px] text-[#105638]">
            Nyumba
          </span>
        </a>

        {/* Global search */}
        <div className="hidden min-w-0 flex-1 lg:block lg:max-w-[483px]">
          <div className="flex h-[53px] items-center gap-3 rounded-[17px] border border-[#e5e7eb] px-4 transition-colors focus-within:border-[#105638]">
            <Search
              size={21}
              strokeWidth={1.8}
              className="shrink-0 text-[#737b8c]"
            />

            <input
              type="text"
              placeholder="Search location, property ID, or listing title"
              aria-label="Search properties"
              className="w-full min-w-0 bg-transparent text-[18px] text-[#263346] outline-none placeholder:text-[#9aa3b4]"
            />
          </div>
        </div>

        {/* Property navigation */}
        <nav className="hidden flex-1 items-center justify-end gap-6 xl:flex">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="whitespace-nowrap text-[19px] font-normal text-[#263142] transition-colors hover:text-[#105638]"
            >
              {category}
            </a>
          ))}
        </nav>
{/* Action buttons */}
      <div className="ml-auto flex shrink-0 items-center gap-2.5 lg:ml-0">

        {/* Sign In */}
        <Link
          to="/signin"
          className="hidden h-[49px] items-center justify-center rounded-[11px] border border-[#105638] px-5 text-[17px] font-medium text-[#105638] transition-colors hover:bg-[#f0f7f3] sm:flex"
        >
          Sign In
        </Link>

        {/* List Property */}
        <Link
          to="/list-property"
          className="flex h-[49px] items-center justify-center whitespace-nowrap rounded-[11px] bg-[#105638] px-5 text-[16px] font-semibold text-white transition-colors hover:bg-[#0b422b] sm:px-6 sm:text-[17px]"
        >
          List Property
        </Link>

      </div>
    </div>


      {/* Mobile search */}
      <div className="px-5 pb-3 lg:hidden">
        <div className="flex h-11 items-center gap-3 rounded-xl border border-gray-200 px-3">
          <Search size={19} className="shrink-0 text-gray-500" />
          <input
            type="text"
            placeholder="Search location, property ID, or listing title"
            aria-label="Search properties"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
