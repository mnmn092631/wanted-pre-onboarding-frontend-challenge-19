import { Action } from "@reduxjs/toolkit";

export interface TodoItem {
  id: number;
  todo: string;
}

export type State = TodoItem[];
type AddTodoAction = Action<"@todo/addTodo"> & { payload: TodoItem };
type DeleteTodoAction = Action<"@todo/deleteTodo"> & { payload: number };
type Actions = AddTodoAction | DeleteTodoAction;

export const addTodo = (payload: TodoItem) => ({
  type: "@todo/addTodo",
  payload,
});
export const deleteTodo = (payload: number) => ({
  type: "@todo/deleteTodo",
  payload,
});

const initialState: State = [{ id: 1, todo: "원티드 사전과제 하기" }];

export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case "@todo/addTodo":
      return [...state, action.payload];
    case "@todo/deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
