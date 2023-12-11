"use client"
import React, { useEffect, useRef } from "react";

interface Props {
  title: string;
  image: any;
}

const TechComponent = ({ title, image }: Props) => {
  const myRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sh");
        }
      });
    });
    observer.observe(myRef.current!);
  }, []);
  return (
    <div ref={myRef} className="bg-[#16161D] pcard hover:bg-[#21212a] p-6 rounded-lg text-slate-100 relative transition-all h-[7.5rem] flex justify-center items-center cursor-pointer flex-col gap-2 ">
      <div>{image}</div>
      <div className="mt-2 font-semibold text-xs">{title}</div>
    </div>
  );
};

export default TechComponent;
