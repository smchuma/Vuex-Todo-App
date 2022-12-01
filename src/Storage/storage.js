const STORAGE_KEY = "vue-todo-app";

export class storage {
  static LoadTodos() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  }

  static StoreTodos(todos) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}
