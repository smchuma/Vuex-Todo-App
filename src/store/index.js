import { createStore as createVuexStore } from "vuex";
import { getters } from "./getters/getters";
import { FILTERS } from "../constants/filter";

import { todoMutations } from "./mutations/mutation";
import { filterMutations } from "./mutations/filter";

import { todoActions } from "./actions/todo";
import { filterActions } from "./actions/filter";

const mutations = {
  ...todoMutations,
  ...filterMutations,
};

const actions = {
  ...todoActions,
  ...filterActions,
};

export const createStore = (state = { todos: [], filter: FILTERS.all }) =>
  createVuexStore({ state, actions, mutations, getters });
