function Todolist({ todolist, iswork, setTodolist }) {
  const toggleBtn = (itemId) => {
    const updateTodolist = todolist.map((item) => {
      return item.id === itemId ? { ...item, isDone: !item.isDone } : item;
    });
    setTodolist(updateTodolist);
  };

  const delBtn = (itemId) => {
    const updateTodolist = todolist.filter((item) => item.id !== itemId);

    setTodolist(updateTodolist);
  };
  return (
    <>
      <ul>
        {todolist
          .filter((item) => (iswork ? item.isDone : !item.isDone))
          .map((item) => (
            <li
              id={item.id}
              key={item.id}
              style={
                item.isDone ? { borderColor: "green" } : { borderColor: "red" }
              }
            >
              <h3>{item.title}</h3>
              <div className="content-box">
                <p>{item.content}</p>
              </div>
              <div className="control-box">
                <button
                  className="del-btn"
                  onClick={() => {
                    delBtn(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  className="com-btn"
                  onClick={() => {
                    toggleBtn(item.id);
                  }}
                >
                  {item.isDone ? "취소" : "완료"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todolist;
