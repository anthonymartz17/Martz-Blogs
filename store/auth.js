import cookie from "js-cookie";

export default {
  namespaced: true,

  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
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
    async signIn({ commit, dispatch }, user) {
      try {
        const response = await this.$axios.$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKEY}`,
          user
        );

        const token = response.idToken;
        const tokenExpiration =
          new Date().getTime() + response.expiresIn * 1000;

        commit("SET_TOKEN", token);
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", tokenExpiration);
        cookie.set("jwt", token);
        cookie.set("tokenExpiration", tokenExpiration);
        
        dispatch("setTimerLogOut", response.expiresIn);
        console.log(response, "loggedin");
      } catch (error) {
        console.log(error);
      }
    },
    autoLogin({ commit, dispatch }, request) {
      let token, tokenExpiration;
      
      if (request) {
        if (!request.headers.cookie) {
          return;
        }
        //extract the token and tokenExpiration from the cookie
        //after the find found element is trimmed so the startsWith method can be used, other wise if there is space at the start of the string, the startwith wont find the element by the condition, because it starts with empty space not the specified condition.  if not trimmed at this point, the includes method can be used instead of the startsWith, and then the element can be trimmed later.
        token = request.headers.cookie
          .split(";")
          .find((x) => x.trim().startsWith("jwt"))
          .split("=")[1];

        tokenExpiration = request.headers.cookie
          .split(";")
          .find((x) => x.trim().startsWith("tokenExpiration"))
          .split("=")[1];

        if (!token) {
          return;
        }
      } else {
        token = localStorage.getItem("token");
        tokenExpiration = localStorage.getItem("tokenExpiration");
      }
      if (new Date().getTime() > +tokenExpiration || !token) {
        return;
      } else {
        dispatch("setTimerLogOut", +tokenExpiration - new Date().getTime());
        commit("SET_TOKEN", token);
      }
    },
    setTimerLogOut({ commit }, expiration) {
      setTimeout(() => {
        commit("CLEAR_TOKEN");
      }, expiration * 1000);
    },
  },
  getters: {
    isAuthenticated: (state) => state.token != null,
  },
};
