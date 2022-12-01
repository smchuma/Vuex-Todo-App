<template>
  <div class="container">
    <ul class="todo-list">
      <li
        v-for:="todo in visibleTodos"
        :class="{ completed: todo.completed, editing: editing }"
      >
        <ListItem :todo="todo" @remove="removeTodo" @update="updateTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ListItem from "../List/ListItem.vue";
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
    const completeAll = () => store.dispatch("completeAll");
    return {
      visibleTodos: computed(() => store.getters.visibleTodos),
      areAllCompleted: computed(() => store.getters.areAllCompleted),
      removeTodo,
      updateTodo,
      completeAll,
    };
  },
};
</script>
<style lang="scss">
@import "./TodoList.scss";
</style>
