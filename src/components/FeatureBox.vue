<template>
  <div class="feature-box d-flex justify-content-center">
    <div class="feature-box__title d-flex justify-content-center flex-column">
      <slot name="feature-icon"></slot>
      <h6 class="text-center">
        <slot name="feature-title"></slot>
      </h6>
    </div>
  </div>
</template>

<script setup></script>
