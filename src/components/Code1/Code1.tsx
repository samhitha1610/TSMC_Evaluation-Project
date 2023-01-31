import React from "react";
import classes from "./code1.module.css";
import {FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <h3>
          Samhitha <span>Yalamanchili</span>
        </h3>
        <div className={classes.icons}>
          
          <a href="https://www.linkedin.com/in/yalamanchili-samhitha-a2153b209/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;