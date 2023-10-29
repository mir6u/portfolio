import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Timeline = () => {
  const myRef2 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sh')
        } 
      })
    })
    observer.observe(myRef2.current!)
  }, [])
  return (
    <div ref={myRef2} className="pcard">
      <h2 className="text-white font-bold text-2xl mb-3">My Daily Routine</h2>
      <ul className="w-full text-white flex flex-col font-normal text-sm sm:text-md">
        <li className="w-full flex flex-col items-end relative mb-4 text-right">
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] animate-ping"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
          <div className="h-24 w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"></div>
          <p className="mb-3 font-semibold">7 A.M.</p>
          <p>Starting the day</p>
        </li>
        <li className="relative mb-4">
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] animate-ping"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
          <div className="h-24 w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"></div>
          <p className="mb-3 font-semibold">8 A.M - 1:40 P.M.</p>
          <p>Finishing school</p>
        </li>
        <li className="w-full mb-4 relative flex flex-col items-end">
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] animate-ping"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
          <div className="h-24 w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"></div>
          <p className="mb-3 font-semibold">2 P.M. - 6 P.M.</p>
          <p>Coding etc.</p>
        </li>
        <li className="relative mb-4">
          <div className="h-20 w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"></div>
          <div className="w-3 h-3 z-20 bg-gradient-to-r from-cyan-400 to-green-300 rounded-full absolute scale-120  sm:mt-0 left-[calc(50%-6px)] animate-ping"></div>
          <div className="w-3 h-3 z-29 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
          <p className="mb-3 font-semibold">08-02-2022</p>
          <p>Friend etc.</p>
        </li>
        <li className="w-full mb-4 relative flex flex-col items-end">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] animate-ping"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
          <p className="mb-3 font-semibold">11:30 P.M.</p>
          <p>Finishing the day</p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
