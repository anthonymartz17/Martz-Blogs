<script>
export default {};
</script>
<template>
  <nuxt-link :to="`blogs/${1}`" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        style="
          background-image: url('https://www.tatvasoft.com/outsourcing/wp-content/uploads/2021/10/What-is-Vue-js-1-1.jpg');
        "
      ></div>
      <div>
        <div class="post-content">
          <h4>My journey through vue.js</h4>
          <p>posted on: dec 4, 2023</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            obcaecati.
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
