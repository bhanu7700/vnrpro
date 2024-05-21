import React from "react";

const page = () => {
  return (
    <div>
      <div className="coursemain flex max-md:flex-col gap-2 h-[350px] justify-center items-center ">
        <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "}
        <h1 className="text-[40px] relative text-white"> -MBBS</h1>
      </div>
      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              MBBS Cources
            </h1>
            <p>
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
            <p className="my-2">
              Join a community of dedicated medical students committed to making
              a difference in healthcare. With personalized guidance and support
              from our consultancy, you'll navigate the application process with
              confidence and secure a place in top medical institutions.
            </p>
            <p className="mt-2">
              Ready to start your journey in medicine? Explore our MBBS courses
              and take the first step toward becoming a healthcare professional.
            </p>
          </div>
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2">
            <img src="/images/mbbs2.jpg" alt="engineering" />
          </div>
        </div>

        <h1 className="text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold py-5 mt-10 flex  justify-center">
          Specifications
        </h1>

        <div className=" grid lg:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col justify-center items-center">
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
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
              Electrical Communicational Engineering(CSE)
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
