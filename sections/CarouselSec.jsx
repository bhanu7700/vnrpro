"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { initFlowbite } from "flowbite";

export default function CarouselSec() {
  let [isOpen, setIsOpen] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    course: "",
    phone: "",
    email: "",
    message: "",
  });

  const notify = () => {
    toast.success("Thanks for Reaching Us !", {
      position: "bottom-right",
    });
  };

  const failNotify = () => {
    toast.warn("Something Went Wrong !", {
      position: "bottom-right",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
    setIsFormValid(checkFormValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qdh64d",
        "template_bay3usv",
        "#myform",
        "5yFVLN4CZ4M9UYPP4"
      )
      .then((message) => {
        console.log(message);
        setNewComment({
          name: "",
          course: "",
          phone: "",
          email: "",
          message: "",
        });
        notify();
      })
      .catch((err) => {
        console.log(`Error:${err}`);
        failNotify();
      });
  };

  const checkFormValidity = () => {
    const { name, email, message } = newComment;
    return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swipe h-full "
      >
        <SwiperSlide className=" swiper-slide animeslide-slide">
          <img
            src="/images/agri5.jpg"
            alt="Caroucel"
            className="w-full h-full   z-0 object-cover"
          />

          <div className=" img-text">
            <h1 className=" animeslide-heading " data-animate="bottom">
              Agriculture BSC
            </h1>
            <p class="animeslide-desc" data-animate="bottom">
              Delve into the fascinating world of agriculture with our Bachelor
              of Science (BSc) in Agriculture courses. Rooted in scientific
              principles and hands-on experience, our programs offer a
              comprehensive education in crop cultivation, soil management,
              livestock production, and sustainable farming practices.
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
              >
                Apply Now
              </button>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide animeslide-slide">
          <img
            src="/images/engineering1.jpg"
            alt="Caroucel"
            className="w-full  h-full   z-0 object-cover"
          />

          <div className=" img-text1">
            <h1 className=" animeslide-heading " data-animate="bottom">
              Engineering
            </h1>
            <p class="animeslide-desc" data-animate="bottom">
              Embark on a journey of innovation and problem-solving with our
              diverse range of engineering courses. Whether you're passionate
              about building sustainable infrastructure, or exploring the depths
              of scientific discovery, our engineering programs offer a gateway
              to endless possibilities.
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
              >
                Apply Now
              </button>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide animeslide-slide">
          <img
            src="/images/mbbs1.jpg"
            alt="Caroucel"
            className="w-full h-full   z-0 object-cover"
          />

          <div className=" img-text">
            <h1 className=" animeslide-heading " data-animate="bottom">
              MBBS Courses
            </h1>
            <p class="animeslide-desc" data-animate="bottom">
              Delve into the fascinating world of agriculture with our Bachelor
              of Science (BSc) in Agriculture courses. Rooted in scientific
              principles and hands-on experience, our programs offer a
              comprehensive education in crop cultivation, soil management,
              livestock production, and sustainable farming practices.
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
              >
                Apply Now
              </button>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide animeslide-slide">
          <img
            src="/images/medicine1.jpg"
            alt="Caroucel"
            className="w-full  h-full  z-0 object-cover  "
          />

          <div className=" img-text2">
            <h1 className=" animeslide-heading " data-animate="bottom">
              Health Sciences
            </h1>
            <p class="animeslide-desc" data-animate="bottom">
              Embark on a path to improving lives with our comprehensive Medical
              Sciences courses. Our programs provide an in-depth understanding
              of human biology, disease mechanisms, and innovative healthcare
              solutions, preparing you for a fulfilling career in the medical
              field.
              <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              type="button"
              >Apply Now</button>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide animeslide-slide">
          <img
            src="/images/degree1.jpg"
            alt="Caroucel"
            className="w-full h-full   z-0 object-cover"
          />

          <div className=" img-text4">
            <h1 className=" animeslide-heading " data-animate="bottom">
              Distance/Online Education
            </h1>
            <p class="animeslide-desc" data-animate="bottom">
              Distance or online education represents a transformative force in
              the field of education, democratizing access to learning
              opportunities and empowering individuals to pursue their
              educational aspirations regardless of their circumstances.
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
              >
                Apply Now
              </button>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <div
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          class="hidden  overflow-y-auto overflow-x-hidden fixed top-0  right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
        >
          <div className="form-sec w-[40%] max-lg:w-[80%] py-1">
            <section className="text-gray-700 body-font relative px-2 max-md:px-4 ">
              <div className="container  px-2  py-10  mx-auto">
                <div className="flex flex-col text-center w-full mb-12 gap-2">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Apply Now
                  </h1>
                  {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Send a message
                  </p> */}
                </div>
                <div className=" md:w-2/3 mx-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap -m-2"
                    id="myform"
                  >
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
                          value={newComment.name}
                          onChange={handleInputChange}
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
                          type="text"
                          id="course"
                          name="course"
                          value={newComment.course}
                          onChange={handleInputChange}
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
                          id="phone"
                          name="phone"
                          value={newComment.phone}
                          onChange={handleInputChange}
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
                          value={newComment.email}
                          onChange={handleInputChange}
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
                          value={newComment.message}
                          onChange={handleInputChange}
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        disabled={!isFormValid}
                        type="submit"
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                  <ToastContainer className="z-50" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
