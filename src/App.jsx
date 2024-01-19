import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
        // 전달하는 인수값 === 함수의 참조값인 경우 인수값 생략 가능 ∴ { setFilter } 로 표현 가능
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
