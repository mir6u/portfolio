"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import SidebarMobileButton from "./SidebarMobileButton";
import LGButton from "./LGButton";

const buttons = [
  {
    pathname: "/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 48 48"
        width="25px"
        height="25px"
      >
        <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
      </svg>
    ),
    label: "Home",
    isRight: true,
    isBordering: true,
  },
  {
    pathname: "/projects",
    svg: (
      <svg
        fill="currentColor"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5,21H19a2.006,2.006,0,0,0,2-2V9a2.006,2.006,0,0,0-2-2H17V5a2,2,0,0,0-2-2H9A2,2,0,0,0,7,5V7H5A2.006,2.006,0,0,0,3,9V19A2.006,2.006,0,0,0,5,21ZM9,5.5A.5.5,0,0,1,9.5,5h5a.5.5,0,0,1,.5.5V7H9Z" />
      </svg>
    ),
    label: "Projects",
    isRight: false,
    isBordering: false
  },
  {
    pathname: "https://github.com/mir6u",
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
      </svg>
    ),
    label: "GitHub",
    isRight: true,
    isBordering: false
  },
  {
    pathname: "mailto:mirui@yeh.lol",
    svg: (
      <svg
        enable-background="new 0 0 64 64"
        version="1.1"
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={25}
      >
        <g id="Glyph_copy_2">
          <path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z" />
          <path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z" />
        </g>
      </svg>
    ),
    label: "Mail me",
    isRight: false,
    isBordering: false
  },
  {
    pathname: "https://blog.mirui.ru",
    svg: (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="25" height="25" viewBox="0 0 24.000000 24.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
          fill="currentColor" stroke="none">
          <path d="M22 218 c-16 -16 -16 -160 0 -176 14 -14 88 -16 88 -2 0 6 -18 10
-40 10 l-40 0 0 55 0 55 90 0 c73 0 90 -3 90 -15 0 -8 5 -15 10 -15 14 0 12
74 -2 88 -16 16 -180 16 -196 0z m188 -23 c0 -12 -17 -15 -90 -15 -73 0 -90 3
-90 15 0 12 17 15 90 15 73 0 90 -3 90 -15z"/>
          <path d="M48 193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path d="M156 79 c-60 -65 -33 -93 33 -34 34 31 39 40 30 56 -14 27 -22 24
-63 -22z m54 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0
10 -4 10 -10z m-39 -43 c-11 -12 -24 -18 -27 -14 -10 10 27 48 38 41 6 -4 1
-16 -11 -27z"/>
        </g>
      </svg>

    ),
    label: "Thoughts",
    isRight: false,
    isBordering: true,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [route, setRoute] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const ref1 = useRef<HTMLButtonElement>(null);
  return (
    <>
      <nav className="bg-black flex lg:hidden justify-between items-center px-12 py-4">
        <p className="text-sm text-white flex items-center gap-4">
          <span className="h-2 w-2 font-bold z-10 bg-red-600 rounded-full"></span>
          Do not disturb.
        </p>
        <button
          onClick={() => {
            setIsOpen(true);
            console.log(isOpen);
          }}
          className="h-10 w-10 bg-[#333638] p-2 rounded-full text-white"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                d="M630 4032 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 1450 0 c1648 0 1507 -8 1609 86 74 67 100 129 101 234 0 68 -4 89 -28
137 -30 62 -83 115 -149 150 l-43 23 -1470 2 c-1355 2 -1474 0 -1515 -15z"
              />
              <path
                d="M4257 4030 c-75 -29 -132 -82 -169 -157 -27 -56 -32 -77 -32 -137 1
-284 342 -428 541 -229 66 66 88 123 88 228 0 78 -4 97 -27 141 -36 68 -113
136 -178 157 -68 22 -162 21 -223 -3z"
              />
              <path
                d="M630 2752 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 1450 0 c1648 0 1507 -8 1609 86 74 67 100 129 101 234 0 68 -4 89 -28
137 -30 62 -83 115 -149 150 l-43 23 -1470 2 c-1355 2 -1474 0 -1515 -15z"
              />
              <path
                d="M630 1472 c-64 -24 -160 -123 -183 -187 -55 -159 18 -332 171 -403
l57 -27 810 0 c924 0 870 -5 969 86 74 67 100 129 101 234 0 68 -4 89 -28 137
-30 62 -83 115 -149 150 l-43 23 -830 2 c-757 2 -834 0 -875 -15z"
              />
            </g>
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div
          onClick={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 300);
          }}
          className="h-screen w-full  fixed bg-[#000008]/70 backdrop-blur-sm z-[5555] inset-0"
        >
          <aside className="fixed text-slate-100 rounded-lg flex flex-col h-full w-full justify-center items-center p-4 gap-5 slide-in-elliptic-top-fwd">
            {buttons.map((button) => {
              return (
                <SidebarMobileButton
                  key={button.label}
                  pathname={button.pathname}
                  label={button.label}
                  svg={button.svg}
                  isRight={button.isRight}
                />
              );
            })}
          </aside>
        </div>
      )}
      <div className="hidden lg:block">
        <aside className="fixed bg-[#16161D] p-1.5 text-white border transform left-8 top-[50%] translate-y-[-50%] justify-between flex flex-col border-slate-100/5 rounded-full gap-5">
          {buttons.map((button) => {
            return (
              <LGButton
                pathname={button.pathname}
                svg={button.svg}
                key={button.label}
                isBordering={button.isBordering}
              />
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
