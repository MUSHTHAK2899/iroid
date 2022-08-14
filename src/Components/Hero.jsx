import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart,AiOutlineHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div>
      <nav className="w-full text-black ">
        <div className="justify-between px-4 mx-auto  md:items-center md:justify-center lg:justify-around md:flex lg:px-8 md:gap-[50px] lg:gap-[40px]  ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
      
                <h2 className="text-[#940D1B] font-semibold text-3xl">LOGO</h2>
        
              <div className="md:hidden flex items-center gap-10 text-[#A4A4A4]">
                <AiOutlineSearch size={25} />
                <AiOutlineShoppingCart size={25} />
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className=" text-[14px] items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <h1 className="text-black hover:text-indigo-200">Home</h1>
                <li className="text-black hover:text-indigo-200">
                  <select>
                    <option value="">MEN</option>
                  </select>
                </li>
                <li className="text-black hover:text-indigo-200">
                  <select>
                    <option value="">WOMEN</option>
                  </select>
                </li>
                <li className="text-black hover:text-indigo-200">
                  <select>
                    <option value="">GIRLS</option>
                  </select>
                </li>
                <li className="text-black hover:text-indigo-200">
                  <select>
                    <option value="">BOYS</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className=" hidden md:flex md:gap-7 text-[#A4A4A4]">
            <AiOutlineSearch size={25} />
           <div>
           <AiOutlineShoppingCart size={25} />
           <div className="absolute top-[90px] bg-[#940D1B] rounded-full w-4 h-4 flex text-sm text-white items-center justify-center ">0</div>
           </div>
          </div>
        </div>
      </nav>
      <div className="hidden lg:flex  items-center gap-1 lg:ml-[85px] xl:ml-[140px]  xxl:ml-[170px] xlxl:ml-[340px]  free:ml-[160px]">
        <AiOutlineHome className='text-gray-500'/>
       <MdArrowForwardIos size={13} className='text-gray-500'/>
        <h1 className="text-[12px]">About us</h1>
      </div>
      <div className=" max-w-[950px] hidden lg:flex justify-end ">
        <div className="bg-[#940D1B]/30 w-5 h-5 rounded-full"></div>
      </div>
      </div>
    </>
  );
};

export default Hero;
