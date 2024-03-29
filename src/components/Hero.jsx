import React from "react";
import styles from "../styles";
import meter from "../assets/header-img.svg";
import dash1 from "../assets/circle-arrow-right-solid.svg";

const Hero = () => (
  <section
    id="home"
    className={`flex text-white w-full gradient-05 ${styles.paddingX} ${styles.paddingY}`}
  >
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-[30px] sm:text-[35px] text-center">
          Welcome to my Portfolio!
        </h1>
        <h1 className="text-[40px] sm:text-[60px] font-semibold text-center">
          Hi I'm Yash Jindal. I'm a Developer
        </h1>
        <p className="text-[16px] sm:text-[22px] leading-[28px] xs:leading-[33px] text-start ">
          I am a Final Year undergrad pursuing B.Tech in Computer Science from
          LNMIIT. I am passionate about technology and love to keep updated with
          the latest technology trends. I am currently developing modern UI/UX
          website using React.js, Next.js and TailwindCSS. I am also experienced
          in game designing.
          <br />
        </p>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-10">
          <a
            href="https://drive.google.com/file/d/1swbjJU0yu0vMNnTVFF8_wP1HpH7T1HRb/view?usp=share_link"
            target="_blank"
          >
            <button className=" mt-6 rounded-md transition border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[130px] h-[50px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              RESUME
            </button>
          </a>
          <a href="#contacts">
            <h2 className="flex flex-row gap-4 items-center mt-4 font-semibold text-[34px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              Let's Connect
              <img
                src={dash1}
                alt="arrow"
                className="w-[40px] h-[40px] mt-2 bg-white rounded-full"
              />
            </h2>
          </a>
        </div>
      </div>
      <img
        src={meter}
        className="mx-auto w-[300px] sm:w-1/3 floatimg mt-8 sm:mt-0 object-contain"
      />
    </div>
  </section>
);

export default Hero;
