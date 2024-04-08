import React from 'react'


const CourseCard = ({cardData, currentCard,setCurrentCard}) => {
  return (
    <div className= {`h-72 w-80 p-5 bg-richblack-800 text-richblack-400 ${currentCard===setCurrentCard ? "bg-white" :"bg-richblack-800"} `} >
      <div className='text-xl font-semibold mb-4 text-white'>
      <h2>{cardData.heading}</h2>
      </div>
      
      <p>{cardData.description}</p>

      <div className='mt-16'>
        <hr className=' border-dashed  text-richblack-300'/>
        <div className='mt-3 flex flex-row justify-between font-bold'>
          <div>{cardData.level}</div>
          <div>{cardData.lessionNumber} Lessons</div>
        </div>
      </div>
      
    </div>
  )
}

export default CourseCard
