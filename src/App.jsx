import { useState } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem.jsx";

export function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    setTodos([...todos, { todo, completed: false }]);
    setTodo("");
  };

  const deleteTodo = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const completeTodo = (item) => {
    setTodos(
      todos.map((todo) =>
        todo === item ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((task) =>
    task.todo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Новая задача..."
      />
      <button onClick={addTodo}>Добавить</button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Поиск задач..."
        style={{ width: "100%" }}
      />

      {filteredTodos.map((item, index) => (
        <TodoItem
          key={index}
          onDelete={deleteTodo}
          onComplete={completeTodo}
          item={item}
        />
      ))}
    </div>
  );
}

export default TodoApp;
