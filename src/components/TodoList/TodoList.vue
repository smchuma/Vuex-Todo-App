<template>
  <div class="container">
    <ul class="todo-list">
      <ListItem
        v-for:="todo in visibleTodos"
        :todo="todo"
        @remove="removeTodo"
        @update="updateTodo"
        :key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ListItem from "../ListItem/ListItem.vue";
export default {
  name: "TodoList",
  components: {
    ListItem,
  },
  setup() {
    const store = useStore();

    const removeTodo = (todoId) => store.dispatch("removeTodo", todoId);
    console.log("removeTodo", removeTodo);
    const updateTodo = (todo) => store.dispatch("updateTodo", todo);

    return {
      visibleTodos: computed(() => store.getters.visibleTodos),
      areAllCompleted: computed(() => store.getters.areAllCompleted),
      removeTodo,
      updateTodo,
    };
  },
};
</script>
<style lang="scss">
@import "./TodoList.scss";
</style>
