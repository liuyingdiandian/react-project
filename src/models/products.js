export default {
  namespace: "products",
  //   state: [],
  state: {},
  subscriptions: {},
  // async
  effects: {},
  // sync
  reducers: {
    delete(state, { payload: id }) {
      return state.filter((item) => item.id !== id);
    },
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
