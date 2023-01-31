import classes from "./code3.module.css";
import { FaRegPlusSquare } from "react-icons/fa";
import React from "react";

const FormButton = () => {
  return (
    <button className={classes.todoBtn} type="submit">
      <FaRegPlusSquare />
    </button>
  );
};

export default FormButton