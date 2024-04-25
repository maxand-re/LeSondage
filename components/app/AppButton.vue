<script setup lang="ts">
defineProps<{
  secondary?: boolean
  valid?: boolean
}>();
</script>

<template>
  <button class="btn" :class="{ 'secondary': secondary, 'valid': valid }">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.btn {
  transition: .025s ease-in-out;
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
    margin-bottom: -2px;
  }

  &:active {
    border-bottom-width: 2px;
    transform: translateY(3px);
    margin-bottom: 3px;
  }

  &.secondary {
    background-color: $gray;
    border-color: $dark-gray;

    &:hover {
      background-color: lighten($gray, 4);
      border-color: lighten($dark-gray, 4);
    }
  }

  &.valid {
    background-color: $green;
    border-color: $dark-green;
    color: $dark-blue;

    &:valid {
      background-color: lighten($green, 4);
      border-color: lighten($dark-green, 4);
    }
  }
}
</style>