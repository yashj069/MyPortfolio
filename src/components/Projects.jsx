import React from "react";
import styles from "../styles";
import degen from "../assets/degen.png";
import happy1 from "../assets/happy.jpg";
import theme from "../assets/theme.png";
import git from "../assets/git.png";
import metaverse from "../assets/metaverse2.png";
import sociopedia from "../assets/sociopedia1.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`flex text-white projectgradient ${styles.paddingX} ${styles.paddingY} w-full`}
    >
      <div className="flex flex-col justify-between gap-10 items-center">
        <h1 className="text-[50px] font-semibold">Projects</h1>

        <div
          className={`flex flex-col justify-between items-center gap-20 ${styles.paddingY}`}
        >
          <div className="flex flex-col sm:flex-row w-full">
            <img
              src={degen}
              alt="degen"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="flex flex-col items-center sm:w-1/2 gap-4">
              <h1 className="text-[40px] xs:text-[50px] font-semibold">
                Degen Run
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                Degen Run is a Web Game. Made with Unity3D and C# for scripting.
              </p>
              <div className="flex flex-row gap-4">
                <a href="https://degenrun.com/" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    LIVE
                  </button>
                </a>
                <a href="https://github.com/yashj069/DegenRun4" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      src={git}
                      alt="git"
                      className="w-[25px] absolute ml-6"
                    />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-full">
            <div className="flex flex-col items-center sm:w-1/2 gap-4 py-0 sm:py-10">
              <h1 className="text-[40px] xs:text-[50px] font-semibold">
                METAVERSE
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                METAVERSE is a Modern Next 13 Website With Framer Motion &
                Tailwind CSS.
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="https://metaverse-yashj069.vercel.app/"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    LIVE
                  </button>
                </a>
                <a href="https://github.com/yashj069/metaverse" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      src={git}
                      alt="git"
                      className="w-[25px] absolute ml-6"
                    />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>

            <img
              src={metaverse}
              alt="degen"
              href="https://metaverse-yashj069.vercel.app/"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full">
            <img
              src={sociopedia}
              alt="sociopedia"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer bg"
            />
            <div className="flex flex-col items-center sm:w-1/2 gap-4">
              <h1 className="text-[35px] xs:text-[50px] font-semibold">
                Sociopedia
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                Sociopedia is a social media app that allows users to connect
                with friends, view profiles, post pictures, and like posts. With
                a Dark mode feature to enhance user experience and provide a
                visually appealing interface
              </p>
              <div className="flex flex-row gap-4">
                <a href="https://sociopedia-eosin.vercel.app/" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    LIVE
                  </button>
                </a>
                <a
                  href="https://github.com/yashj069/Sociopedia_React"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      src={git}
                      alt="git"
                      className="w-[25px] absolute ml-6"
                    />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-full">
            <div className="flex flex-col items-center sm:w-1/2 gap-4">
              <h1 className="text-[40px] xs:text-[50px] font-semibold">
                Theme Switcher
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                TTheme Switcher is a Chrome Extension that will turn the current
                tab to dark mode if the page is already in light mode vica
                verca.
              </p>
              <div className="flex flex-row gap-4">
                <a>
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    LIVE
                  </button>
                </a>
                <a
                  href="https://github.com/yashj069/Theme-Swicher"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img
                      src={git}
                      alt="git"
                      className="w-[25px] absolute ml-6"
                    />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>
            <img
              src={theme}
              alt="degen"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
