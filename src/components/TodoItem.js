import moment from "moment";
import "../styles/TodoItem.css";

function TodoItem({
  id,
  todo,
  desc,
  completed,
  removed,
  toggleCompleted,
  toggleRemoved,
}) {
  const d = new Date(id);
  console.log("time", `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`);

  const date = moment(d).format("DD/MM/YYYY h:mm:ss a");

  return (
    <div className="todoItem">
      <div
        className={completed ? "todoItem__info completed" : "todoItem__info"}
      >
        <h1>
          {todo}
          <span className="time">{date}</span>
        </h1>

        <p>{desc}</p>
      </div>

      {!removed && (
        <div className="todoItem__btnContainer">
          <button onClick={() => toggleCompleted(id)} className="btn__complete">
            {completed ? `Uncomplete` : `Completed`}
          </button>
          <button onClick={() => toggleRemoved(id)} className="btn__delete">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
