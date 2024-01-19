import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <>
      <li>
        <input
          type="checkbox"
          id="checkbox"
          checked={status === "completed"}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">{text}</label>
        <button onClick={handleDelete}>
          <FaRegTrashCan />
        </button>
      </li>
    </>
  );
}
