<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  async asyncData(context) {
    try {
      const res = await context.$axios.$get(
        `https://blogging-nuxt-app-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      );
      return { loadedPost: res };
    } catch (error) {
      context.error(error);
    }
  },

  data() {
    return {};
  },
  methods: {
    async tryUpdate(postData) {
      console.log("component");
      try {
        await this.$store.dispatch('updatePost',postData);
        this.$router.push("/admin");
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>
<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="tryUpdate" />
    </section>
  </div>
</template>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
