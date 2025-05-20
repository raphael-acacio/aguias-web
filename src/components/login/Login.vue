<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          required
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      if (this.username === "123" && this.password === "123") {
        this.error = "";
        this.$router.push('/home');
      } else {
        this.error = "Invalid username or password.";
      }
    },
  },
};
</script>

<style src="./Login.css"></style>