import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import Codeblocks from "../components/core/HomePage/Codeblocks";
import HighlightText from "../components/core/HomePage/HighlightText";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import ladyimg from "../assets/Images/Instructor.png"
import Footer from "../components/core/HomePage/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Login from "../pages/Login";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="mt-16 p-2 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-1 rounded-all transition-all duration-200 px-10 py-[5px]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-xl text-center font-semibold mt-7">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="tect-lg font-bold text-center text-richblack-300 mt-5 max-w-4xl">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* buttons */}
        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={Login}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="shadow-white mx-3 my-12 w-[75%] ">
          <video muted autoPlay loop>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section part 1 */}
        <Codeblocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={" Coding potential "} />
              with our online courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{ active: true, text: "Try it yourself", linkto: "/signup" }}
          ctabtn2={{ active: false, text: "Learn more", linkto: "/login" }}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport"content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n</html>\n<body>`}
          codeColor={"text-yellow-25"}
        />

        {/* code section part 1 */}

        <Codeblocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Start
              <HighlightText text={" Coding in seconds "} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{ active: true, text: "Continue Lesson", linkto: "/signup" }}
          ctabtn2={{ active: false, text: "Learn more", linkto: "/login" }}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport"content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n</html>\n<body>`}
          codeColor={"text-yellow-25"}
        />
      </div>
      <ExploreMore></ExploreMore>

      {/* section 2 */}
      <div className=" bg-pure-greys-5">
        <div className="homepageBack h-[310px] items-center flex gap-5 flex-row justify-center align-center">
          <CTAButton active={true} linkto={"/"}>
            <div className="flex flex-row items-center gap-2">
              Explore Full catalog
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={false} linkto={"/"}>
            <div>Learn More</div>
          </CTAButton>
        </div>

        {/*  sub section 2*/}
        <div className="flex mt-[16px] mx-20 px-10 h-[200px] gap-2">
          <div className=" font-semibold text-4xl w-[50%] mx-14">
            Get the skills you need for a{" "}
            <HighlightText text={"job that is in demand."} />
          </div>

          <div className="w-[50%] mx-14 text-[16px] flex flex-col gap-6 items-start">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
            <CTAButton active={true} linkto={"/signin"}>
              Learn More
            </CTAButton>
          </div>
        </div>
          <div className="my-5">
          <TimelineSection/>
          <LearningLanguageSection/>

          </div>
          
          </div>

          {/*-----------------------------section -3 again-------------------------------*/}
        
          <div className="w-11/12 mx-auto flex  items-center gap-20 ">
            <div className="m-6 pt-4">
              <img src={ladyimg} alt="teacher img" />
            </div>

            <div className="flex flex-col gap-5 w-[30%]">
              <div className="text-4xl w-[50%] text-white font-bold">
                Become an <HighlightText text={" instructor"}/>
              </div>
              <div className="text-richblack-300  ">
              Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
              </div>
              <div  className="mt-10 flex flex-row items-center gap-2">
                <CTAButton active={true} linkto={"/login"}>
                  <div className="flex flex-row items-center gap-2"> Start Teaching Today
                  <FaArrowRight/>
                  </div>
                </CTAButton>
              </div>
            </div>
          </div>
  
  <Footer></Footer>
      
    </div>
  );
};

export default Home;
