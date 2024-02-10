<template>
  <nav class="navbar bg-light fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">{{
              home
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/tenders" class="nav-link" aria-current="page">{{
              tenders
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/contractors"
              class="nav-link"
              aria-current="page"
              >{{ contractors }}</RouterLink
            >
          </li>
          <li class="nav-item" v-if="store.getType === 'customer'">
            <RouterLink
              to="/announce-tender"
              class="nav-link"
              aria-current="page"
              >{{ AnnounceTender }}</RouterLink
            >
          </li>
        </ul>
        <button class="btn btn-success" v-if="!store.getType">
          <RouterLink to="/register" class="nav-link" aria-current="page">{{
            register
          }}</RouterLink>
        </button>
        <!-- login -->
        <button class="btn mx-2" v-if="!store.getType">
          <RouterLink to="/login" class="nav-link" aria-current="page"
            >Login</RouterLink
          >
        </button>
        <button class="btn mx-2" v-if="store.getType">
          <RouterLink
            to="/"
            @click="logout"
            class="nav-link text-danger"
            aria-current="page"
            >LogOut</RouterLink
          >
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "../store/store";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import router from "../router/router";

const tenders = "Tenders",
  home = "Home",
  contractors = "Contractors",
  AnnounceTender = "Announce A Tender",
  register = "Register";

const store = useStore();
const { getData } = store;

function logout() {
  store.setLoggedIn(false);
  store.logout();
  window.location.reload();
}

// onMounted(() => {

// });
</script>

<style>
.nav-link {
  font-weight: bold;
}
.router-link-active.router-link-exact-active.nav-link {
  color: #198754;
  font-weight: bold;
}
.btn a.router-link-active.router-link-exact-active.nav-link {
  color: #fff;
}
</style>
