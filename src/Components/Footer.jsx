import React from 'react'
import image6 from '../assests/006.png'
import youtube from '../assests/youtube.svg'
import linkedin from '../assests/Icon awesome-linkedin.svg'
import twitter from '../assests/Icon awesome-twitter.svg'
import facebook from '../assests/Icon awesome-facebook-f.png' 


const Footer = () => {
  return (
      <div className='bg-[#242424] text-[#FFFFFF] max-w-full max-h-full'>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  p-10'>
            <div className='flex flex-col items-center justify-center'>
                <img className='ml-2' src={image6} alt="" />
                <h1 className='mt-3 text-[13px]'>Fast delivery in 3-5 Days</h1>
            </div>

            <div className='md:border-l text-center md:text-left border-gray-300/50 mt-5 md:mt-0'>
                <h1 className='md:ml-5 text-[15px]'>QUICK LINKS</h1>
                <div className='md:ml-5 flex flex-col gap-2 mt-4 text-[11px]'>
                <p>Gift Card</p>
                <p>Lookbook 2021 </p>
                <p>Privacy Policy </p>
                <p>hipping & Refund</p>
                </div>
            </div>

            <div className='text-center lg:text-left mt-5 lg:mt-0'>
                <h1 className='text-[15px]'>COMPANY</h1>
              <div className='flex flex-col gap-2 mt-4 text-[11px]'>
              <p>About Us</p>
                <p> Contact Us</p>
                <p> Pricing Plan</p>
                <p>Knowledge Base</p>
              </div>
            </div>
            <div className='text-center md:text-left mt-7 lg:mt-0'>
                <h1 className='text-[15px]'>NEWSLETTER</h1>
                <p className='text-[12px] md:mt-5'>Sign up & get all our latest updates and special offers</p>
                <div className='flex mt-5 justify-center md:justify-start'>
                    <input type="text" placeholder='Enter Your Email address' className='p-2 lg:w-[292px]'/>
                    <button className='bg-[#6B6B6B] p-2 text-[11px]'>SUBSCRIBE</button>
                </div>
                <div className='flex gap-5 mt-5 justify-center md:justify-start lg:justify-end xxl:justify-start'>
                    <img className='border rounded-full p-1 w-5 h-5' src={youtube} alt="" />
                    <img className='border rounded-full p-1 w-5 h-5' src={linkedin} alt="" />
                    <img className='border rounded-full p-1 w-5 h-5' src={twitter} alt="" />
                    <img className='border rounded-full p-1 w-5 h-5' src={facebook} alt="" />
                </div>
            </div>
        </div>
        <div className='border-b'></div>
        <h1 className='p-3 text-center text-[16px] text-[#FFFFFF]/70'>© 2021 Alba. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer