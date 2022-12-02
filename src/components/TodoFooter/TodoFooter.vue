<template>
  <div class="todo-footer">
    <span class="count"> {{ itemsLeft }} items left </span>
    <ul class="btn">
      <li class="active">
        <a
          href="#"
          class="all-btn"
          :class="{ selected: visibility == 'all' }"
          @click.prevent="visibility = 'all'"
          >All</a
        >
      </li>
      <li>
        <a
          href="#"
          class="active-btn"
          :class="{ selected: visibility === 'active' }"
          @click.prevent="visibility = 'active'"
          >Active</a
        >
      </li>
      <li>
        <a
          href="#"
          class="completed-btn"
          :selected="{ selected: visibility == 'completed' }"
          @click.prevent="visibility = 'completed'"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-btn" @click="handleComplete">Clear Completed</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ToDoFooter",
  props: ["clearCompleted", "itemLeft", "showActive", "showCompleted", ""],

  setup() {
    const store = useStore();

    const filterTitles = [
      { key: "All", value: "All" },
      { key: "Active", value: "Active" },
      { key: "Completed", value: "Completed" },
    ];
    const handleComplete = () => store.dispatch("clearCompleted");
    const filterSelect = (filter) => store.dispatch("filterSelect", filter);

    return {
      filterTitles,
      filter: computed(() => store.state.filter),
      itemsLeft: computed(() => store.getters.itemsLeft),
      completedCount: computed(() => store.getters.completedCount),
      itemText: computed(() =>
        store.getters.itemsLeft === 1 ? " item" : " items"
      ),
      handleComplete,
      filterSelect,
    };
  },
};
</script>
<style lang="scss">
@import "./ToDoFooter.scss";
</style>
