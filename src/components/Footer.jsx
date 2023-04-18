import React from "react";
import styles from "../styles";
import icon3 from "../assets/nav-icon3.svg";
import git from "../assets/git.png";

const Footer = () => {
  return (
    <div
      className={`flex flex-col gap-4 justify-between sm:flex-row items-center ${styles.paddingY} ${styles.paddingX} text-white`}
    >
      <h1 className="font-bold text-[50px]">YASH</h1>
      <div className="flex flex-row gap-4 items-center">
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
        <a href="https://twitter.com/yashj_069" target="_blank">
          <div className="flex items-center justify-center border-[2px] rounded-full h-[38px] w-[38px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <i class="fa-brands fa-twitter fa-lg"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/yashjindal09/" target="_blank">
          <button className="border-white border-[2px] rounded-full hover:bg-black w-[38px] h-[38px] items-center pl-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={icon3} className=" w-[18px] h-[18px] ml-1" />
          </button>
        </a>
      </div>
      <p className="text-[22px]">Made with ❤️ by Yash</p>
    </div>
  );
};

export default Footer;
