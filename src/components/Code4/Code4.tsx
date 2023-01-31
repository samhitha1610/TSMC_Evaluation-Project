import React from "react";
import classes from "./code4.module.css";
import { FilterPropsType } from "../../types/types";

const FormFilter: React.FC<FilterPropsType> = ({ applyFilter }) => {
  return (
    <div className={classes.select}>
      <select
        name="Todo Lists"
        className={classes.filterTodo}
        onChange={(e) => {
          applyFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Checked</option>
        <option value="incomplete">unchecked</option>
        <option value="important">Important</option>
      </select>
    </div>
  );
};

export default FormFilter;