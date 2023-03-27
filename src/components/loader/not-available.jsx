import React from "react";
import classes from "./spinner.module.css";
const NotAvailable = () => {

  return (
    <div
      className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 z-10 flex flex-col  items-center justify-center "
      style={{
        zIndex: 100,
      }}
    >
      <h1 className="text-black translate-y-[220px] font-medium tracking-wide ">
        I'll be making the social media Demo Project here!
      </h1>
      <div className={classes.loader}>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
      </div>
    </div>
  );
};

export default NotAvailable;
