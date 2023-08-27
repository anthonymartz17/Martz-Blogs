<script>
export default {
  name: "SingleBlog",
  async asyncData(context) {
    try {
      const res = await context.$axios.$get(
        `https://blogging-nuxt-app-default-rtdb.firebaseio.com/posts/${context.params.id}.json`
      );
      return { post: res };
    } catch (error) {
      context.error(error);
    }
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="single-blog-page">
    <section>
      <h2>{{ post.title }}</h2>
      <div>
        <div>
          <span>{{ post.author }}</span>
        </div>
      </div>

      <div>{{ post.content }}</div>
      <div>
        {{ post.content }}
      </div>
    </section>
  </div>
</template>

<style scoped></style>
