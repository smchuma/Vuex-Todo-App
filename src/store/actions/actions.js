export const todoActions = {
  loadTodo: ({ commit }, todos) => commit("load", { todos }),
  addTodo: ({ commit }, title) => commit("add", { title }),
  removeTodo: ({ commit }, id) => commit("remove", { id }),
  updateTodo: ({ commit }, payload) => commit("update", payload),
  completeAll: ({ commit }) => commit("completeAll"),
  clearCompleted: ({ commit }) => commit("clearCompleted"),
};
