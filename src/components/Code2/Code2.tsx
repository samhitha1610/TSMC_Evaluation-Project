import React, { useState } from "react";
import classes from "./code2.module.css";
import FormFilter from "../Code4/Code4";
import FormInput from "../Code5/Code5";
import { FormPropsType } from "../../types/types";

const Form: React.FC<FormPropsType> = ({ addTodo, applyFilter }) => {
  let [input, setInput] = useState({ title: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(input["title"] === "")) {
      addTodo({ ...input, completed: false }); // Add Todo
      setInput({ title: "" }); // Clear input
    } else {
      alert("Add some text");
    }
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <FormInput input={input["title"]} setInput={setInput} />
      <FormFilter applyFilter={applyFilter} />
    </form>
  );
};

export default Form;