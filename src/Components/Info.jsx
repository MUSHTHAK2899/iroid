import React from 'react'
import { info } from './data'
import image5 from '../assests/005.png'

const Info = () => {
  return (
    <div className='container mx-auto p-5 md:p-20 mt-7 md:mt-0'>
        <h1 className='text-[36px] text-center font-semibold'>Corporate Info</h1>
        <div className=' '>
            {
                info.map((item,index)=>{
                    return(
                        <div key={index} className=''>
                            <h1 className='text-[18px] font-bold mt-4'>{item.title}</h1>
                            <p className='p1 text-center mt-2'>{item.subtitle}</p>
                            <p className='p1 text-center mt-3'>{item.subtitle2}</p>
                            <p className='p1 text-center mt-3'>{item.subtitle3}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='mt-10 flex justify-center max-w-full'>
            <img src={image5} alt="" />
        </div>

    </div>
  )
}

export default Info