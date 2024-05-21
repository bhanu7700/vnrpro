"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="grid  max-md:grid-cols-1  bg-[#202238] text-white py-5 px-4 gap-20 max-md:gap-10 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[20px]">Student Teacher Ratio</h2>
          <h1 className="text-[40px]">
            {" "}
            1:
            {counterOn && <CountUp start={0} end={10} duration={4} delay={0} />}
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[20px]">Job Placement</h2>

          <h1 className="text-[40px]">
            {" "}
            {counterOn && (
              <CountUp start={0} end={100} duration={3} delay={0} />
            )}
            %
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[20px]">Graduate Students</h2>

          <h1 className="text-[40px]">
            {" "}
            {counterOn && (
              <CountUp start={0} end={10000} duration={2} delay={0} />
            )}{" "}
            +
          </h1>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
