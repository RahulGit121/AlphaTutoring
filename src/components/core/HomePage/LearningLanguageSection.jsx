import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import img1 from "../../../assets/Images/Know_your_progress.png"
import img2 from "../../../assets/Images/Compare_with_others.png"
import img3 from "../../../assets/Images/Plan_your_lessons.png"

function LearningLanguageSection() {
  return (
    <div className="mt-[130px]">
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-semibold ">
          Your swiss knife for
          <HighlightText text={" learning any language"}></HighlightText>
        </div>
        <div className="text-center mx-auto font-medium text-richblack-700 text-base w-[55%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <img src={img1} alt="Know of your progress"  className="object-contain -mr-32"/>
        <img src={img2} alt="Know of your progress" className="object-contain" />
        <img src={img3} alt="Know of your progress" className="object-contain -ml-36" />

      </div>
      <div className="flex items-center justify-center pb-24">
        <CTAButton active={true} linkto={"/login"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
}

export default LearningLanguageSection;
