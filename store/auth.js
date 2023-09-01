export default {
  namespaced: true,

  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async signUp({ commit }, user) {
      try {
        const response = await this.$axios.$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKEY}`,
          user
        );
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ commit }, user) {
      try {
        const response = await this.$axios.$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKEY}`,
          user
        );

        const token = response.idToken;

        commit("SET_TOKEN", token);
        localStorage.setItem("token", JSON.stringify(token));

        console.log(response, "loggedin");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};
