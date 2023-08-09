<script>
// import MartzIcon from "@/components/icons/martz-icons.vue";
// import BaseButton from "@/components/baseButton.vue";
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  name: "BlogsPage",
  components: {
    PostPreview,
  },
  data() {
    return {
      blogActions: [
        {
          icon: "see",
          text: "View post",
          authRequired: false,
        },
        {
          icon: "write",
          text: "Edit",
          routerLink: "admin-app",
          authRequired: true,
        },
        { icon: "delete", text: "Delete", authRequired: true },
      ],
    };
  },

  methods: {},
  computed: {},
};
</script>

<template>
  <div class="blogs-list-page">
    <section>
      <PostPreview />
    </section>
  </div>
</template>

<style scoped></style>
