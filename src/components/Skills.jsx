import React from "react";
import styles from "../styles";
import rea from "../assets/react.svg";
import js from "../assets/js.svg";
import unity from "../assets/unity.png";
import css from "../assets/css.png";
import html55 from "../assets/html5.png";
import cpp from "../assets/c++.png";
const Skills = () => {
  return (
    <section
      id="skills"
      className={`flex text-white gradientx ${styles.paddingX} ${styles.paddingY} w-full`}
    >
      <div className="flex flex-col justify-between gap-10 items-center">
        <h1 className="text-[50px] font-semibold">Skills</h1>
        <p className="text-start xs:w-[70%] xs:text-center">
          Having the ability to adapt to changes, keeping team morale up, and
          not giving up when life becomes difficult are some of my key
          strengths. Currently, I'm seeking opportunities that will allow me to
          develop and promote technologies that can add value to people's lives
          by building software products. I am open to mentors, guides, friends,
          and potential co-founders to upskill my network and add value to my
          career. I am also looking forward to collaborating on projects and
          learning new skills.
        </p>

        <div className="flex flex-row flex-wrap flex-1 justify-between gap-0 xs:gap-8 items-center">
          <img
            src={html55}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={css}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={js}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={rea}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={unity}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <img
            src={cpp}
            alt="css"
            className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
