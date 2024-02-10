<template>
  <div class="login">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-check-label" for="email">Email Address:</label>

        <input required class="form-control" type="email" id="email" />
      </div>
      <div class="mb-3">
        <label class="form-check-label" for="password">Password:</label>

        <input required class="form-control" type="password" id="password" />
      </div>

      <button type="submit" class="btn btn-success">Login</button>
    </form>
  </div>
</template>
<script setup></script>

<style>
.login {
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 70%;
  margin-inline: auto;
  background-color: white;
  padding: 1.875em;
  margin-block: auto;
  border-radius: 0.625em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 770px) {
  form {
    width: 90%;
  }
}
</style>
