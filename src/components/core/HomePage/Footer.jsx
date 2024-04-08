import React from 'react'
import Footicon from "../../../assets/Logo/Logo-Full-Light.png"

const Footer = () => {
  return (
    <div className='flex bg-richblack-800 text-richblack-400' >
      <div className='flex flex-col mt-10'>  
                <div className='items-center ml-8 gap-6'>
            <img src={Footicon} alt="" />
            <h3 className='text-2xl text-richblack-100'>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Affiliates</p>

                 </div>

      </div>
    </div>
  )
}

export default Footer
