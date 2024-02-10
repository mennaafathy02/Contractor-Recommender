<template>
  <div class="announce-tender">
    <form @submit.prevent="submitForm">
      <div v-if="currentStep == 1">
        <h2 class="mb-3">Create New Tender</h2>
        <div class="mb-3">
          <label class="form-check-label" for="from">From</label>
          <input
            required
            class="form-control"
            v-model="announceTender.from"
            type="text"
            id="from"
            placeholder="The Tendering Entity"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="title">Title</label>
          <input
            required
            class="form-control"
            v-model="announceTender.title"
            type="text"
            id="title"
            placeholder="Tender Title"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="description">Description</label>
          <textarea
            required
            class="form-control"
            type="text"
            id="description"
            v-model="announceTender.description"
            placeholder="Tender Description"
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="bid-bond">Bid Bond (E£):</label>
          <input
            required
            class="form-control"
            type="text"
            id="bid-bond"
            @input="inputNumbers"
            v-model="announceTender.bidBond"
            placeholder="Tender Bid Bond"
          />
          <p class="text-danger" ref="validNumber" v-if="validNumber">
            Enter a valid number
          </p>
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="prequalification"
            >Prequalification Deadline</label
          >
          <input
            required
            class="form-control"
            type="date"
            id="prequalification"
            v-model="announceTender.prequalification"
          />
          <div class="mb-3">
            <label class="form-check-label" for="bid-submission-deadline"
              >Bid Submission Deadline</label
            >
            <input
              required
              class="form-control"
              type="date"
              id="bid-submission-deadline"
              v-model="announceTender.bidSubmissionDeadline"
            />
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="contract-sign-deadline"
              >Contract Sign Deadline</label
            >
            <input
              required
              class="form-control"
              type="date"
              id="contract-sign-deadline"
              v-model="announceTender.contractSignDeadline"
            />
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="drawings">Drawings:</label>
            <input
              ref="drawings"
              required
              class="form-control"
              type="file"
              id="drawings"
              @change="handleFileUpload"
            />
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="boq">BOQ:</label>
            <input
              ref="BOQ"
              required
              class="form-control"
              type="file"
              id="boq"
              @change="handleFileUpload"
            />
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="estimated-project-cost"
              >Estimated Project Cost</label
            >
            <input
              required
              class="form-control"
              type="text"
              id="estimated-project-cost"
              @input="inputNumbers"
              v-model="announceTender.estimatedProjectCost"
              placeholder="Tender Estimated Project Cost"
            />
            <p class="text-danger" ref="validNumber" v-if="validNumber">
              Enter a valid number
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="mb-3 text-bold">Evaluation Criteria</h3>
        <table class="mb-3">
          <thead>
            <tr>
              <th class="text-center">Criteria</th>
              <th class="text-center">Condition</th>
              <th class="text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(criterion, index) in announceTender.criteria"
              :key="index"
            >
              <td class="mb-3">
                <!-- input -->
                <input
                  type="text"
                  v-model="criterion.name"
                  :id="'criterionName' + index"
                  required
                />
              </td>
              <td class="mb-3">
                <!-- input -->
                <input
                  type="text"
                  v-model="criterion.condition"
                  :id="'criterionCondition' + index"
                  required
                />
              </td>
              <td class="mb-3">
                <!-- input -->
                <input
                  type="number"
                  v-model="criterion.score"
                  :id="'criterionScore' + index"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="btn mb-3 btn-success"
          type="button"
          @click="addCriterion"
        >
          Add Criteria
        </button>
      </div>
      <div class="btn btn-success" @click="nextStep" v-if="currentStep == 1">
        Next
      </div>
      <button
        v-if="currentStep == 2"
        type="submit"
        @click="formSubmited"
        class="btn btn-success"
        :class="currentStep == 1 ? 'mx-2' : ''"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentStep = ref(1);
const validNumber = ref(false);

const announceTender = ref({
  from: "",
  title: "",
  description: "",
  bidBond: "",
  prequalification: "",
  bidSubmissionDeadline: "",
  contractSignDeadline: "",
  drawings: "",
  BOQ: "",
  estimatedProjectCost: "",
  criteria: [
    {
      name: "",
      condition: "",
      score: "",
    },
  ],
});

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
}

function previousStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}
const addCriterion = () => {
  announceTender.value.criteria.push({
    name: "",
    condition: "",
    score: "",
  });
  console.log(announceTender.value.criteria);
};
function formSubmited() {
  // Implement form submission logic
  console.log(announceTender.value);
}

function inputNumbers(event) {
  if (isNaN(event.target.value)) {
    validNumber.value = true;
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  } else {
    validNumber.value = false;
  }
}

function handleFileUpload(event) {
  if (event.target.id === "drawings") {
    announceTender.value.drawings = event.target.files[0];
  } else {
    announceTender.value.BOQ = event.target.files[0];
  }
}
console.log(announceTender.value);
</script>
<style>
* {
  box-sizing: border-box;
}
.announce-tender {
  min-height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  box-sizing: border-box;
}
form {
  width: 70%;
  margin-inline: auto;
  background-color: white;
  padding: 1.875em;
  margin-block: 20px;
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

@media (max-width: 770px) {
  form {
    width: 90%;
  }
}
</style>
