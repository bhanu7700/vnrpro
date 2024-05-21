import React from "react";

const page = () => {
  return (
    <div>
      <div className="coursemain flex max-md:flex-col gap-2 h-[350px] justify-center items-center ">
        <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "}
        <h1 className="text-[40px] relative text-white"> - Engineering</h1>
      </div>
      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              Engineering Cources
            </h1>
            <p>
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
            <p className="mt-2">
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
            <img src="/images/engineering3.jpg" alt="engineering" />
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
