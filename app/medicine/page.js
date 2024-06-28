import ExportedImage from "next-image-export-optimizer";
import React, { Suspense } from "react";

export const metadata = {
  title: "Medicine | VNR EDU",
  description:
    "Our programs provide an in-depth understanding of human biology, disease mechanisms, and innovative healthcare solutions, preparing you for a fulfilling career in the medical field",
};

const page = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
       <div className="  h-[350px] relative flex justify-center items-center">
        {/* <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "} */}
        <ExportedImage
          src="/images/medicine4.jpg"
          alt="Caroucel"
          width={10}
          height={10}
          sizes="100vw"
          className="z-0 object-cover w-[100%] h-[100%]"
        />

        <h1 className="text-[60px] max-md:text-[40px] font-serif  absolute   bg-black bg-opacity-50 px-5 rounded text-white">
          {" "}
          Medical Science
        </h1>
      </div>
    
      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              Medical Sciences Cources
            </h1>
            <h1 className="mb-4 text-[25px] font-bold text-[#10316b] lg:text-center">
             Pharmacy Councel of India(PCI) Approved Colleges
            </h1>
            <p className="font-[500]">
              Embark on a path to improving lives with our comprehensive Medical
              Sciences courses. Our programs provide an in-depth understanding
              of human biology, disease mechanisms, and innovative healthcare
              solutions, preparing you for a fulfilling career in the medical
              field. Whether you aspire to be a doctor, researcher, or
              healthcare professional, our courses cover a broad spectrum of
              subjects, including anatomy, physiology, biochemistry, and
              pharmacology. Gain the knowledge and skills needed to excel in
              medical research, clinical practice, and healthcare management.
            </p>
            <p className="mt-2 font-[500]">
              Join a community of dedicated students and professionals committed
              to advancing medical knowledge and improving patient care. With
              our Medical Sciences courses, you'll be equipped to make
              significant contributions to health and wellness. Ready to start
              your journey in medical sciences? Explore our programs and take
              the first step toward a rewarding career in healthcare and
              medicine.
            </p>
          </div>
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2">
            {/* <img  className="h-[550px] max-md:h-[350px]" alt="engineering" /> */}
            <ExportedImage
              src="/images/medicine6.jpeg"
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
                  Radiology & Med Imaging Tech
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
                  <div>
                    <h1 className="my-1 font-semibold text-[16px] text-[#c10a16] ">
                      Radiology:
                    </h1>
                    <p className="my-1">
                      Radiology is a medical specialty that uses imaging
                      techniques to diagnose and treat diseases within the body.
                      Radiologists are medical doctors who specialize in
                      interpreting these images to provide crucial information
                      about a patient's condition.
                    </p>
                    <h1 className="my-1 mt-2 font-semibold text-[16px] text-[#c10a16] ">
                      Medical Imaging Technology:
                    </h1>
                    <p className="my-1">
                      Medical imaging technology encompasses a range of
                      techniques and tools used to create detailed images of the
                      internal structures of the body. These images help
                      healthcare professionals to diagnose, monitor, and treat
                      medical conditions effectively.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group rounded-xl bg-[#38598b] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Anesthesia & Operation Theatre Tech
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
                    Operating room and anesthesia technology encompass a range
                    of specialized equipment, tools, and processes used during
                    surgical procedures to create a safe and efficient
                    environment for surgical teams and patients. These
                    technologies play a crucial role in ensuring the success of
                    surgical interventions across various medical specialties.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#42b883] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Renal Dialysis Tech
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
                    Renal dialysis is a medical procedure designed to mimic the
                    function of the kidneys by filtering waste products and
                    excess fluids from the blood. It is necessary for patients
                    whose kidneys are unable to perform this vital function due
                    to acute or chronic kidney failure.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#c7b198] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Respiratory Care Tech
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
                    Respiratory care technology focuses on the diagnosis,
                    treatment, and management of respiratory disorders and
                    conditions affecting the lungs and airways. It plays a
                    crucial role in supporting patients with respiratory
                    illnesses, ensuring optimal lung function and overall
                    health.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#ffb4ac] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Medical Lab Tech
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
                    Our Medical Lab Technician(MLT) programs cover a wide range
                    of subjects, including clinical chemistry, hematology,
                    microbiology, immunology, and blood banking. With hands-on
                    training in state-of-the-art laboratory facilities and
                    guidance from experienced instructors, you'll gain the
                    technical expertise and precision required to excel as a
                    medical laboratory technician.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#fff59d] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Neuro Science Radiology Tech
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
                    Neuroimaging and neuroscience radiology technology involve
                    advanced imaging techniques used to visualize and study the
                    structure and function of the brain and nervous system.
                    These technologies provide invaluable insights into
                    neurological conditions, guiding treatment decisions and
                    improving patient outcomes.
                  </p>
                </div>
              </details>

              <details class="group rounded-xl bg-[#8bc34a] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Cardiac Care Tech
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
                    Cardiac care technology focuses on the prevention,
                    diagnosis, and treatment of cardiovascular diseases, which
                    remain a leading cause of morbidity and mortality worldwide.
                    These technologies play a crucial role in improving patient
                    outcomes and quality of life for individuals with
                    heart-related conditions.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#42dee1] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Perfusion Tech
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
                    Perfusion technology involves the operation of heart-lung
                    bypass machines and other extracorporeal circulation devices
                    during cardiac surgery and medical procedures. Perfusionists
                    are highly skilled healthcare professionals responsible for
                    managing these devices and maintaining optimal physiological
                    conditions during surgery.
                  </p>
                </div>
              </details>
              <details class="group rounded-xl bg-[#a7b99e] shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
                  Optometry
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
                    Our Optometry programs cover a broad spectrum of subjects,
                    including ocular anatomy, optics, visual science, and
                    clinical practice. Through hands-on training and guidance
                    from experienced faculty, you'll gain the expertise needed
                    to perform eye examinations, prescribe corrective lenses,
                    and manage various eye conditions.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
