<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  name: "blogPosts",
 
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostPreview,
  },
};
</script>
<template>
  <section class="featured-posts">
    <PostPreview
      :is-admin="isAdmin"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </section>
</template>
<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
