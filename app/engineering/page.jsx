import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="coursemain flex max-md:flex-col gap-2 h-[350px] justify-center items-center ">
        <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "}
        <h1 className="text-[40px] relative text-white"> - Engineering</h1>
      </div>
      <div className="padding-x padding-y">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="w-[100%] lg:w-[50%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px]  max-md:text-[30px] text-[#c10a16] font-semibold">
              Engineering Cources
            </h1>
            <p>
              Embark on a journey of innovation and problem-solving with our
              diverse range of engineering courses. Whether you're passionate
              about designing cutting-edge technology, building sustainable
              infrastructure, or exploring the depths of scientific discovery,
              our engineering programs offer a gateway to endless possibilities.
              From traditional disciplines like mechanical, electrical, and
              civil engineering to emerging fields such as biomedical,
              environmental, and aerospace engineering, our courses are designed
              to equip you with the knowledge, skills, and hands-on experience
              needed to thrive in the dynamic world of engineering.
            </p>
            <p className="mt-2">
              Join a community of forward-thinkers, visionaries, and
              changemakers as you pursue your passion for engineering and make a
              positive impact on the world. Get ready to unleash your
              creativity, push the boundaries of innovation, and shape the
              future with our engineering courses. Ready to embark on your
              engineering journey? Explore our range of programs and start
              building the foundation for a rewarding career in engineering
              today.
            </p>
          </div>
          <div className="w-[100%]  lg:w-[50%] px-10 max-md:px-2">
            <img src="/images/engineering3.jpg" alt="engineering" />
          </div>
        </div>

        <h1 className="text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold py-5 mt-10 flex  justify-center">
          Specifications
        </h1>

        {/* <div className=" grid lg:grid-cols-2 grid-cols-1 lg:padding-x  ">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
              Computer Science Engineering(CSE)
            </h1>
            <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Computer Science and Engineering- Artificial Intelligence and
                  Machine Learning
                </h1>
              </li>
              <li className="py-1">
                <h1> Computer Science and Engineering- Big Data</h1>
              </li>
              <li className="py-1">
                <h1> Computer Science and Engineering- Full Stack AI</h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Computer Science and Engineering- Blockchain Technology
                </h1>
              </li>
              <li className="py-1">
                <h1>Computer Science and Engineering- Internet of Things</h1>
              </li>
              <li className="py-1">
                <h1> Computer Science and Engineering- Enterprise Mobility</h1>
              </li>
              <li className="py-1">
                <h1> Computer Science and Engineering- Graphics and Gaming</h1>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
              Electrical Communicational Engineering(CSE)
            </h1>
            <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering- 5 G Communication
                  and Technology
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering- VLSI Design and
                  Embedded Systems
                </h1>
              </li>
              <li className="py-1">
                <h1> Electronics and Computer Engineering</h1>
              </li>
              <li className="py-1">
                <h1> Electrical Engineering - Smart Grid and Computing</h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electrical Engineering - Electrical Vehicle and Grid Managemen
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  enewable and Sustainable Energy Engineering - Renewable Energy
                </h1>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
              Mechanical Engineering(Mech)
            </h1>
            <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Automotive Design Engineering - Electric Vehicle Technology
                </h1>
              </li>
              <li className="py-1">
                <h1> Automotive Design Engineering - Aerial Technology</h1>
              </li>
              <li className="py-1">
                <h1> Mechanical Engineering - Additive Manufacturing</h1>
              </li>
              <li className="py-1">
                <h1> Mechanical Engineering - Smart Manufacturing</h1>
              </li>
              <li className="py-1">
                <h1>Mechatronics Engineering - Machine Design & Programming</h1>
              </li>
              <li className="py-1">
                <h1>Mechatronics Engineering- Mechanics & Signal Processing</h1>
              </li>
              <li className="py-1">
                <h1> Advance Materials and Nano Technology - Smart Material</h1>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
              Electronics and Communication Engineering(ECE)
            </h1>
            <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering - 5 G Communication
                  and Technology
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering - VLSI Design and
                  Embedded Systems
                </h1>
              </li>
              <li className="py-1">
                <h1> Electrical Engineering - Smart Grid and Computing</h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electrical Engineering - Electrical Vehicle and Grid
                  Management
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  Renewable and Sustainable Energy Engineering - Renewable
                  Energy
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  Renewable and Sustainable Energy Engineering - Sustainable
                  Engineering
                </h1>
              </li>
            </ul>
          </div>
        </div> */}

        <div>
          <div class="mx-auto lg:max-w-4xl ">
            <div class="space-y-6">
              <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Computer Science Engineering(CSE)
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
                <div class="px-6 pb-6 text-secondary-500 ">
                  <ul className="list-disc">
                    <li className="py-1">
                      <h1>
                        {" "}
                        Computer Science and Engineering- Artificial
                        Intelligence and Machine Learning
                      </h1>
                    </li>
                    <li className="py-1">
                      <h1> Computer Science and Engineering- Big Data</h1>
                    </li>
                    <li className="py-1">
                      <h1> Computer Science and Engineering- Full Stack AI</h1>
                    </li>
                    <li className="py-1">
                      <h1>
                        {" "}
                        Computer Science and Engineering- Blockchain Technology
                      </h1>
                    </li>
                    <li className="py-1">
                      <h1>
                        Computer Science and Engineering- Internet of Things
                      </h1>
                    </li>
                    <li className="py-1">
                      <h1>
                        {" "}
                        Computer Science and Engineering- Enterprise Mobility
                      </h1>
                    </li>
                    <li className="py-1">
                      <h1>
                        {" "}
                        Computer Science and Engineering- Graphics and Gaming
                      </h1>
                    </li>
                  </ul>
                </div>
              </details>
              <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                Electrical Communicational Engineering(CSE)
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
                <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering- 5 G Communication
                  and Technology
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electronics and Communication Engineering- VLSI Design and
                  Embedded Systems
                </h1>
              </li>
              <li className="py-1">
                <h1> Electronics and Computer Engineering</h1>
              </li>
              <li className="py-1">
                <h1> Electrical Engineering - Smart Grid and Computing</h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  Electrical Engineering - Electrical Vehicle and Grid Managemen
                </h1>
              </li>
              <li className="py-1">
                <h1>
                  {" "}
                  enewable and Sustainable Energy Engineering - Renewable Energy
                </h1>
              </li>
            </ul>
                </div>
              </details>
              <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                Mechanical Engineering(Mech)
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
                <ul className="list-disc">
              <li className="py-1">
                <h1>
                  {" "}
                  Automotive Design Engineering - Electric Vehicle Technology
                </h1>
              </li>
              <li className="py-1">
                <h1> Automotive Design Engineering - Aerial Technology</h1>
              </li>
              <li className="py-1">
                <h1> Mechanical Engineering - Additive Manufacturing</h1>
              </li>
              <li className="py-1">
                <h1> Mechanical Engineering - Smart Manufacturing</h1>
              </li>
              <li className="py-1">
                <h1>Mechatronics Engineering - Machine Design & Programming</h1>
              </li>
              <li className="py-1">
                <h1>Mechatronics Engineering- Mechanics & Signal Processing</h1>
              </li>
              <li className="py-1">
                <h1> Advance Materials and Nano Technology - Smart Material</h1>
              </li>
            </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
