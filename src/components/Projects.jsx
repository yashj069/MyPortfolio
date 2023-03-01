import React from "react";
import styles from "../styles";
import degen from "../assets/degen.png";
import happy from "../assets/happy1.jpg";
import happy1 from "../assets/happy.jpg";
import gpt3 from "../assets/gpt3.png";
import theme from "../assets/theme.png";
import git from "../assets/git.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`flex text-white checkgradient ${styles.paddingX} ${styles.paddingY} w-full`}
    >
      <div className="flex flex-col justify-between gap-10 items-center">
        <h1 className="text-[50px] font-semibold">Projects</h1>

        <div
          className={`flex flex-col justify-between items-center gap-20 xs:gap-40 ${styles.paddingY}`}
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
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/yashj069/DegenRun4" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={git} className="w-[25px] absolute ml-6" />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-full">
            <div className="flex flex-col items-center sm:w-1/2 gap-4">
              <h1 className="text-[40px] xs:text-[50px] font-semibold">
                GPT-3
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                GPT-3 is a Modern UI/UX Website. Made with ReactJS and
                TailwindCSS.
              </p>
              <div className="flex flex-row gap-4">
                <a href="https://chat-gpt-3-web.vercel.app/" target="_blank">
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    DEMO
                  </button>
                </a>
                <a
                  href="https://github.com/yashj069/ChatGPT3Web"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={git} className="w-[25px] absolute ml-6" />
                    <h1 className="ml-2 text-center">CODE</h1>
                  </button>
                </a>
              </div>
            </div>
            <img
              src={gpt3}
              alt="degen"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full">
            <img
              src={happy1}
              alt="degen"
              className="sm:w-1/2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer bg"
            />
            <div className="flex flex-col items-center sm:w-1/2 gap-4">
              <h1 className="text-[35px] xs:text-[50px] font-semibold">
                Happy Community
              </h1>
              <p className="text-[24px] text-center sm:w-[80%]">
                Happy Community is a website to bring people closer via
                different Communities. Made with React.
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="https://happy-community-40e8f.web.app/"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    DEMO
                  </button>
                </a>
                <a
                  href="https://github.com/yashj069/Happy_Community_BTP"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={git} className="w-[25px] absolute ml-6" />
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
                    DEMO
                  </button>
                </a>
                <a
                  href="https://github.com/yashj069/Theme-Swicher"
                  target="_blank"
                >
                  <button className="rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[150px] h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={git} className="w-[25px] absolute ml-6" />
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

        {/* <div className="flex flex-row flex-wrap justify-between gap-4 ml-10 sm:ml-0">
          <div class="max-w-sm rounded overflow-hidden  shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <img class="w-full" src={degen} alt="img1" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Degen Run</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <img class="w-full h-[50%]" src={gpt3} alt="img1" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">GPT-3</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <img class="w-full h-[50%]" src={happy} alt="img1" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Happy Community
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <img class="w-full h-[50%]" src={theme} alt="img1" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">
                Theme Switcher
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
