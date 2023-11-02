"use client";
import React, { useEffect } from "react";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  icons: any;
  href: string;
}

const ProjectCard = ({ title, description, icons, href }: Props) => {
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
    <>
      <div
        ref={myRef}
        className="bg-[#16161D]  p-6 pcard rounded-2xl shadow-xl text-slate-100 relative"
      >
        <a className="group" target="_blank" href={href}>
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-slate-50">{title}</div>
            <div className="text-slate-50 transition-all transform rotate-45 hidden group-hover:block z-10 ease-in-out">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
              </svg>
            </div>
          </div>
          <p className="text-[#aebdd1] mt-3 text-base font-medium">
            {description}
          </p>
        </a>
        <div className="flex w-full mt-4 gap-3 text-white flex-row">
          {icons.map((icon: any) => {
            return (
              <div className="" key={icon}>
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
