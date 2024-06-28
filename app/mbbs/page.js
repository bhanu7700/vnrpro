import ExportedImage from "next-image-export-optimizer";
import React from "react";

export const metadata = {
  title: "MBBS | VNR EDU",
  description:
    " Embark on a rewarding career in medicine with our comprehensive MBBS courses",
};

const page = () => {
  return (
    <div>
      <div className="  h-[350px] relative flex justify-center items-center">
        {/* <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "} */}
        <ExportedImage
          src="/images/mbbs2.jpg"
          alt="Caroucel"
          width={10}
          height={10}
          sizes="100vw"
          className="z-0 object-cover w-[100%] h-[100%]"
        />

        <h1 className="text-[60px] max-md:text-[40px] font-serif  absolute   bg-black bg-opacity-50 px-5 rounded text-white">
          {" "}
          MBBS (India & Abroad)
        </h1>
      </div>

      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              MBBS Cources
            </h1>
            <h1 className="mb-4 text-[25px] font-bold text-[#10316b]">
              Study in India & Abroad
            </h1>
            <p className="font-[500]">
              Embark on a rewarding career in medicine with our comprehensive
              MBBS courses. Designed for aspiring doctors, these programs
              provide rigorous training in medical science, clinical skills, and
              patient care, ensuring you are well-prepared for a successful
              medical career. Our MBBS courses cover a wide range of subjects,
              including anatomy, physiology, biochemistry, pharmacology, and
              pathology, combined with extensive hands-on clinical experience.
              Guided by experienced faculty and supported by modern facilities,
              you'll gain the knowledge and skills needed to excel in the
              medical field.
            </p>
            <p className="my-2 font-[500]">
              Join a community of dedicated medical students committed to making
              a difference in healthcare. With personalized guidance and support
              from our consultancy, you'll navigate the application process with
              confidence and secure a place in top medical institutions.
            </p>
            <p className="mt-2 font-[500]">
              Ready to start your journey in medicine? Explore our MBBS courses
              and take the first step toward becoming a healthcare professional.
            </p>
          </div>
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2">
            <ExportedImage
              src="/images/medicine.jpg"
              alt="Caroucel"
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
                  Bachelor of Dental Surgery(BDS)
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
                  <h1 className="my-1 mt-2 font-semibold text-[18px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    The Bachelor of Dental Surgery (BDS) is a professional
                    degree program that prepares students for a career in
                    dentistry. It encompasses comprehensive training in the
                    diagnosis, prevention, and treatment of oral diseases, as
                    well as the restoration and maintenance of oral health.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#7481cf] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Bachelor of Veterinary Science(BVS)
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
                  <h1 className="my-1 mt-2 font-semibold text-[18px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Our BVSc programs cover a wide range of subjects, including
                    anatomy, physiology, pathology, and pharmacology, coupled
                    with extensive hands-on clinical experience. With guidance
                    from experienced faculty and access to state-of-the-art
                    veterinary facilities, you'll gain the skills and expertise
                    needed to excel in the veterinary field.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#42b883] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Bachelor of Homeopathic Medicine and Surgery(BHMS)
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
                  <h1 className="my-1 mt-2 font-semibold text-[18px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Our BHMS programs cover a wide range of subjects, including
                    homeopathic philosophy, materia medica, repertory, anatomy,
                    physiology, and pathology, combined with practical training
                    in homeopathic treatment methods. With guidance from
                    experienced faculty and access to modern clinical
                    facilities, you'll acquire the knowledge and skills
                    necessary to excel in homeopathic medicine.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#ffb4ac] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Bachelor of Ayurvedic Medicine and Surgery(BAMS)
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
                  <h1 className="my-1 mt-2 font-semibold text-[18px] text-[#c10a16] ">
                    Overview:
                  </h1>
                  <p className="my-1">
                    Our BAMS programs cover a wide range of subjects, including
                    Ayurvedic principles, herbal medicine, anatomy, physiology,
                    and pathology, along with practical training in Ayurvedic
                    treatments and therapies. Guided by experienced faculty and
                    supported by well-equipped facilities, you'll gain the
                    skills and expertise needed to excel in the field of
                    Ayurvedic medicine. well as the restoration and maintenance
                    of oral health.
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
