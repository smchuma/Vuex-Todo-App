<template>
  <div class="todo-footer">
    <span class="count"> {{ itemsLeft }} items left </span>
    <ul class="btn">
      <li v-for="filterTitle in filterTitles" :key="filterTitle.key">
        <a
          href="./#"
          :class="{ selected: filterTitle.key === filter }"
          @click="handleSelect(filterTitle.key)"
          >{{ filterTitle.value }}</a
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
    const handleSelect = (filter) => store.dispatch("filterSelect", filter);

    return {
      filterTitles,
      filter: computed(() => store.state.filter),
      itemsLeft: computed(() => store.getters.itemsLeft),
      completedCount: computed(() => store.getters.completedCount),
      itemText: computed(() =>
        store.getters.itemsLeft === 1 ? " item" : " items"
      ),
      handleComplete,
      handleSelect,
    };
  },
};
</script>
<style lang="scss">
@import "./ToDoFooter.scss";
</style>
