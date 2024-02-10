<template>
  <form @submit.prevent="submitForm">
    <slot
      name="email"
      :fieldValue="formData.email"
      :updateField="updateField('email')"
    />
    <slot
      name="password"
      :fieldValue="formData.password"
      :updateField="updateField('password')"
    />
    <!-- slot for radio user type -->
    <slot
      name="user-type"
      :fieldValue="formData.userType"
      :updateField="updateField('userType')"
    />

    <button type="submit" @click="formSubmited" class="btn btn-primary">
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../store/store";
import router from "../router/router";
const formData = {
  email: "",
  password: "",
  userType: "",
};

const file = ref(null);

function updateField(field) {
  return (event) => {
    if (typeof event !== "string") {
      formData[field] = event.target.value;
    } else {
      formData[field] = event;
    }
  };
}

function handleFileUpload(event) {
  file.value = event.target.files[0];
}

function submitForm() {
  const store = useStore();
  if (formData.userType === "contractor") {
    store.setData(formData);
    router.push("/register-contractor");
  } else {
    store.setData(formData);
    router.push("/");
  }
}
</script>
