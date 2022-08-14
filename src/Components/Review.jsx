import React from "react";
import image2 from "../assests/002.png";
import {reviews} from './data'

const Review = () => {
  return (
    <>
      <div className="container mx-auto p-5 md:p-10 lg:p-20 xl:p-24 xxl:p-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20">
          <div className="max-w-[400px] md:mt-28 lg:mt-7 xl:mt-0 max-h-[421px] lg:ml-10 xl:ml-[170px] xxl:ml-[200px] xlxl:ml-[700px]">
            <img src={image2} alt="" />
          </div>

          <div className="max-w-[536px] max-h-[449px]">
            <h1 className="text-xl font-semibold max-w-[430px]">
              What Do We Do To Make Our Employees Stay Happy And Satisfied ?
            </h1>
            <div className="">
              {
                  reviews.map((item)=>{
                      return(
                        <div className="flex gap-x-5 items-start mt-5 max-w-[504px]  ">
                          <img className="mt-2 " src={item.image} alt="" />
                          <p className="text-[14px]">{item.subtitle}</p>
                        </div>
                      )
                  })
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Review;
