<template>
  <div class="register">
    <Form></Form>
  </div>
</template>
<script setup>
import Form from "../components/RegisterForm.vue";
</script>
<style>
.register {
  padding-top: 5rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - 3.5rem);
  background: url(../assets/registerbg.jpg) no-repeat center center/cover;
}
.register .btn a {
  color: white !important;
}
</style>
