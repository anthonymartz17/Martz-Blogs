<script>
export default {};
</script>
<template>
  <nuxt-link :to="`posts/${1}`">
    <article>
      <div>
        <img src="/images/My-journey.png" height="250" width="250" alt="blog post thumbnail" />
      </div>
      <div>
        <h4>post title</h4>
        <p>posted on: dec 4, 2023</p>
      </div>
    </article>
  </nuxt-link>
</template>

<style></style>
