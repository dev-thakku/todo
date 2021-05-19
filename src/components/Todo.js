import { useState } from "react";
import "../styles/Todo.css";
import TodoItem from "./TodoItem";

function Todo({ todos, setTodos }) {
  const [filterBy, setFilterBy] = useState("all");

  const toggleCompleted = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const toggleRemoved = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.removed = !todo.removed;
        }
        return todo;
      })
    );
  };
  return (
    <div className="todo container">
      <div className="todo__btnContainer">
        <button
          onClick={() => setFilterBy("all")}
          className={filterBy === "all" ? "todo__btn selected" : "todo__btn"}
        >
          All
        </button>
        <button
          onClick={() => setFilterBy("completed")}
          className={
            filterBy === "completed" ? "todo__btn selected" : "todo__btn"
          }
        >
          Completed
        </button>
        <button
          onClick={() => setFilterBy("removed")}
          className={
            filterBy === "removed" ? "todo__btn selected" : "todo__btn"
          }
        >
          Removed
        </button>
      </div>
      <main className="todo__container">
        {todos.length < 0 && (
          <center className="todo__noItems">
            <img src="/icons/no-items.svg" />
            <h2>No Items..</h2>
          </center>
        )}
        {filterBy === "all" &&
          todos
            .filter((todo) => !todo.removed)
            .map(({ id, ...todo }) => (
              <TodoItem
                key={id}
                id={id}
                toggleCompleted={toggleCompleted}
                toggleRemoved={toggleRemoved}
                {...todo}
              />
            ))}
        {filterBy === "completed" &&
          todos
            .filter((todo) => todo.completed && !todo.removed)
            .map(({ id, ...todo }) => (
              <TodoItem
                key={id}
                id={id}
                toggleCompleted={toggleCompleted}
                toggleRemoved={toggleRemoved}
                {...todo}
              />
            ))}

        {filterBy === "removed" &&
          todos
            .filter((todo) => todo.removed)
            .map(({ id, ...todo }) => (
              <TodoItem
                key={id}
                id={id}
                toggleCompleted={toggleCompleted}
                toggleRemoved={toggleRemoved}
                {...todo}
              />
            ))}
      </main>
    </div>
  );
}

export default Todo;
