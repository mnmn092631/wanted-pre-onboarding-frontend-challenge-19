import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, TodoItem } from "../store/todo";

export default function TodoInput() {
  const dispatch = useDispatch();

  const idRef = useRef(2);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (!inputRef.current || !inputRef.current.value) return;

    const newTodo: TodoItem = {
      id: idRef.current++,
      todo: inputRef.current.value,
    };

    dispatch(addTodo(newTodo));
    inputRef.current.value = "";
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.code === "Enter" && !e.nativeEvent.isComposing) onAddTodo();
        }}
      />
      <button onClick={onAddTodo}>add</button>
    </div>
  );
}
