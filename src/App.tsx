import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";
import List from "./components/List";
import TodoInput from "./components/TodoInput";
import "./styles/main.scss";

function App() {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <main>
        <TodoInput />
        <List />
      </main>
    </ReduxProvider>
  );
}

export default App;
