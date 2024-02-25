import { useDispatch } from "react-redux";
import { deleteTodo, TodoItem } from "../store/todo";

interface Props {
  item: TodoItem;
}
export default function ListItem({ item }: Props) {
  const dispatch = useDispatch();

  const { id, todo } = item;
  const onDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <span>{todo}</span>
      <button onClick={onDelete}>delete</button>
    </li>
  );
}
