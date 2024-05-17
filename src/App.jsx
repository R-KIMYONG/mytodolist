import { useState } from "react";
import "./App.css";
import logoImg from "../public/assets/logo.png";
import Addtodolist from "./myComponents/Addtodolist.jsx";
import Todolistform from "./myComponents/Todolistform.jsx";

const App = () => {
  const [todolist, setTodolist] = useState([]);

  return (
    <div id="main">
      <header>
        <div id="main-title">
          <h3>My Todo List</h3>
        </div>
        <div id="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div id="library">
          <h3>React</h3>
        </div>
      </header>
      <Addtodolist setTodolist={setTodolist} todolist={todolist} />
      <Todolistform
        todolist={todolist}
        iswork={false}
        setTodolist={setTodolist}
      />
      <Todolistform
        todolist={todolist}
        iswork={true}
        setTodolist={setTodolist}
      />
    </div>
  );
};

export default App;
