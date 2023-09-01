import vuex from "vuex";
import auth from "@/store/auth";
const createStore = () => {
  return new vuex.Store({
    modules: {
      auth,
    },
    state: {
      loadedPosts: [],
    },
    mutations: {
      SET_POSTS(state, payload) {
        state.loadedPosts = payload;
      },
      CREATE(state, payload) {
        state.loadedPosts.push(payload)
      },
      UPDATE_POST(state, payload) {
        state.loadedPosts.find((x) => {
          if (x.id == payload.id) {
            Object.assign(x, payload);
          }
        });
      },
    },
    actions: {
      async nuxtServerInit({ commit }, context) {
        try {
          const res = await this.$axios.$get(`/posts.json`);
          const posts = [];
          for (const key in res) {
            posts.push({ id: key, ...res[key] });
          }

          commit("SET_POSTS", posts);
        } catch (error) {
          context.error(error);
        }
      },
      // setPosts({ commit }, posts) {
      //   commit("SET_POSTS", posts);
      // },
      async createPost({ commit, state }, postData ) {
        try {
          const newPost = await this.$axios.$post(
            `/posts/.json?auth=${state.auth.token}`,
            postData
          );
          return newPost
          // commit("UPDATE_POST", updatedPost);
        } catch (error) {
          throw error;
        }
      },

      async updatePost({ commit, state }, { id, postData }) {
        try {
          const updatedPost = await this.$axios.$put(
            `/posts/${id}.json?auth=${state.auth.token}`,
            postData
          );
          updatedPost.id = id;
          commit("UPDATE_POST", updatedPost);
        } catch (error) {
          throw error;
        }
      },
    },
    getters: {
      loadedPosts: (state) => state.loadedPosts,
    },
  });
};
export default createStore;
