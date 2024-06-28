import ExportedImage from "next-image-export-optimizer";
import React from "react";

export const metadata = {
  title: "Agriculture | VNR EDU",
  description:
    "Delve into the fascinating world of agriculture with our Bachelor of Science (BSc) in Agriculture courses.Established with a passion for empowering students to reach their full potential, we are dedicated to providing comprehensive consultancy services tailored to the unique needs of undergraduate students",
};

const page = () => {
  return (
    <div>
      <div className="  h-[350px] relative flex justify-center items-center">
        {/* <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "} */}
        <ExportedImage
          src="/images/agri7.jpg"
          alt="Caroucel"
          width={10}
          height={10}
          sizes="100vw"
          className="z-0 object-cover w-[100%] h-[100%]"
        />

        <h1 className="text-[60px] max-md:text-[40px] font-serif  absolute   bg-black bg-opacity-50 px-5 rounded text-white">
          {" "}
          BSC Agriculture
        </h1>
      </div>

      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <div className="flex gap-3 mb-4 ">
              <div>
                <img
                  src="/icons/icar.png"
                  className="h-[120px] max-md:h-[80px]"
                  alt="Icar"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#2c5d63] font-semibold">
                  Agriculture Cources
                </h1>

                <h1 className="mb-4 text-[25px] font-bold text-[#10316b]">
                  (With ICAR accrideted Universities)
                </h1>
              </div>
            </div>

            <p className="font-[500]">
              Delve into the fascinating world of agriculture with our Bachelor
              of Science (BSc) in Agriculture courses. Rooted in scientific
              principles and hands-on experience, our programs offer a
              comprehensive education in crop cultivation, soil management,
              livestock production, and sustainable farming practices.
            </p>
            <p className="my-2 font-[500]">
              Whether you're drawn to the art of crop science, fascinated by the
              intricacies of animal husbandry, or passionate about promoting
              environmental stewardship, our BSc Agriculture courses provide a
              solid foundation for a rewarding career in the agricultural
              industry.
            </p>
            <p className="mt-2 font-[500]">
              Join a community of aspiring agronomists, agricultural scientists,
              and agribusiness professionals as you explore innovative solutions
              to global food security challenges and contribute to the
              sustainable development of agriculture. Ready to cultivate your
              future in agriculture? Explore our range of BSc Agriculture
              programs and embark on a journey of discovery and growth in this
              vital field.
            </p>
          </div>
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2">
            <ExportedImage
              src="/images/agri1.jpg"
              alt="engineering"
              width={10}
              height={10}
              sizes="100vw"
              className="z-0 object-cover w-[100%] h-[100%]"
            />
          </div>
        </div>

        <h1 className="text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold py-5 mt-10 flex  justify-center">
          Specifications
        </h1>

        <div>
          <div class="mx-auto lg:max-w-4xl ">
            <div class="space-y-6">
              <details class="group rounded-xl bg-[#ffcab0] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Horticulture
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
                  <h1 className="my-1 mt-2 font-semibold text-[16px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Horticulture is the science and art of cultivating plants
                    for food, beauty, and environmental enhancement. It
                    encompasses the growing of fruits, vegetables, flowers, and
                    ornamental plants, contributing significantly to food
                    security, economic development, and aesthetic improvement of
                    landscapes.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#38598b] text-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Bio Technology
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
                  <h1 className="my-1 mt-2 font-semibold text-[16px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Biotechnology harnesses biological systems, organisms, and
                    processes to develop innovative products and technologies
                    that improve human health, agriculture, and the environment.
                    This interdisciplinary field combines principles of biology,
                    chemistry, and engineering to solve complex problems and
                    create sustainable solutions.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#42b883] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Food Technology
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
                  <h1 className="my-1 mt-2 font-semibold text-[16px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Food technology involves the application of scientific and
                    engineering principles to the processing, preservation,
                    packaging, and distribution of food products. It aims to
                    enhance food quality, safety, nutrition, and sustainability,
                    ensuring a reliable supply of healthy and appetizing food to
                    consumers.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#ffb4ac] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Forensic Science
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
                  <h1 className="my-1 mt-2 font-semibold text-[16px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Forensic science applies scientific principles and
                    techniques to the investigation of crimes and the
                    administration of justice. It involves the collection,
                    preservation, and analysis of physical evidence to support
                    criminal investigations, legal proceedings, and law
                    enforcement activities.
                  </p>
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
