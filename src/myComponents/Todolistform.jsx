import Todolist from "./Todolist.jsx";

const Todolistform = ({ todolist, iswork, setTodolist }) => {
  return (
    <>
      <div id={iswork ? "done-box" : "working-box"}>
        <div className={iswork ? "done-title" : "working-title"}>
          <h3>{iswork ? "🎉 Done List 🎉" : "🔥 Working List 🔥"}</h3>
        </div>
        <Todolist
          todolist={todolist}
          iswork={iswork}
          setTodolist={setTodolist}
        />
      </div>
    </>
  );
};

export default Todolistform;
