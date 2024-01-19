import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "리스트 뷰 구현하기", status: "active" },
    { id: "2", text: "삭제 기능 구현하기", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
