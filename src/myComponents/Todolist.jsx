function Todolist({ item, complet, del, cansel }) {
  return (
    <li
      id={item.id}
      style={item.isDone ? { borderColor: "green" } : { borderColor: "red" }}
    >
      <h3>{item.title}</h3>
      <div className="content-box">
        <p>{item.content}</p>
      </div>
      <div className="control-box">
        <button className="del-btn" onClick={del}>
          삭제
        </button>
        <button className="com-btn" onClick={item.isDone ? cansel : complet}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default Todolist;
