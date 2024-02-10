<template>
  <div class="overflow-hidden">
    <Hero>
      <template v-slot:hero-title> Select Your Contractor </template>
      <template v-slot:hero-para>
        Our system is achieving a decentralized, secure, trustworthy, and
        transparent tendering system environment among construction project
        participants.
      </template>
      <template v-slot:imgHero>
        <img src="../assets/pexels-pixabay-159306.jpg" alt="" />
      </template>
    </Hero>
    <Hero-2>
      <template v-slot:hero-heading> Contractor recommender system </template>
      <template v-slot:heading-sec> Decentralized Tendering System </template>
      <template v-slot:content>
        Our tendering system is presented for construction projects, excute all
        tendering steps, store information through the process, evaluating bids,
        and awarding of the contract.
      </template>
      <template v-slot:hero-img>
        <img
          src="../assets/pexels-zahid-iqbal-15063590.jpg"
          alt=""
          class="img-fluid"
        />
      </template>
    </Hero-2>
    <Features></Features>
    <LatestProjects></LatestProjects>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Hero2 from "../components/Hero2.vue";
import Features from "../components/Features.vue";
import LatestProjects from "../components/LatestProjects.vue";
</script>
