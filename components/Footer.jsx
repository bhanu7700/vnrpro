import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer class="relative bg-blueGray-200 pt-8 pb-6 bg-[#202238]">
        <div class="container mx-auto px-10 text-[#C0C0C0] ">
          <div class="flex flex-wrap text-left lg:text-left mb-8">
            <div class=" w-3/12 max-md:w-full px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6 flex  gap-4">
                <FaFacebook size={30} />
                <FaSquareXTwitter size={30} />
                <IoLogoLinkedin size={30} />
                <FaInstagramSquare size={30} />
              </div>
            </div>
            <div class=" w-3/12 max-md:w-full px-4 mb-4">
              <h1 className="mb-3">ADDRESS</h1>

              <p>
                Flat #206,City Center Complex, Beside South India Shopping Mall,
                Kothapet,Hyderabad,500035
              </p>
            </div>
            <div class=" w-6/12 max-md:w-full  px-4">
              <div class="flex flex-wrap items-top mb-6 max-md:gap-4">
                <div class=" w-6/12 max-md:w-full  ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                  <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    
                   
                  </ul>
                </div>
                <div class="w-6/12 max-md:w-full">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Cources
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/engineering"
                      >
                        Engineering
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/agriculture"
                      >
                        BSC Agriculture
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/medicine"
                      >
                        Medical Sciences
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/mbbs"
                      >
                        MBBS
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/distance-education"
                      >
                        Distance Education
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                Notus JS by
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
