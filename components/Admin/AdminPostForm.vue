<script>

export default {

  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post ? { ...this.post } : {},
    };
  },

  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
      this.editedPost = {};
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnailLink"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<style></style>
