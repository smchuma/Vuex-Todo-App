import { v4 as uuidv4 } from "uuid";
import { selectCompleted, selectNotCompleted } from "../getters/getters";

const areAllCompleted = (state) =>
  state.length && selectCompleted(state).length === state.length;

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
  completeAll: (state) => {
    state.todos = state.todos.map((todo) => ({
      ...todo,
      ...{ completed: !areAllCompleted(state) },
    }));
  },
  clearCompleted: (state) => (state.todos = selectNotCompleted(state.todos)),
};
