import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import TimelineComponent from "./TimelineComponent";

const TimelineSection = () => {
  console.log(48 + 23 + 56 + 348 + 17 + 41 + 220 + 262 + 68 + 159 + 28)
  return (
    <div>
      <h2 className="text-white font-bold text-2xl mb-3">My Daily Routine</h2>
      <ul className="w-full text-white flex flex-col font-normal text-sm sm:text-md">
        <TimelineComponent
          timestamp="7 A.M."
          extraClasses="text-right"
          task="Starting the day"
          isNotLast={true}
        />
        <TimelineComponent
          timestamp="8 A.M - 1:40 P.M"
          extraClasses=""
          task="Finishing school"
          isNotLast={true}
        />
        <TimelineComponent
          timestamp="2 P.M. - 6 P.M."
          extraClasses="text-right"
          task="Coding etc."
          isNotLast={true}
        />
        <TimelineComponent
          timestamp="6 P.M. - 11:30 P.M."
          extraClasses=""
          task="Friends etc."
          isNotLast={true}
        />
        <TimelineComponent
          timestamp="11:30 P.M."
          extraClasses="text-right"
          task="Finishing the day"
          isNotLast={false}
        />
      </ul>
    </div>
  );
};

export default TimelineSection;
