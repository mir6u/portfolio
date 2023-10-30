import React, { useEffect, useRef } from "react";

const TimeLineLine = () => {
  const myRef = useRef<HTMLInputElement>(null);
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
  }, []);
  return (
    <div
      ref={myRef}
      className="h-[5rem] pcard w-0.5 bg-gradient-to-r from-cyan-300 to-green-300 bg-white absolute left-[calc(50%-1px)]"
    ></div>
  );
};

export default TimeLineLine;
