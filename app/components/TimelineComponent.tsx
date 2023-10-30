import React, { useEffect, useRef } from "react";

interface Props {
  timestamp: string;
  task: string;
  extraClasses: string;
  isNotLast: boolean;
}

const TimelineComponent = ({
  timestamp,
  task,
  extraClasses,
  isNotLast,
}: Props) => {
  const myRef = useRef<HTMLInputElement>(null);
  const myRefT = useRef<HTMLInputElement>(null);
  const myRefT1 = useRef<HTMLInputElement>(null);
  const myRefT2 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sh");
        } else {
          entry.target.classList.remove("sh");
        }
      });
    });
    observer.observe(myRef.current!);
    observer.observe(myRefT.current!);
    observer.observe(myRefT1.current!);
    observer.observe(myRefT2.current!);
  }, []);
  return (
    <li className={`relative mb-4 ${extraClasses}`}>
      <div ref={myRefT} className="">
        <div ref={myRefT1} className="w-3 pcard h-3 z-20 bg-gradient-to-r from-cyan-400 to-green-300 rounded-full absolute scale-120  sm:mt-0 left-[calc(50%-6px)] animate-ping"></div>
        <div ref={myRefT2} className="w-3 pcard h-3 z-29 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full absolute scale-120  left-[calc(50%-6px)] "></div>
        {isNotLast ? (
          <div className="h-[5rem] w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"></div>
        ) : null}
      </div>

      <div ref={myRef} className="pcard">
        <p className="mb-3  font-semibold">{timestamp}</p>
        <p className="">{task}</p>
      </div>
    </li>
  );
};

export default TimelineComponent;
