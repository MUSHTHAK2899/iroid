import React from "react";
import image4 from "../assests/004.png";

const Review2 = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20 gap-x-20 gap-y-10 max-w-full md:mt-20 lg:mt-0  content-center">

          <div className="bg1 p-10 md:p-5 lg:p-10 text-[#FFFFFF] mt-[80px] xs:mt-0  sm:mt-0 md:mt-0 max-w-full md:max-h-[304px]">
            <h1 className="text-[24px] ">Our Vision</h1>
            <p className="text-[14px] mt-3 leading-loose max-w-full">
              Our vision is to provide prime value to customers by delivering
              supreme quality undergarments in the global market with the intent
              to touch the lives of our employees, immediate society and the
              world community with the understanding -‘we exist because they
              exist’.
            </p>
          </div>

          <div className="md:row-span-2 max-w-full max-h-full bg3 p-10 md:p-5 lg:p-10  text-[#FFFFFF]">
            <h1 className="text-1 text-[24px]  lg:mt-7 xxl:mt-16 xlxl:mt-32">Our Mission</h1>
            <h3 className=" text-[14px] mt-3">
              Our mission is to put in effort wholeheartedly to:
            </h3>
            <ul className="ml-7 text-[13px]">
              <li className="mt-4 list-disc ">
                Ensure the quality of the product excellence through monitoring
                at every stages of production till delivery and customer
                satisfaction.
              </li>
              <li className="list-disc mt-3">
                Focus on widening the business every year through a progressive
                approach of associating with prospective textile shops,
                appointing distributors and contracting with business agents.
              </li>
              <li className="list-disc mt-3">
                Share part of the profit to ensure the welfare of the employees,
                society & the environment.
              </li>
            </ul>
          </div>

          <div className="  md:max-w-full max-h-[180px] xlxl:bg-black xlxl:max-h-[320px]">
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review2;
