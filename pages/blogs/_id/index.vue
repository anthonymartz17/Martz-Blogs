<script>
import { mapActions } from "vuex";
// import BaseButton from "../baseButton.vue";
export default {
  name: "SingleBlog",
  data() {
    return {
      post: {},
    };
  },
  props: ["projectClicked"],
  created() {
    const postId = this.$route.params.postId;

    if (postId) {
      this.fetchPostById(postId).then((post) => {
        this.post = post;
      });
    }
  },
  methods: {
    ...mapActions("blogPosts", ["fetchPostById"]),
  },
};
</script>

<template>
  <div class="single-blog-page">
    <section>
      <h2>titulo de blog</h2>
      <div>
        <div>
          <span>Antonio martinez</span>
          <span>Dec 24, 2023</span>
          <span>4 min read.</span>
        </div>
      </div>
      <div>
        <img src="/images/My-Journey.png" alt="blog thumbnail" />
      </div>
      <!-- <div v-html="post.content" :class="{ 'custom-class': true }"></div> -->
      <div>
        For a blogging app, the choice between Server (Node.js hosting) and
        Static (Static/Jamstack hosting) on Firebase will depend on the approach
        you want to take for rendering and serving your blog's content. Server
        (Node.js hosting): If your blogging app requires dynamic content and
        features like user authentication, user-specific content, commenting
        system, or any other server-side logic, then you should choose Server
        (Node.js hosting). This option allows you to leverage the server-side
        rendering capabilities of Nuxt.js and implement dynamic functionality
        using Firebase Cloud Functions or other server-side technologies.
        Advantages: Supports dynamic content generation. Allows real-time user
        interactions and authentication. Ideal for apps with user-specific
        features.
      </div>
    </section>
  </div>
</template>

<style scoped></style>
