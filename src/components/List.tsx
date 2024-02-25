import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { AppState } from "../store";

export default function List() {
  const todoList: AppState["todo"] = useSelector(
    (state: AppState) => state.todo,
  );

  return (
    <ol className="todoList">
      {todoList.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ol>
  );
}
