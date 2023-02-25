import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import styles from "../styles";
import contactimg from "../assets/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();

  const [fname, setfname] = useState("");
  const [msg, setmsg] = useState("");
  const [err, seterr] = useState("");
  const [errmsg, seterrmsg] = useState(false);

  const fnameHandler = (e) => {
    e.preventDefault();
    setfname(e.target.value);
  };
  const msgHandler = (e) => {
    e.preventDefault();
    setmsg(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (fname.length === 0 || msg.length === 0) {
      seterr("Please fill the form correctly!");
      return;
    }
    emailjs
      .sendForm(
        "service_ws69e03",
        "template_s7yiqgo",
        form.current,
        "eXa-7imbti_CH8bbr"
      )
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
          toast.success("Sent Successfully");
          seterr("");
          setfname("");
          setmsg("");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section
      id="contacts"
      className={` skillsgradient ${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} w-full text-white`}
    >
      <ToastContainer />
      <div className="flex flex-col sm:flex-row gap-10 xs:gap-20">
        <img src={contactimg} alt="contacts" className="w-1/2 ml-24 sm:ml-0" />
        <div className="flex flex-col">
          <h1 className="font-bold text-[40px] text-center">Get in Touch</h1>
          <div className="flex flex-col justify-between mt-10 items-center">
            <form
              className="flex flex-col gap-2 items-center"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col xs:flex-row justify-between gap-2 xs:gap-4 items-center">
                <input
                  placeholder="First Name"
                  type="text"
                  name="fname"
                  onChange={fnameHandler}
                  className="rounded-2xl w-[120%] xs:w-full h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
                ></input>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lname"
                  className="rounded-2xl w-[120%] xs:w-full h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
                ></input>
              </div>
              <div className="flex flex-col xs:flex-row justify-between gap-2 xs:gap-4 items-center">
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  className="rounded-2xl w-[120%] xs:w-full h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
                ></input>
                <input
                  placeholder="Phone No."
                  type="number"
                  name="phone"
                  className="rounded-2xl w-[120%] xs:w-full  h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
                ></input>
              </div>
              <input
                placeholder="Message"
                name="msg"
                onChange={msgHandler}
                className="rounded-2xl h-[150px] w-[120%] xs:w-full pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
              ></input>

              <div className="flex flex-col xs:flex-row items-center gap-4 w-full px-2">
                <button
                  type="submit"
                  value="send"
                  className="bg-white text-black w-[150px] rounded-md h-[50px] hover:duration-200 hover:bg-black hover:text-white"
                >
                  Send
                </button>
                <div className="mt-3">{err}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
