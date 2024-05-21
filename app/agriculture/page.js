import React from "react";

const page = () => {
  return (
    <div>
      <div className="coursemain flex max-md:flex-col gap-2 h-[350px] justify-center items-center ">
        <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "}
        <h1 className="text-[40px] relative text-white"> -BSC Agriculture</h1>
      </div>
      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              Agriculture Cources
            </h1>
            <p>
              Delve into the fascinating world of agriculture with our Bachelor
              of Science (BSc) in Agriculture courses. Rooted in scientific
              principles and hands-on experience, our programs offer a
              comprehensive education in crop cultivation, soil management,
              livestock production, and sustainable farming practices.
            </p>
            <p className="my-2">
              Whether you're drawn to the art of crop science, fascinated by the
              intricacies of animal husbandry, or passionate about promoting
              environmental stewardship, our BSc Agriculture courses provide a
              solid foundation for a rewarding career in the agricultural
              industry.
            </p>
            <p className="mt-2">
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
            <img src="/images/agri1.jpg" alt="engineering" />
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
