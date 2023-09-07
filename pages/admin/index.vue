<script>
export default {
  name: "AdminPage",
  layout: "admin",
  middleware: ["check-auth", "auth"],
  methods: {
    logout() {
      this.$store.dispatch("auth/signOut")
      this.$router.push("/admin/aut")
    },
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>
<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
      <AppButton @click="logout">Log Out</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :isAdmin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
