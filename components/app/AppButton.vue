<script setup lang="ts">
defineProps<{
  secondary?: boolean
}>();
</script>

<template>
  <button class="btn" :class="{ 'secondary': secondary }">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.btn {
  background-color: $purple;
  border: 2px solid $dark-purple;
  border-bottom-width: 5px;
  color: $white;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: $font-weight-bold;
  border-radius: 12px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    border-bottom-width: 7px;
    transform: translateY(-2px);
    background-color: lighten($purple, 2);
    border-color: lighten($dark-purple, 2);
  }

  &:active {
    border-bottom-width: 2px;
    transform: translateY(3px);
  }

  &.secondary {
    background-color: $gray;
    border-color: $dark-gray;

    &:hover {
      background-color: lighten($gray, 4);
      border-color: lighten($dark-gray, 4);
    }
  }
}
</style>