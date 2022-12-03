import { createStore as createVuexStore } from "vuex";
import { getters } from "./getters/getters";

import { todoMutations } from "./mutations/mutation";

import { todoActions } from "./actions/actions";

const mutations = {
  ...todoMutations,
};

const actions = {
  ...todoActions,
};

export const store = (state = { todos: [], filter: "All", dark: false }) =>
  createVuexStore({ state, actions, mutations, getters });
