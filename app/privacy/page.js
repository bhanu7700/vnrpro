import React from "react";

const page = () => {
  return (
    <div className="padding-x py-10">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-[40px] font-bold">Privacy Policy</h1>
      </div>
      <div className="">
        <h1 className="text-[24px] font-semibold">1.Introduction</h1>
        <p className="text-[16px] pt-4">
          Welcome to VNR Educational Services. We are committed to protecting
          and respecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website [yourwebsite.com], engage our services, or communicate
          with us. Please read this policy carefully to understand our views and
          practices regarding your personal data and how we will treat it.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-[24px] font-semibold">2.Information We Collect</h1>
        <p className="text-[16px] pt-4">
          We use the information we collect in the following ways:
          <ul className="list-disc px-4">
            <li className="py-1">
              <h1>
                {" "}
                To provide, operate, and maintain our website and services
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                To improve, personalize, and expand our website and services
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                To understand and analyze how you use our website and services
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                To develop new products, services, features, and functionality
              </h1>
            </li>
            <li className="py-1">
              <h1>
                To communicate with you for marketing and promotional purposes
              </h1>
            </li>
            <li className="py-1">
              <h1> To comply with legal obligations</h1>
            </li>
            <li className="py-1">
              <h1> To send you emails</h1>
            </li>
          </ul>
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-[24px] font-semibold">3.Data Security</h1>
        <p className="text-[16px] pt-4">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-[24px] font-semibold">4.Your Data Protection Rights</h1>
        <p className="text-[16px] pt-4">
        Depending on your location, you may have the following rights regarding your personal data:
          <ul className="list-disc px-4">
            <li className="py-1">
              <h1>
                {" "}
                The right to access – You have the right to request copies of your personal data.
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
              </h1>
            </li>
            <li className="py-1">
              <h1>
                {" "}
                The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
              </h1>
            </li>
            <li className="py-1">
              <h1>
              The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
              </h1>
            </li>
            <li className="py-1">
              <h1> The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</h1>
            </li>
            
          </ul>
        </p>
      </div>
    </div>
  );
};

export default page;
