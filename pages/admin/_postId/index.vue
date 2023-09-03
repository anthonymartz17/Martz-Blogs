<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  middleware: ["check-auth","auth"],
  components: {
    AdminPostForm,
  },
  async asyncData(context) {
    try {
      const res = await context.$axios.$get(
        `/posts/${context.params.postId}.json`
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
      try {
        await this.$store.dispatch("updatePost", {
          id: this.$route.params.postId,
          postData,
        });
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
