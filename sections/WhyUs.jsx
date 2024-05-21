"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center  ">
      <Fade cascade>
        <p className=" text-[35px] max-md:text-[24px]  font-serif my-5">
          Let’s Dream Big Together - University Admissions & Career Planning
        </p>
        {/* <h1 className="text-[40px] max-md:text-[22px] font-semibold mt-4 mb-5">
          Best Consultancy for Distance and Online Education
        </h1> */}
      </Fade>

      <div className="flex  max-lg:flex-col my-6 gap-8 max-md:gap-12 mt-10">
        <Fade cascade damping={0.1}>
          <div className="flex gap-6  flex-col justify-center items-center ">
            <div className="heart">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 heart"
              >
                <path
                  d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex-col justify-center items-center flex  text-center">
              <h1 className="text-[#c10a16] text-[25px] font-semibold">
                Distance/Online Education
              </h1>
              <p className="mt-5 pr-6 font-serif">
                Our online education options cover a wide range of disciplines,
                providing interactive and engaging learning experiences through
                cutting-edge technology. With access to expert instructors,
                virtual labs, and a supportive online community, you can achieve
                your academic goals without compromising on quality.
              </p>
            </div>
          </div>

          <div className="flex gap-6 flex-col justify-center items-center ">
            <div className="heart">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 heart"
              >
                <path
                  d="M9 3V9M6 5V9M3 7V9M13 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16M3 16V13M2 16H22V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16Z"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex-col justify-center items-center flex  text-center">
              <h1 className="text-[#c10a16] text-[25px] font-semibold">
                Carreer Guidence
              </h1>
              <p className="mt-5 pr-6 font-serif">
                We offer one-on-one counseling, resume building, interview
                preparation, and networking strategies tailored to your
                interests and strengths. Whether you're deciding on a major,
                seeking internships, or preparing for job applications, our
                expert advisors are here to support you every step of the way.
              </p>
            </div>
          </div>
          <div className="flex gap-6 flex-col justify-center items-center ">
            <div className="heart">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 heart"
              >
                <path
                  d="M19.0006 9.03002C19.0007 8.10058 18.8158 7.18037 18.4565 6.32317C18.0972 5.46598 17.5709 4.68895 16.9081 4.03734C16.2453 3.38574 15.4594 2.87265 14.5962 2.52801C13.7331 2.18336 12.8099 2.01409 11.8806 2.03002C10.0966 2.08307 8.39798 2.80604 7.12302 4.05504C5.84807 5.30405 5.0903 6.98746 5.00059 8.77001C4.95795 9.9595 5.21931 11.1402 5.75999 12.2006C6.30067 13.2609 7.10281 14.1659 8.09058 14.83C8.36897 15.011 8.59791 15.2584 8.75678 15.5499C8.91565 15.8415 8.99945 16.168 9.00059 16.5V18.03H15.0006V16.5C15.0006 16.1689 15.0829 15.843 15.24 15.5515C15.3971 15.26 15.6241 15.0121 15.9006 14.83C16.8528 14.1911 17.6336 13.328 18.1741 12.3167C18.7147 11.3054 18.9985 10.1767 19.0006 9.03002Z"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 21.04C14.1345 21.6891 13.0819 22.04 12 22.04C10.9181 22.04 9.86548 21.6891 9 21.04"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9901 5.64001L10.3301 8.41998C10.2549 8.54184 10.2138 8.68167 10.2111 8.82483C10.2084 8.96799 10.2441 9.10925 10.3146 9.23389C10.3851 9.35852 10.4877 9.46195 10.6118 9.53339C10.7359 9.60482 10.8769 9.64165 11.0201 9.64001H13.0201C13.1617 9.63947 13.301 9.67657 13.4237 9.7475C13.5463 9.81843 13.6479 9.92063 13.7181 10.0437C13.7883 10.1668 13.8245 10.3063 13.8231 10.4479C13.8217 10.5896 13.7827 10.7283 13.7101 10.85L12.0301 13.64"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex-col justify-center items-center flex  text-center">
              <h1 className="text-[#c10a16] text-[25px] font-semibold">
                Transfer Oppertunities
              </h1>
              <p className="mt-5 pr-6 font-serif">
                We provide expert advice on selecting the right institution,
                understanding transfer credits, and meeting application
                requirements. Our personalized approach ensures that your unique
                goals and academic achievements are matched with the best
                possible options for your continued education.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default WhyUs;
