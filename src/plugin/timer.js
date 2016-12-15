export default store => setInterval(() => {
  store.commit('RECIPROCAL_TIME');
}, 1000);
