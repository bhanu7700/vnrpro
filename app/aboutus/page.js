"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GrGroup } from "react-icons/gr";

const page = () => {
  return (
    <div>
      <div className="about h-[450px] flex justify-center items-center bg-cover ">
        <Fade>
          <h1 className="text-[80px] max-md:text-[60px] text-white  font-bold">About Us</h1>
        </Fade>
      </div>
      <div className="padding-x padding-y flex max-md:flex-col gap-4">
        <div className="w-[50%] max-md:w-[100%]">
          <div className="flex gap-4 justify-center items-center mb-3">
            <GrGroup size={30} />
            <Fade>

            <h1 className="text-[30px] max-md:text-[22px] text-[#c10a16] font-semibold ">
              VNR Educational Services
            </h1>
            </Fade>

          </div>
          <Fade>
          <p className="text-[16px] py-2">
           

            At VNR services, we believe that every student deserves access to
            quality education and guidance to fulfill their academic
            aspirations. Established with a passion for empowering students to
            reach their full potential, we are dedicated to providing
            comprehensive consultancy services tailored to the unique needs of
            undergraduate students.

          </p>
          </Fade>

          <h1 className="mt-3 text-[20px] font-semibold">Our Mission:</h1>
          <Fade>

          <p className="text-[16px] py-2">
            Our mission is simple yet profound: to empower students to make
            informed decisions about their academic and professional futures. We
            strive to guide students through every step of their educational
            journey, from choosing the right undergraduate program to securing
            admission in their dream institutions.
          </p>
          </Fade>

          <h1 className="mt-3 text-[20px] font-semibold">
            What Sets Us Apart:
          </h1>
          <h1 className="mt-3 text-[20px] font-semibold">
            1.Personalized Approach:
          </h1>
          <Fade>

          <p className="text-[16px] py-2">
            We understand that every student is unique, with distinct academic
            goals and preferences. That's why we take a personalized approach to
            consultancy, offering individualized guidance and support tailored
            to each student's needs.
          </p>
          </Fade>

          <h1 className="mt-3 text-[20px] font-semibold">2.Expert Guidance:</h1>
          <Fade>

          <p className="text-[16px] py-2">
            Our team of experienced educational consultants comprises
            professionals with extensive knowledge of undergraduate education
            systems worldwide. With their expertise and insights, we provide
            students with valuable guidance and advice to navigate the complex
            admissions process successfully.
          </p>
          </Fade>

          <h1 className="mt-3 text-[20px] font-semibold">
            3.Comprehensive Services:
          </h1>
          <Fade>

          <p className="text-[16px] py-2">
            From academic program selection and application assistance to
            interview preparation and visa guidance, we offer a wide range of
            consultancy services to meet all your undergraduate education needs
            under one roof.
          </p>
          </Fade>

          <h1 className="mt-3 text-[20px] font-semibold">
            4.Ethical Practices:
          </h1>
          <Fade>

          <p className="text-[16px] py-2">
            Integrity and transparency are at the core of our consultancy
            services. We adhere to ethical practices and prioritize the best
            interests of our students, ensuring a trustworthy and reliable
            partnership throughout the consultancy process.
          </p>
          </Fade>

        </div>
        <div className="w-[50%] max-md:w-[100%] py-5 px-5 max-md:p-1 ">
            <Fade>

            <img src="/images/edu1.jpg" alt="Education" className=""/>
            </Fade>


        </div>
      </div>
    </div>
  );
};

export default page;
