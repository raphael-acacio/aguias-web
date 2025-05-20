<template>
  <div class="menu-container">
    <h2>Welcome!</h2>
    <div class="menu-options">
      <button @click="goToRegister">Registrar Aluno</button>
      <button @click="goToAttendance">Fazer Chamada</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToAttendance() {
      this.$router.push('/attendance');
    }
  }
}
</script>

<style src="./HomeMenu.css"></style>