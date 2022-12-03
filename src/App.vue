<template>
  <div class="app">
    <div class="todo-container">
      <header class="header">
        <h1>TODO</h1>
        <div class="mode">
          <img src="./assets/ICON-MOON.SVG" v-if="dark" @click="toggle" />
          <img src="./assets/ICON-SUN.SVG" v-else @click="toggle = !toggle" />
        </div>
      </header>
      <main>
        <TodoInput />
        <TodoList v-if="todosLength" />
        <TodoFooter v-if="todosLength" />
      </main>
    </div>
  </div>
</template>

<script>
import { useStore, mapGetters, mapMutations } from "vuex";
import { onMounted, watchEffect, computed } from "vue";
import TodoInput from "./components/TodoInput/TodoInput.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import TodoFooter from "./components/TodoFooter/TodoFooter.vue";
import { storage } from "./Storage/storage";

export default {
  components: {
    TodoInput,
    TodoList,
    TodoFooter,
  },
  setup() {
    const store = useStore();
    const toggle = mapMutations(["SET_DARK"]);
    onMounted(() => {
      store.dispatch("loadTodo", storage.LoadTodos());
      watchEffect(() => {
        storage.StoreTodos(store.state.todos);
      });
    });
    const dark = computed(() => mapGetters(["dark"]));

    return {
      todosLength: computed(() => store.state.todos.length),
      dark,
      toggle,
    };
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
