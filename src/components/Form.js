import React, { useState } from "react";
import "../styles/Form.css";

function Form({ pushTodo }) {
  const [todoInput, setTodoInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const addButtonHandler = (e) => {
    e.preventDefault();
    if (!todoInput || !descInput) return;
    pushTodo({ todo: todoInput, desc: descInput });
    setTodoInput("");
    setDescInput("");
  };

  return (
    <form className="form container">
      <label className="form__label">
        Todo
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="form__input"
          type="text"
        />
      </label>
      <label className="form__label">
        Description
        <input
          value={descInput}
          onChange={(e) => setDescInput(e.target.value)}
          className="form__input"
          type="text"
        />
      </label>
      <button className="form__button" onClick={addButtonHandler} type="submit">
        Add ToDo
      </button>
    </form>
  );
}

export default Form;
