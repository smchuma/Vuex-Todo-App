<template>
  <div class="heading">
    <div class="input">
      <img src="../../assets/FAVICON-32X32.PNG" alt="" />
      <input
        type="text"
        placeholder="Create a new todo"
        :value="title"
        @input="handleChange"
        @keydown="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  name: "TodoInput",

  setup() {
    const store = useStore();
    const state = reactive({
      title: "",
    });
    const handleChange = (e) => (state.title = e.target.value);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.key !== "enter") {
        return;
      }
      store.dispatch("addTodo", state.title);
      state.title = "";
    };
    return {
      ...toRefs(state),
      handleChange,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss">
@import "./TodoInput.scss";
</style>
