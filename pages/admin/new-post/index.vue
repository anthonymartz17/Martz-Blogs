<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    async onSubmitted(postData) {
      try {
        const response = await axios.post(
          "https://blogging-nuxt-app-default-rtdb.firebaseio.com/posts.json",
          postData
        );
        
      } catch (error) {
        throw error
      }
    },
  },
};
</script>
<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
