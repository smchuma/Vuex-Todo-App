<template>
  <li :class="{ completed: todo.completed, editing: editing }">
    <div class="view" key="todo.id">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="handleCompleted"
      />
      <label @dblclick="EditTodo">{{ todo.title }}</label>
      <button class="remove">
        <img
          src="../../assets/ICON-CROSS.SVG"
          alt="cross"
          @click="removeTodo"
        />
      </button>
    </div>
    <input
      class="edit"
      v-if="editing"
      :value="todo.title"
      @input="handleChange"
      @keyup.enter="updateTodo"
    />
  </li>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoItem",
  props: ["todo"],

  setup(props, { emit }) {
    const editing = ref(false);

    const title = ref(props.todo.title);

    const removeTodo = () => emit("remove", props.todo.id);

    const handleCompleted = () =>
      emit("update", { id: props.todo.id, completed: !props.todo.completed });

    const EditTodo = () => (editing.value = true);

    const handleChange = (event) => (title.value = event.target.value);

    const updateTodo = () => {
      emit("update", { id: props.todo.id, title: title.value });
      editing.value = false;
    };

    return {
      removeTodo,
      handleCompleted,
      EditTodo,
      handleChange,
      updateTodo,
      editing,
    };
  },
};
</script>

<style lang="scss">
@import "./ListItem.scss";
</style>
