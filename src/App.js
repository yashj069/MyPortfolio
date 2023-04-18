import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import styles from "./styles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="bg-primary w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
