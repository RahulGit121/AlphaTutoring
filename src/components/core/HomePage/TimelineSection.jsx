import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import img from "../../../assets/Images/TimelineImage.png"

const timeline =[
    {
    logo : Logo1,
    heading : "Leadership",
    paragraph : "Fully Committed to the success company",

},
{
    logo : Logo2,
    heading : "Responsibility",
    paragraph : "Students will always be our top priority",

},
{
    logo : Logo3,
    heading : "Flexibility",
    paragraph : "The ability to switch is an important skills",

},
{
    logo : Logo4,
    heading : "Solve the problem",
    paragraph : "Code your way to a solution",

}

]

const TimelineSection=()=> {
  return (
    <div>
      <div className='flex flex-row gap-15 items-center'>
            <div className='w-[45%] flex flex-col gap-16  pl-32'>
            {
                timeline.map( (element,index) =>{
                    return (
                    <div className='flex flex-row gap-6 ' key={index}>
                       
                       <div className='h-[50px] w-[50px] flex justify-center items-center bg-white rounded-full'>
                         <img src={element.logo} alt="" />
                        </div> 

                            <div>
                                <h2 className=' font-semibold'>{element.heading}</h2>
                                <p className='text-base'>{element.paragraph}</p>
                            </div>
                    </div>
                    )
                } )
            } 
            </div>
            <div className=' relative shadow-blue-200'>
                <img src={img} alt="" className='shadow-white object-cover h-fit' />

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white py-10 translate-y-[-50%] translate-x-[19%]'>

                    <div className='flex gap-5 items-center border-r- border-caribbeangreen-200 px-7 '> 
                        <p className='text-3xl font-bold '>10</p>
                        <p className=' text-caribbeangreen-200 text-sm'>YEARS EXPERIENCE</p>
                    </div>
                    <div className='flex gap-5 items-center px-7 '>
                        <p className='text-3xl font-bold'>250</p>
                        <p className=' text-caribbeangreen-200 text-sm'>TYPES OF COURSES</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TimelineSection
