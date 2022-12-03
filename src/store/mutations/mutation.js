import { v4 as uuidv4 } from "uuid";
import { selectNotCompleted } from "../getters/getters";

export const todoMutations = {
  loadTodo: (state, { todos }) => (state.todos = todos),
  addTodo: (state, { title }) =>
    (state.todos = [...state.todos, { id: uuidv4(), title, completed: false }]),
  updateTodo: (state, values) =>
    (state.todos = state.todos.map((todo) =>
      todo.id === values.id ? { ...todo, ...values } : todo
    )),
  removeTodo: (state, { id }) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  filterSelect: (state, { filter }) => (state.filter = filter),
  clearCompleted: (state) => (state.todos = selectNotCompleted(state.todos)),
  SET_DARK: (state, bool) => (state.dark = bool),
};
