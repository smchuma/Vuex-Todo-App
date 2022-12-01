<template>
  <div class="view" key="todo.id">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="handleCompleted"
    />
    <label>{{ todo.title }}</label>
    <button class="remove">
      <img src="../../assets/ICON-CROSS.SVG" alt="cross" @click="removeTodo" />
    </button>
  </div>
  <input class="edit" />
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  setup(props, { emit }) {
    const removeTodo = () => emit("remove", props.todo.id);
    const handleCompleted = () =>
      emit("update", { id: props.todo.id, completed: !props.todo.completed });

    return {
      removeTodo,
      handleCompleted,
    };
  },
};
</script>

<style lang="scss" scoped></style>
