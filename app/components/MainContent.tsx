/* eslint-disable react/no-unescaped-entities */
"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import ProjectsSection from "./ProjectsSection";
import TimelineSection from "./TimelineSection";
import { useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
import TechSection from "./TechSection";

const MainContent = () => {
  const myRef3 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sh");
        }
      });
    });
    observer.observe(myRef3.current!);
  }, []);
  return (
    <section ref={myRef3} className="mx-auto pcarde max-w-lg px-12 sm:px-0">
      <article className="text-slate-50 mt-10 lg:mt-20 xl:mt-24 slide-in-left">
        <p className="text-sm font-bold hidden lg:flex gap-1 items-center">
          <span className="rounded-full bg-red-600 h-2 w-2"></span>
          working on <Link className="underline text-blue-400" href={'https://yeh.lol'}>yeh.lol</Link>
        </p>
        <div className="grid max-w-xl mt-5">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              <span>Hello, i'm </span>
              <br />
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600">
                <TypeAnimation
                  sequence={[
                    "Mirui",
                    2000,
                    "Web Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row mt-9 gap-3 ">
              <a
                target="_blank"
                className="items-center duration-500 font-medium text-slate-50 flex justify-center hover:scale-110 hover:bg-white hover:text-black bg-[#16161D] py-3 px-6 rounded-full"
                href="https://discordapp.com/users/977627340605628447"
              >
                <span className="inline-block mr-2 slide-in-bottom overflow-hidden">
                  <svg
                    width={15}
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                          fill="currentColor"
                          fill-rule="nonzero"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
                Discord
              </a>
              <a
                target="_blank"
                className="items-center duration-500 font-medium text-slate-50 flex justify-center hover:scale-110 hover:bg-white hover:text-black bg-[#16161D] py-3 px-6 rounded-full"
                href="https://www.github.com/mir6u/"
              >
                <span className="inline-block mr-2 slide-in-bottom overflow-hidden">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </span>
                GitHub
              </a>
              <a
                target="_blank"
                className="transition-all duration-500 items-center font-medium text-slate-50 flex justify-center hover:scale-110 hover:bg-white hover:text-black bg-[#16161D] py-3 px-6 rounded-full"
                href="mailto:fordiscord200824@gmail.com"
              >
                <span className="inline-block mr-2 slide-in-bottom overflow-hidden">
                  <svg
                    enable-background="new 0 0 64 64"
                    version="1.1"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={16}
                  >
                    <g id="Glyph_copy_2">
                      <path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z" />
                      <path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z" />
                    </g>
                  </svg>
                </span>
                Mail
              </a>
            </div>
            <p className="text-xl sm:text-left font-normal text-left max-w-lg text-slate-300 mt-9">
              Hello, I am Mirui, Experienced frontend developer from Russia,
              with about 6 months of expertise in React, Next, Node.js, MySQL
              and more. Ready to turn your design into a functional website
            </p>
          </div>
        </div>
        <hr className="my-5" />
      </article>
      <TimelineSection />
      <hr className="mt-3 mb-4 w-full grid gap-3 grid-cols-1 sm:grid-cols-2" />
      <Link href="/projects" className="text-slate-200 text-2xl font-bold">
        My Projects
      </Link>
      <ProjectsSection />
      <hr className="my-5" />
      <TechSection />
    </section>
  );
};

export default MainContent;
