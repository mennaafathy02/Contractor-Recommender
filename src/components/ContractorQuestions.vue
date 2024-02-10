<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <h1>Build up your profile !</h1>
      <div class="questions mb-3">
        <div class="mb-3">
          <label for="company-name" class="form-check-label">
            First, what is your company name?
          </label>
          <input
            required
            type="text"
            v-model="form.companyName"
            class="form-control"
            id="company-name"
          />
        </div>
        <div class="mb-3">
          <label for="location " class="form-check-label"> Location </label>
          <input
            required
            type="text"
            v-model="form.location"
            class="form-control"
            id="location "
          />
        </div>
        <div class="mb-3">
          <label for="exp-years" class="form-check-label">
            Years of experience?
          </label>
          <input
            required
            type="text"
            v-model="form.yearsOfExperience"
            class="form-control"
            id="exp-years"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label">
            What is your rank in The Egyptian Federation For Construction And
            Building Contractors ?
          </label>
          <div class="rank">
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="1"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 1 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="2"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 2 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="3"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 3 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="4"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 4 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="5"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 5 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="6"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 6 </span>
              </span>
            </div>
            <div class="rank-num">
              <input
                required
                type="radio"
                name="rank"
                v-model="form.rank"
                value="7"
              />
              <span class="checkmark">
                <span class="rank-num-val"> 7 </span>
              </span>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="eg-fed-id">
            Upload your vaild Egyptian Federation For Construction And Building
            Contractors card
          </label>
          <input
            type="file"
            ref="egFedID"
            class="form-control"
            id="eg-fed-id"
            @change="handleFileChange(egFedID)"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="taxes-card">
            Upload your vaild taxes card
          </label>
          <input
            type="file"
            class="form-control"
            ref="taxesCard"
            id="taxes-card"
          />
        </div>
        <div class="mb-3">
          <label for="specialized-type " class="form-check-label">
            Are you specialized in specific type of project?
          </label>
          <input
            type="text"
            class="form-control"
            id="specialized-type"
            v-model="form.specializedType"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="certifications">
            Do you have certifications?
          </label>
          <input
            type="file"
            ref="certifications"
            class="form-control"
            id="certifications"
          />
        </div>
        <!-- types -->
        <div class="mb-3">
          <label class="form-check-label"> Types of past projects? </label>
          <div class="choices">
            <div class="choice">
              <input
                type="checkbox"
                value="Residential"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">Residential</label>
            </div>
            <div class="choice">
              <input
                type="checkbox"
                value="Infrastructure"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">Infrastructure</label>
            </div>
            <div class="choice">
              <input
                type="checkbox"
                value="Bridge and Tunnel"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">Bridge and Tunnel</label>
            </div>
            <div class="choice">
              <input
                type="checkbox"
                value="Renovation and Remodeling"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">Renovation and Remodeling</label>
            </div>
            <div class="choice">
              <input
                type="checkbox"
                value="High-Rise Buildings"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">High-Rise Buildings</label>
            </div>
            <div class="choice">
              <input
                type="checkbox"
                value="others"
                name="past-projects"
                id=""
                v-model="formData.pastProjects"
              />
              <label for="">others</label>
            </div>
          </div>
        </div>
      </div>
      <button @click="register" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { ref } from "vue";
import router from "../router/router";
import { useStore } from "../store/store";

const file = ref(null);
const store = useStore();

const form = ref(store.getData);
const formData = ref({
  email: localStorage.getItem("email"),
  userType: "contractor",
  companyName: "",
  location: "",
  yearsOfExperience: "",
  rank: "",
  egFedID: "",
  taxesCard: "",
  specializedType: "",
  certifications: "",
  pastProjects: [],
});

const egFedID = ref(null);
const taxesCard = ref(null);
const certifications = ref(null);

function handleFileChange(ref) {
  return (event) => {
    ref.value = event.target.files[0];
  };
}

function register() {
  store.setContractorForm(formData.value);
  router.push("/");
}
</script>
<style>
h1 {
  text-align: center;
  margin-block: 1.875em;
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
.rank {
  display: flex;
  gap: 1.25em;
}
.rank-num {
  position: relative;
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
}

.rank-num input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: translate(0%, 00%);
  z-index: 2000;
  cursor: pointer;
  background-color: transparent;
}
.checkmark {
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  display: block;
  background-color: #eee;
  border-radius: 50%;
}

.rank-num:hover input ~ .checkmark {
  background-color: #ccc;
}
.rank-num input:checked ~ .checkmark {
  background-color: #2196f3;
  color: white;
}
.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

@media (max-width: 770px) {
  form {
    width: 90%;
  }
  .rank {
    margin-block: 5px;
    gap: 0.5em;
  }
  .checkmark {
    padding: 4px 10px;
  }
  .rank-num {
    font-size: 1rem;
  }
  .group {
    flex-wrap: wrap;
  }
  .group .form-check {
    width: 100%;
    margin-block: 5px;
  }
}
.choices {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.choice {
  display: flex;
  gap: 0.5em;
}
</style>
