<script>
export default {
  name: "postPreview",

  props: {
    post: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return `/${this.isAdmin ? "admin" : "posts"}/${this.post.id}`;
    },
  },
};
</script>
<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        style="`background-image: url(${post.thumbnail}) `"
      ></div>
      <div>
        <div class="post-content">
          <h4>{{ post.title }}</h4>
          <p>{{ post.posted_date }}</p>
          <p>
            {{ post.preview_text }}
          </p>
          <p>Read more...</p>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
