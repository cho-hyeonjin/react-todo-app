import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((el, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === el && styles.selected}`}
              onClick={() => onFilterChange(el)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
