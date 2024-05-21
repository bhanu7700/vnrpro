import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="contact1 h-[450px] flex justify-center items-center bg-cover ">
        <h1 className="text-[80px] max-md:text-[60px] text-white  font-bold">
          Contact Us
        </h1>
      </div>
      <div className="padding-x padding-y flex max-md:flex-col ">
        <div className="form-sec w-[50%] max-lg:w-[100%] contactform">
          <section className="text-gray-700 body-font relative px-2 max-md:px-4 ">
            <div className="container  px-2  py-10  mx-auto">
              <div className="flex flex-col text-center w-full mb-12 gap-2">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Send a message
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-[50%] max-lg:w-[100%]  ">
                    <div className="relative flex flex-col items-start gap-3">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-600  "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-[50%] max-lg:w-[100%]">
                    <div className="relative flex flex-col items-start gap-3">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Preffered Course
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2  w-[50%] max-lg:w-[100%]">
                    <div className="relative flex flex-col items-start gap-3">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2  w-[50%] max-lg:w-[100%]">
                    <div className="relative flex flex-col items-start gap-3">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative flex flex-col items-start gap-3">
                      <label
                        for="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="px-24 py-2 w-[50%] max-md:w-[100%] flex flex-col justify-center items-center gap-4">
          <div className="bg-[#202238] text-white h-[280px] rounded-[10px]  flex jutify-start px-8 py-6 flex-col gap-4 w-[100%] max-lg:w-[330px]">
            <h1 className="text-[20px]">Contact Info</h1>
            <div className="flex gap-4 items-center">
              <FaLocationDot />
              <h1>Hyderabad</h1>
            </div>
            <div className="flex gap-4 items-center">
              <IoMdMailOpen />
              <h1>vnreduservices@gmail.com</h1>
            </div>
            <div className="flex  items-center gap-3">
              <MdAddIcCall size={20} />
              <h3 className="text-[14px]">9505502299</h3>
              <div class="h-[20px]  bg-green-300 w-[2px]"></div>
              <h3 className="text-[14px]">9000555355</h3>
            </div>
            <div className="flex  items-center gap-4 my-5">
              <FaFacebook size={25} />
              <FaSquareXTwitter size={25} />
              <IoLogoLinkedin size={25} />
              <FaInstagramSquare size={25} />
            </div>
          </div>
          <div className="bg-[#202238] text-white h-[280px] rounded-[10px] w-[100%] max-lg:w-[330px]    ">
            <iframe
              className="w-[100%] h-[100%] rounded-[10px] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.0022454259697!2d78.54341414797983!3d17.363300820433516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9996dce12ef1%3A0xcfe6093a2eccd1c0!2sHamstech%20College%20of%20Creative%20Education!5e0!3m2!1sen!2sin!4v1714899384011!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
