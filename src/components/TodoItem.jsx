import "./TodoItem.css";

export default function TodoItem({ onDelete, onComplete, item: item }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onComplete(item)}
      />
      <span className={item.completed ? "completed" : ""}>{item.todo}</span>
      <button onClick={() => onDelete(item)}>Удалить</button>
    </div>
  );
}
