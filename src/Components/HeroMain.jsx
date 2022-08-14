import React from 'react'
import image1 from '../assests/001.png'

const HeroMain = () => {
  return (
    <>
    <div className='container mx-auto'>
       <div className='text-center p-3'>
       <h1 className=' text-2xl md:text-[36px] text-[#940D1B] font-semibold' >Happiness Is Our Culture</h1>
       <div className='max-h-[103px]  mt-8 max-w-full lg:pl-[120px] lg:pr-[120px] xl:pl-[180px] xl:pr-[180px] xxl:pl-[250px] xxl:pr-[250px] xlxl:pl-[350px] xlxl:pr-[350px] text-center md:pl-8 md:pr-8  '>
       <p className='text-[14px]' >The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
       </div>
       </div>
       <div className='p-9 mt-[80px] md:mt-[0px] lg:mt-[0px] xl:mt-[20px] flex justify-center
       md:p-20 lg:p-10'>
        <img className='max-w-full lg:max-w-[628px]  max-h-[326px]' src={image1} alt="" />
       </div>
   </div>
    </>
  )
}

export default HeroMain