"use client";

import React from "react";

export function Vision() {
  return (
    <section id="vision" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold text-black sm:text-6xl"
              id="why-join"
            >
              Why Join XueDAO?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a member of XueDAO, you'll have access to a wide range of
              resources and benefits designed to help you succeed in the world
              of Web3.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:mt-20 ">
          <a className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-600 hover:shadow-xl">
            <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-blue-600/50  transition-all duration-200   group-hover:w-1/2 group-hover:bg-white" />
            <div className="relative px-9 py-2  ">
              <svg
                className="h-16 w-16 fill-gray-400 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="polo-tshirt"
              >
                <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z"></path>
                <path d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z"></path>
              </svg>
              <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Education
              </h3>
              <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                Access to educational resources and workshops on blockchain and
                Web3 technologies.
              </p>
            </div>
          </a>
          <a className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-600 hover:shadow-xl">
            <div className="absolute left-0 top-0 z-30 h-1 w-24 bg-blue-600/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-white" />
            <div className="relative px-9 py-2  ">
              <svg
                className="h-16 w-16 fill-gray-400 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 64 64"
                viewBox="0 0 64 64"
                id="furniture"
              >
                <path d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"></path>
              </svg>
              <h2 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Networking
              </h2>
              <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                {" "}
                Connect with other students and professionals in the Web3 space.
              </p>
            </div>
          </a>

          <a className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-500 hover:shadow-xl">
            <div className="absolute left-0 top-0 z-30 h-1 w-24 bg-blue-600/50 transition-all duration-200 group-hover:w-1/2 group-hover:bg-white" />
            <div className="relative px-9 py-2  ">
              <svg
                className="h-16 w-16 fill-gray-400 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="engine"
              >
                <path d="M60,34H56a1,1,0,0,0-1,1v3H52V28a1,1,0,0,0-1-1H47.51l-4.7-6.58A1,1,0,0,0,42,20H35V17h3a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3H24a1,1,0,0,0-.81.42L18.49,27H13a1,1,0,0,0-1,1V38H9V35a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V44h3v5a1,1,0,0,0,1,1H24.59l2.7,2.71A1,1,0,0,0,28,53H48a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,52,49V44h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35A1,1,0,0,0,60,34ZM35.77,37.64l-5,6A1,1,0,0,1,30,44a1,1,0,0,1-.64-.23,1,1,0,0,1-.13-1.41L32.87,38H29a1,1,0,0,1-.77-1.64l5-6a1,1,0,0,1,1.54,1.28L31.13,36H35a1,1,0,0,1,.77,1.64Z"></path>
              </svg>
              <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Governance
              </h3>
              <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                Participate in the decision-making process of Xue DAO.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
