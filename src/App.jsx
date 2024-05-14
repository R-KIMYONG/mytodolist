import { useState } from "react";
import "./App.css";

import Todolist from "./myComponents/Todolist";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let onChangeHandler = () => {
    if (!title) {
      alert("제목을 입력하세요");
      return;
    } else if (!content) {
      alert("내용을 입력하세요");
      return;
    }
    let newContents = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodo([...todo, newContents]);
    setTitle("");
    setContent("");
    document.querySelector("#todo-title").value = "";
    document.querySelector("#todo-value").value = "";
  };
  let complet = (event) => {
    let completId = event.target.parentNode.parentNode.id;

    let updateTodolist = todo.map((item) => {
      return item.id === Number(completId) ? { ...item, isDone: true } : item;
    });
    setTodo(updateTodolist);
  };
  let cansel = (event) => {
    let completId = event.target.parentNode.parentNode.id;

    let updateTodolist = todo.map((item) => {
      return item.id === Number(completId) ? { ...item, isDone: false } : item;
    });

    setTodo(updateTodolist);
  };
  let delBtn = (event) => {
    let completId = event.target.parentNode.parentNode.id;

    let updateTodolist = todo.filter((item) => item.id != Number(completId));

    setTodo(updateTodolist);
  };

  return (
    <div id="main">
      <header>
        <div id="main-title">
          <h3>My Todo List</h3>
        </div>
        <div id="logo">
          <img src="./public/logo.png" alt="logo" />
        </div>
        <div id="library">
          <h3>React</h3>
        </div>
      </header>
      <div id="todo-input-box">
        <div className="input-value">
          <label htmlFor="sub-title">제목</label>
          <input
            id="todo-title"
            type="text"
            maxLength={15}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <label htmlFor="sub-value">내용</label>
          <input
            id="todo-value"
            type="text"
            maxLength={35}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <div className="add-btn">
          <button onClick={onChangeHandler}>추가하기</button>
        </div>
      </div>
      <div id="working-box">
        <div className="working-title">
          <h3>Working..🔥</h3>
        </div>
        <ul>
          {todo
            .filter((item) => !item.isDone)
            .map((item, index) => {
              return (
                <Todolist
                  item={item}
                  key={index}
                  complet={complet}
                  del={delBtn}
                  cansel={cansel}
                />
              );
            })}
        </ul>
      </div>
      <div id="done-box">
        <div className="done-title">
          <h3>Done..🎉</h3>
        </div>
        <ul>
          {todo
            .filter((item) => item.isDone == true)
            .map((item, index) => {
              return (
                <Todolist
                  item={item}
                  key={index}
                  complet={complet}
                  del={delBtn}
                  cansel={cansel}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
