import React from "react";
import classes from "./code5.module.css";
import { FormInputPropsType } from "../../types/types";
import FormButton from "../Code3/Code3";

const FormInput: React.FC<FormInputPropsType> = ({ setInput, input }) => {
  return (
    <div className={classes.inputContainer}>
      <input
        type="text"
        className={classes.todoInput}
        value={input}
        maxLength={100}
        onChange={(e) => setInput({ title: e.target.value })}
      />
      <FormButton />
    </div>
  );
};

export default FormInput;