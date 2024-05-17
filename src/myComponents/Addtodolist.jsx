import { useState } from "react";
import { nanoid } from "nanoid";

const Addtodolist = ({ setTodolist, todolist }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert("빈항목 있으면 안됩니다!");
      return;
    }
    const newContents = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    setTodolist([...todolist, newContents]);
    setTitle("");
    setContent("");
  };
  return (
    <>
      <form id="todo-input-box" onSubmit={onChangeHandler}>
        <div className="input-value">
          <label htmlFor="sub-title">제목</label>
          <input
            id="todo-title"
            type="text"
            maxLength={8}
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
          <button type="submit">추가하기</button>
        </div>
      </form>
    </>
  );
};

export default Addtodolist;
