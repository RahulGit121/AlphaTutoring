import React from "react";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
import { TypeAnimation } from "react-type-animation";

const Codeblocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 mx-20 justify-between  `}>
      {/* section 1 */}

      <div className=" w-[50%] flex flex-col gap-8 mx-20">
        {heading}
        <div className="text-richblack-300 font-bold">
          {subheading}
        </div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex items-center gap-2">
              {ctabtn1.text}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.text}
          </CTAButton>
        </div>
      </div>

      {/* section 2 */}

      <div className="mx-20 flex flex-row  bg-richblack-800 rounded h-fit w-[100%] py-4 text-10[px] lg:w-[500px]">
        {/* bg gradient */}
        <div className=" text-center flex flex-col text-richblack-200 font-inter font-bold w-[10%]">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-col font-bold font-mono ${codeColor} pr-2 gap-2`}>
        <TypeAnimation
          sequence={[codeblock,5000,""]}
          repeat={Infinity}
          cursor={true}
          style={{
            whiteSpace :"pre-line",
            display:"block",
          }
          }
          omitDeletionAnimation={true}
        /> 

        </div>
      </div>
    </div>
  );
};

export default Codeblocks;
