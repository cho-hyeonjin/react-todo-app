import { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  // useState는 내부적으로 값을 기억하고 있을 뿐 변경된 값을 UI 렌더링에 반영하는 것은 또 다른 문제.
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage()); // 함수 호출한 값을 전달할 게 아니라, 콜백함수로 감써서 전달한다.
  //                                                                        그렇게 되면 useEffect를 사용할 때처럼 초기값이 필요한 경우에 초기에 한 번만 실행된다.
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilterdItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilterdItems(todos, filter) {
  return filter === "all"
    ? todos
    : todos.filter((todo) => todo.status === filter);
}
