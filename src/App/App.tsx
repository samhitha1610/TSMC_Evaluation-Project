import React, { useState } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Code2/Code2";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";
import { TodoType } from "../types/types";
import Footer from "../components/Code1/Code1";

function App() {
  // Todos
  let [todos, setTodos] = useState<TodoType[]>([
    { title: "Let's Begin", completed: false, important: false},
  ]);

  // Selected Filter
  let [selectedFilter, setSelectedFilter] = useState("all");
  let todosToShow: TodoType[] = [];

  if (selectedFilter === "completed" || selectedFilter === "important") 
  {
    todosToShow = todos.filter((item) => item["completed"] === true);
  } 
  else if (selectedFilter === "incomplete") 
  {
    todosToShow = todos.filter((item) => item["completed"] === false);
  } 
  else 
  {
    todosToShow = todos;
  }

  // Add Todo
  const addTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };

  // Remove Todo
  const removeTodo = (todo: TodoType) => {
    const newTodos = todos.filter((item) => item !== todo);
    // console.log(newTodos);
    setTodos(newTodos);
  };

  // ChangeClass
  const changeClass = (todo: TodoType, value: any) => {
    console.log("change to", value);
    const newTodos = todos.map((item) => {
      if (item === todo) {
        return { ...item, completed: value };
      } else {
        return item;
      }
    });

    setTodos(newTodos);
  };

  // Apply Filter
  const applyFilter = (value: React.SetStateAction<string>) => {
    setSelectedFilter(value);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Title value="My ToDo's" />
      </header>
      <Form addTodo={addTodo} applyFilter={applyFilter} />
      <TodoList
        todos={todosToShow}
        changeClass={changeClass}
        removeTodo={removeTodo}
      />
      <Footer />
    </div>
  );
}

export default App;