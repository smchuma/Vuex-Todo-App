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
import TodoInput from "./components/TodoInput/TodoInput.vue";
import TodoList from "./components/TodoList/TodoList.vue";

export default {
  components: {
    TodoInput,
    TodoList,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
