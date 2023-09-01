<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",

  data() {
    return {
      user: {},
      isLogin: true,
    };
  },
  methods: {
    async onSubmit() {
      try {
        let action = "auth/signIn";
        if (!this.isLogin) {
          action = "auth/signUp";
        }
        const res = await this.$store.dispatch(action, {
          ...this.user,
          returnSecureToken: true,
        });
        this.user = {};
        if (action == "auth/signIn") this.$router.push("/admin");
        this.isLogin = true;
      } catch (error) {}
    },
  },
};
</script>
<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="user.email" type="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput v-model="user.password" type="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
