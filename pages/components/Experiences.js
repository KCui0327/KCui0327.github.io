import React from 'react';

export default function Experiences() {
  return (
    <div className="p-10 mb-12">
        <h3 className="text-3xl py-1 my-10">Experiences</h3>
        <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-cyan-500 sm:ring-8 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-800">Software Developer</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-800 italic">University of Toronto Aerospace Team (2022 - Present)</time>
                    <p className="text-base font-normal text-gray-500">Developing Python scripts for controlling the movement of Antenna Trackers.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-cyan-500 sm:ring-8 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-800">Lead Web Developer</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-800 italic">Skule Nite (2022 - Present)</time>
                    <p className="text-base font-normal text-gray-500">Coding and designing an event website with HTML, CSS, and JavaScript to engage over 1000+ users</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-cyan-500 sm:ring-8 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900">Lead Electronics Sensors Engineer</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-800 italic">University of Toronto Hyperloop Team (2022 - Present)</time>
                    <p className="text-base font-normal text-gray-500">Leading a team of 5 in programming (C++) and implementing 10 different sensors onto the hyperloop pod</p>
                </div>
            </li>
        </ol>
    </div>
  );
}
