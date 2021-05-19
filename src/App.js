import getDay from "./libs/getDay";
import "./styles/App.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const day = getDay();
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const t = JSON.parse(localStorage.getItem("todos")) || [];
      if(t.length > 0)
        setTodos([...t]);
    }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const pushTodo = ({ todo, desc }) => {
    setTodos([
      ...todos,
      { id: Date.now(), todo, desc, completed: false, removed: false },
    ]);
  };

  console.log(todos);
  return (
    <div className="app">
      <h1 className="app__header">My ToDos</h1>
      <p className="app__info">Whoop, it's {day} 🌝 ☕ </p>
      <Form pushTodo={pushTodo} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
