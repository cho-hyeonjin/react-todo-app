import { useState } from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(filter)}>{filter}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
