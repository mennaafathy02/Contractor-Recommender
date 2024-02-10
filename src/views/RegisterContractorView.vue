<template>
    <div class="register">
        <ContractorQuestions></ContractorQuestions>
    </div>
</template>

<script setup>
import ContractorQuestions from "../components/register/ContractorQuestions.vue";
</script>

<style>
.register{
    padding-top:5rem;
    padding-bottom: 2rem;
    min-height: calc(100vh - 3.5rem);
    background: url(../assets/registerbg.jpg) no-repeat center center/cover;
}
</style>