
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-[6px] bg-[#0d291d] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-[1530px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.15fr_1.1fr_1.1fr_1fr] lg:gap-12 lg:px-0 lg:py-[80px]">

        {/* Brand */}
        <div>
          <h2 className="mb-5 text-[30px] font-medium leading-tight">
            Nyumba
          </h2>

          <p className="max-w-[340px] text-[17px] leading-[1.55] text-gray-100">
            Making the search for a place to call
            your own feel simpler, clearer, and
            more human.
          </p>
        </div>

        {/* Quick navigation */}
        <div>
          <h3 className="mb-7 text-[23px] font-medium">
            Quick Navigation
          </h3>

          <ul className="space-y-4 text-[17px] text-gray-100">
            <li>
              <a
                href="#categories"
                className="transition-colors hover:text-green-300"
              >
                Categories
              </a>
            </li>

            <li>
              <a
                href="#properties"
                className="transition-colors hover:text-green-300"
              >
                Properties
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition-colors hover:text-green-300"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#signin"
                className="transition-colors hover:text-green-300"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Office and contact */}
        <div>
          <h3 className="mb-7 text-[23px] font-medium">
            Office &amp; Contact
          </h3>

          <div className="space-y-4 text-[17px] leading-[1.5] text-gray-100">
            <p>
              Sacco Plaza 2nd floor room 16, Thika
            </p>

            <a
              href="tel:0717400713"
              className="block transition-colors hover:text-green-300"
            >
              0717400713
            </a>

            <a
              href="mailto:support@nyumba.co.ke"
              className="block transition-colors hover:text-green-300"
            >
              support@nyumba.co.ke
            </a>
          </div>
        </div>

        {/* Social links */}
        <div>
          <h3 className="mb-7 text-[23px] font-medium">
            Follow Us
          </h3>

          <ul className="space-y-4 text-[17px] text-gray-100">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-green-300"
              >
                Facebook
                <ArrowUpRight size={15} />
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-green-300"
              >
                TikTok
                <ArrowUpRight size={15} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-green-300"
              >
                Instagram
                <ArrowUpRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1530px] px-6 py-6 sm:px-10 lg:px-0 lg:py-[25px]">
          <p className="text-[16px] leading-6 text-gray-100">
            © Nyumba Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
