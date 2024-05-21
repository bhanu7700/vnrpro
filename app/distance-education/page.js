import React from "react";

const page = () => {
  return (
    <div>
      <div className="coursemain flex max-md:flex-col gap-2 h-[350px] justify-center items-center ">
        <h1 className="text-[40px] text-white relative  ">Courses</h1>{" "}
        <h1 className="text-[40px] relative text-white">
          {" "}
          -Distance/Online Education
        </h1>
      </div>
      <div className="padding-x padding-y">
        <div className="flex max-md:flex-col gap-10">
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2 flex flex-col justify-center items-center ">
            <h1 className="mb-2 text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold">
              Distance/Online Cources
            </h1>
            <p>
              Distance or online education degrees have transformed the
              landscape of higher learning, offering unparalleled flexibility
              and accessibility to students worldwide. These programs enable
              learners to pursue their academic aspirations without the
              constraints of geographical boundaries or rigid schedules, making
              education more inclusive and accommodating diverse lifestyles.
              Through innovative digital platforms and interactive tools,
              students engage in dynamic virtual classrooms, collaborating with
              peers and accessing resources at their own pace.
            </p>
            <p className="my-2">
              Online degrees not only empower individuals to balance their
              studies with work or other commitments but also foster
              independence and self-discipline, essential skills in today's
              rapidly evolving global workforce. With the convenience of remote
              learning, distance education degrees herald a new era of
              education, breaking down barriers and opening doors to limitless
              opportunities for lifelong learning.
            </p>
          </div>
          <div className="w-[50%] max-md:w-[100%] px-10 max-md:px-2">
            <img src="/images/degree.jpg" alt="engineering" />
          </div>
        </div>

        <h1 className="text-[40px] max-md:text-[30px] text-[#c10a16] font-semibold py-5 mt-10 flex  justify-center">
          Specifications
        </h1>

        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          <div>
            <div class="mx-auto lg:max-w-3xl flex flex-col justify-center items-center ">
              <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
                Under Gradution(UG)
              </h1>
              <div class="space-y-6 w-full">
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    Arts Cources (Duration: 3 Years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BA -EHP (Economics,History,Politics)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          BA -EPP (Economics, Pub-Administration,Politics)
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          BA-EPS (Economics,Pub-Administration,Sociology){" "}
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BA-EHS (Economics, History, Sociology)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>BA-EPS (Economics,Politics, Sociology)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BA-HPS (History,Politics, Sociology)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BA-HPP (History, Politics,Pub- Administration)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BA-Spl-Telugu (Spl.English,History,Spl.Telugu)</h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    COMMERCE COURSES (Duration : 3 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> B.Com - (General)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> B.Com- (Computer Applcation)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> B.B.A - (Bachelor of Busniess Administration)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          B.C.A - (Bachelor of Computer Application
                          Administration)
                        </h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    SCIENCES COURSES (Duration : 3 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> B.Sc - MPC (Mathematics,Physics, Chemistry)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          B.Sc - MPCS (Mathematics,Physics, Computer Science){" "}
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> BZC ( Botany, Zoology, Chemistry)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          B.Sc - MSCS (Mathematics,Statics, Computer Science){" "}
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>B.Sc- MPE (Mathematics, Physics, Electronics) </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          B.Sc - MECS (Mathematics,Electronics, Computer
                          Science){" "}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div>
            <div class="mx-auto lg:max-w-3xl flex flex-col justify-center items-center ">
              <h1 className="text-[25px] max-md:text-[20px] font-medium py-4">
                Post Gradution(PG)
              </h1>
              <div class="space-y-6 w-full">
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    Arts Courses (Duration: 2 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(English)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Telugu)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>MA.(Hindi)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Sanskrit)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>MA.(History)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Economics)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Political Science)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Political Science)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Sociology)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Public - Administration)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MA.(Philosophy)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MSW.(Master of Social Work)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> MMA.JMC-(Journalism & Mass Communication)</h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    COMMERCE Courses (Duration: 2 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.Com - (Accountancy)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.Com - (Banking)</h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    M.B.A SPECIALISATION COURSES (Duration: 2 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A - (HRM,Finance, Marketing)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A - (Hospital Administration)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>M.B.A- (International Marketing)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A -(commerce Marketing & Management)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>M.B.A -(Mass Communication)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>M.B.A M.B.A - (Risk Management)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A - (Health Care Management)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A - (Information Technology)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A - (Business Analytics &Intelligence)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A- (Branding & Advertising)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A-( E-commerce Marketing & Management)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A- (Mass Communication)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A-(DigitalMarketing)</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.B.A-(Strategic Management)</h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    MCA- (Master of Computer Application)
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
                    <p className="max-md:text-[14px]">
                      Our MCA courses cover a wide range of subjects, including
                      programming languages, database management, network
                      security, and web technologies, combined with practical
                      project work and internships. With guidance from
                      experienced faculty and access to modern IT facilities,
                      you'll acquire the skills needed to thrive in the tech
                      industry.
                    </p>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    SCIENCES COURSES (Duration: 2 years)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          M.Sc-(Zoology) B.Sc with Zoology as one Subject
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.Sc-(Botany) B.Sc with Botany as one Subject</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> M.Sc-(Psychology) , Bachelors Degree</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          M.Sc-(Physics) ,B.Sc with physics & maths subject
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          M.Sc-(Chemistry),B.Sc with Chemistry as one subject
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>M.Sc-(Computer Science) Any Degree</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          M.Sc-(Mathematics) B.Sc or BA with maths subject
                        </h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    ONE YEAR COURSES
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          BLISC - (Bachelor of Library Information Science)
                          Eligibility any Degree
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          MLISC - (Master of Library Information Science)
                          Eligibility. only BLISC Degree
                        </h1>
                      </li>
                    </ul>
                  </div>
                </details>
                <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg max-md:text-[15px] font-medium text-secondary-900">
                    DIPLOMA (Duration: 1 year)
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
                    <ul className="list-disc">
                      <li className="py-1 max-md:text-[14px]">
                        <h1> Industrial Relations & Personnel Management</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          Cooperation and Rural Studies/ Environmental Studies/
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>
                          {" "}
                          Disaster Management functional Hindi and translation
                        </h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> Diploma in Food production</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1> Diploma in psychological guidance& counselling</h1>
                      </li>
                      <li className="py-1 max-md:text-[14px]">
                        <h1>PGDCA</h1>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
