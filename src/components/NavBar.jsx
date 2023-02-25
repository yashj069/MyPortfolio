import React, { useState } from "react";
import styles from "../styles";
import icon3 from "../assets/nav-icon3.svg";
import git from "../assets/git.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.flexStart} ${styles.paddingX} w-full py-5 flex flex-row text-white justify-between items-center `}
    >
      <h1 className="font-bold text-[30px] pr-2 xs:pr-0 xs:block hidden">
        YASH
      </h1>
      <h1 className="font-bold text-[30px] xs:pr-0 xs:hidden block">YJ</h1>
      <div className="sm:flex hidden flex-row justify-between text-[24px] gap-6 cursor-pointer">
        <a
          href="#home"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Home
        </a>
        <a
          href="#skills"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Projects
        </a>
      </div>

      <div className="flex flex-row gap-2 xs:gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/yash-jindal-046321192/"
          target="_blank"
        >
          <button className="border-white border-[2px] rounded-full  hover:bg-white hover:text-black w-[38px] h-[38px] items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <h2 className="font-bold text-[20px] ">in</h2>
          </button>
        </a>
        <a href="https://github.com/yashj069" target="_blank">
          <img
            src={git}
            className=" w-[38px] h-[38px] ml-1 bg-white rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </a>
        <a href="https://www.instagram.com/yashjindal09/" target="_blank">
          <button className="border-white border-[2px] rounded-full hover:bg-black w-[38px] h-[38px] items-center pl-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={icon3} className=" w-[18px] h-[18px] ml-1" />
          </button>
        </a>
        <a href="#contacts">
          <button className="transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[80px] h-[40px] xs:w-[150px] xs:h-[60px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="text-[11px] xs:text-[18px]">Let's Connect</p>
          </button>
        </a>
      </div>
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4
        my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex text-[20px] flex-col justify-end items-center cursor-pointer">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
