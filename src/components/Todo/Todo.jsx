import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaRegTrashCan />
        </button>
      </span>
    </li>
  );
}
