import React from "react";

const NavBar = () => {
  return (
    <>
      <div className=" flex text-[14px] bg-[#940D1B] w-full text-[#FFFFFF] h-[120px] items-center flex-col justify-center gap-y-2 md:h-[50px] md:flex-row md:justify-around md:gap-[220px] lg:gap-[350px] xl:gap-[450px] xxl:gap-[520px] xlxl:gap-[850px]">
        <h1 className="tracking-wide">Alba Helpline: 04829 222776</h1>
        <div className="flex gap-10">
          <h1 className="">Register</h1>
          <h1 className="">Login</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
