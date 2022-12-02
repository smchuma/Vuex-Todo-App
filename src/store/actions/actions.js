export const todoActions = {
  loadTodo: ({ commit }, todos) => commit("loadTodo", { todos }),
  addTodo: ({ commit }, title) => commit("addTodo", { title }),
  removeTodo: ({ commit }, id) => commit("removeTodo", { id }),
  updateTodo: ({ commit }, payload) => commit("updateTodo", payload),
  completeAll: ({ commit }) => commit("completeAll"),
  clearCompleted: ({ commit }) => commit("clearCompleted"),
  filterSelect: ({ commit }, filter) => commit("filterSelect", { filter }),
};
