import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]); // for which tab is selected
    const [courses, setCourses] = useState(HomePageExplore[0].courses); // for list
    const [currentCard, setCurrentCard] =useState(HomePageExplore[0].courses[0].heading); // for light theme with yellow shadow

        const setMyCards = (value) =>{
            setCurrentTab(value);
            const result = HomePageExplore.filter((course)=> course.tag=== value );
            setCourses(result[0].courses);
            setCurrentCard(result[0].courses[0].heading);

        }

  return (
    <div>
      <div className='text-4xl font-semibold text-center text-richblack-5'>Unlock the <HighlightText text={"Power of Code"}/></div>
      <p className='text-richblack-300 text-sm text-center mt-1'>Learn to Build Anything You Can Imagine</p>

      <div className='mt-5 mb-5 w-fit justify-center m-auto border-richblack-100 flex flex-row rounded-full bg-richblack-800 py-1 px-2'>{
            tabsName.map((element, index) =>{
                return (
                    <div className={`text-[16px] flex flex-row items-center gap-2 ${currentTab ===element ? "bg-richblack-900 text-richblack-5" : "text-richblack-200" }  rounded-full transition-all duration-200 cursor-pointer px-5 py-1`} 
                    key={index}
                    onClick={()=>setMyCards(element)}>

                        {element}
                    </div>
                )
            })
      }
      </div>
      <div className='lg:h-[20px]'></div>
      
      {/* course card */}

      <div className='flex flex-row gap-5 justify-center  mb-[-80px]'>
        {
            courses.map( (element,index)=> {
                return( 
                    <CourseCard
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                )
            })
        }
      </div>

    </div>
  )
}

export default ExploreMore
