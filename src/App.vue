<template>
  <div class="app">
    <div class="todo-container">
      <header class="header">
        <h1>TODO</h1>
        <img src="./assets/ICON-MOON.SVG" />
      </header>
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, watchEffect, computed } from "vue";
import TodoInput from "./components/TodoInput/TodoInput.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import { storage } from "./Storage/storage";

export default {
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("loadTodo", storage.LoadTodos());
      watchEffect(() => {
        storage.StoreTodos(store.state.todos);
      });
    });
    return {
      todosLength: computed(() => store.state.todos.length),
    };
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
