<template>
  <div class="student-registration-container">
    <form class="student-registration-form" @submit.prevent="register">
      <h2>Registro do Aluno</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder="Nome Completo"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Email do responsável"
        />
      </div>
      <div class="form-group">
        <label for ="phone">Número do responsável</label>
        <input
          id="phone"
          v-model="phone"
          type="text"
          required
          placeholder="Digite o número"
        />
        </div>
        <div class="form-group">
        <label for="FatherName">Nome do responsável</label>
        <input
          id="fatherName"
          v-model="fatherName"
          type="text"
          required
          placeholder="Nome do responsável"
        />
        </div>
        <label for="address">Endereço</label>
        <input
          id="address"
          v-model="address"
          type="text"
          required
          placeholder="Digite o endereço"
        />
        <div class ="form-group">
            <label for="Age">Idade</label>
            <input
            id="age"
            v-model="age"
            type="text"
            required
            placeholder="Idade"
            />
        </div>
        <div class ="form-group">
            <label for="grade">Turma</label>
            <input
            id="grade"
            v-model="grade" 
            type="text"
            required
            placeholder="Turma"
            />
        </div>

      <button type="submit">Register</button>
      <p v-if="success" class="success">{{ success }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "StudentRegistration",
  data() {
    return {
      name: "",
      email: "",
      success: "",
      error: "",
    };
  },
  methods: {
    register() {
      if (this.name && this.email) {
        this.success = "Student registered successfully!";
        this.error = "";
        this.name = "";
        this.email = "";
      } else {
        this.error = "Please fill in all fields.";
        this.success = "";
      }
    },
  },
};
</script>

<style src="./StudentRegistration.css"></style>