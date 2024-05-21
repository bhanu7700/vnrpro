"use client";
import React, { useEffect, useState } from "react";

const Choose = () => {
  return (
    <div className="flex max-md:flex-col">
      <div className="flex justify-center items-center flex-col max-md:w-[100%] w-[50%] ">
        <h1 className="text-[#202238] text-[40px] max-md:text-[35px] font-bold">
          Why Choose Us?
        </h1>
        <p className="py-5 px-5">
          We only partied with universities which have highly experienced and
          knowledgeable faculty, modern facilities, and advanced technology.
          Studying in such an environment can provide a rigorous and enriching
          academic experience.
        </p>
      </div>

      <div className=" max-md:w-[100%] w-[50%]">
        <div class="mx-auto max-w-lg">
          <div class="space-y-6">
            <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
              <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                <div className="text-[#c10a16] font-bold text-[25px]"> Affordability</div> 
                <div class="text-secondary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </summary>
              <div class="px-6 pb-6 text-secondary-500">
                Explore a range of opportunities to make your education more
                affordable, from merit-based scholarships to need-based grants
                and work-study programs. With our support, you can focus on your
                academic success without the stress of high tuition costs.
              </div>
            </details>
            <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
              <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
              <div className="text-[#c10a16] font-bold text-[25px]"> Modern Facilities </div>
                <div class="text-secondary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </summary>
              <div class="px-6 pb-6 text-secondary-500">
                Our affiliated institutions boast modern classrooms, advanced
                laboratories, cutting-edge technology, and extensive libraries.
                These facilities are designed to provide an optimal learning
                environment, fostering innovation, creativity, and hands-on
                experience.
              </div>
            </details>
            <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
              <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
              <div className="text-[#c10a16] font-bold text-[25px]"> Student Services </div> 
                <div class="text-secondary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </summary>
              <div class="px-6 pb-6 text-secondary-500">
                Experience a dynamic and engaging campus life with amenities
                that cater to your academic and extracurricular needs. With
                modern facilities at your disposal, you can focus on your
                studies and make the most of your university experience.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
