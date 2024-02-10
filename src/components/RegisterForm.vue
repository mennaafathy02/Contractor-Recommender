<template>
  <div class="container">
    <RegisterFormInput :formData="formData">
      <template v-slot:email="{ fieldValue, updateField }">
        <div class="mb-3">
          <label class="form-check-label" for="email">Email Address:</label>

          <input
            required
            class="form-control"
            type="email"
            id="email"
            :value="fieldValue"
            @input="updateField"
          />
        </div>
      </template>
      <template v-slot:password="{ fieldValue, updateField }">
        <div class="mb-3">
          <label class="form-check-label" for="password">Password:</label>
          <input
            required
            class="form-control"
            type="password"
            id="password"
            :value="fieldValue"
            @input="updateField"
          />
        </div>
      </template>
      <template v-slot:user-type="{ fieldValue, updateField }">
        <h3>
          <strong>Register as:</strong>
        </h3>
        <div class="group mb-3 d-inline-flex align-items-center w-100">
          <div class="mx-2 form-check">
            <div class="w-100 d-flex justify-content-between">
              <label
                class="fs-4 text-bold form-check-label"
                for="optionCustomer"
              >
                Client
              </label>
              <input
                required
                class="form-check-input"
                type="radio"
                name="type"
                :value="'customer'"
                id="optionCustomer"
                @change="updateField('customer')"
              />
            </div>
            <p class="p-2">I'm a Client , announcing for a tender</p>
          </div>
          <div class="mx-2 form-check">
            <div class="w-100 d-flex justify-content-between">
              <label
                class="fs-4 text-bold form-check-label"
                for="optionContractor"
              >
                Contractor
              </label>
              <input
                required
                class="form-check-input"
                type="radio"
                :value="'contractor'"
                name="type"
                id="optionContractor"
                @change="updateField('contractor')"
              />
            </div>
            <p class="p-2">I'm a contractor , submitting for tenders</p>
          </div>
        </div>
      </template>

      <template v-if="formData['userType'] === 'contractor'" v-slot:file-upload>
        <div class="mb-3">
          <label for="fileUpload">File Upload:</label>
          <input type="file" id="fileUpload" @change="handleFileUpload" />
        </div>
      </template>
    </RegisterFormInput>
  </div>
</template>

<script setup>
import RegisterFormInput from "./RegisterFormInput.vue";

const formData = {
  email: "",
  password: "",
  userType: "",
};

function handleFileUpload(event) {
  formData.uploadedFile = event.target.files[0];
}

function submitForm() {
  console.log(formData);
}
</script>
<style>
form {
  width: 70%;
  margin-inline: auto;
  background-color: white;
  padding: 1.875em;
  margin-block: auto;
  border-radius: 0.625em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
.group .form-check {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(204, 200, 200);
  padding: 1.25em;
  border-radius: 0.625em;
}
.group .form-check input {
  margin-left: auto;
}
</style>
