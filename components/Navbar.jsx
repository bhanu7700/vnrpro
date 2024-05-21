"use client";
import React, { Fragment, useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cources = [
    { href: "/engineering", label: "Engineering" },
    { href: "/agriculture", label: "BSC Agriculture" },
    { href: "/medicine", label: "Medical sciences" },
    { href: "/mbbs", label: "MBBS" },

    { href: "/distance-education", label: "Distance Education" },

  ];
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/images/logovnr.jpg"
            class="h-28 max-md:h-24"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          // data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={clsx(
            "fixed block h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-full transition-all z-50 ",
            isMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex flex-col absolute justify-start right-0 top-0 h-screen p-8 z-50   w-[85%] ">
            <div className="flex align-center justify-between items-center bg-white">
              <img
                src="/images/logovnr.jpg"
                class="h-20 mr-5"
                alt="Flowbite Logo"
              />
              <IoMdClose
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mt-0 mb-16 text-3xl"
              />
            </div>

            <Link
              className="ml-5 font-semibold mt-10"
              href="/"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </Link>
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 ml-5"></hr>

            <Menu>
              <Menu.Button className="flex justify-start items-center ml-5 font-semibold mb-0 mt-2 gap-2">
                {" "}
                <h2> Cources</h2> <IoIosArrowDown />
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items>
                  {cources.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item
                      key={link.href}
                      as={Fragment}
                      className="flex ml-5 gap-4 mt-3"
                    >
                      {({ active }) => (
                        <Link
                          href={link.href}
                          className={`${
                            active
                              ? "bg-blue-500 text-white"
                              : "bg-white text-black"
                          }`}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 ml-5"></hr>

            <Link
              className="ml-5 font-semibold mt-3"
              href="/aboutus"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              About Us
            </Link>
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 ml-5"></hr>

            <Link
              className="ml-5 font-semibold mt-3"
              href="/contact"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Contact Us
            </Link>
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 ml-5"></hr>
          </section>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                class="block py-2 px-3 text-gray-900 rounded nav-link  mt-2 "
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <div className="py-2 px-3 mt-2">
                <div class="dropdown inline-block relative">
                  <button class="  rounded inline-flex items-center">
                    <span class="mr-1">Cources</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 bg-slate-100 rounded z-50 w-[180px] ">
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap"
                        href="/engineering"
                      >
                        Engineering
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class=" py-2 px-4 block whitespace-no-wrap"
                        href="/agriculture"
                      >
                        BSC Agriculture
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class="rounded-b  py-2 px-4 block whitespace-no-wrap"
                        href="/medicine"
                      >
                        Medical Sciences
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class="rounded-b  py-2 px-4 block whitespace-no-wrap"
                        href="/mbbs"
                      >
                        MBBS
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class="rounded-b  py-2 px-4 block whitespace-no-wrap"
                        href="/distance-education"
                      >
                        Distance education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/aboutus"
                class="block py-2 px-3 text-gray-900 rounded nav-link  mt-2 "
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                class="block py-2 px-3 text-gray-900 rounded nav-link mt-2 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <div className="flex justify-center items-center gap-3">
            <MdAddIcCall size={20} />
            <h3 className="text-[14px]">9505502299</h3>
            <div class="h-[30px]  bg-green-300 w-[2px]"></div>
            <h3 className="text-[14px]">9000555355</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
