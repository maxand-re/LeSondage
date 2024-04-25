<script setup lang="ts">
const props = defineProps<{
  question: string,
  endingTime: number,
  playerCount: number,
}>();

const ended = computed(() => {
  return props.endingTime <= Date.now();
})

</script>

<template>
  <div class="poll-card">
    <div class="left">
      <div class="question">{{ question }}</div>

      <div v-if="ended" class="status">Terminé</div>
      <div v-else class="status">Se termine dans <span class="time">{{ 0 }}</span></div>
    </div>
    <div class="right">
      <div class="players">
        {{ playerCount }} participants
      </div>

      <div class="buttons">
        <AppButton secondary>Partager</AppButton>
        <AppButton v-if="ended">Classement</AppButton>
        <AppButton v-else valid>Participer</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.poll-card {
  background-color: $dark-blue;
  display: flex;
  min-height: 140px;
  padding: 16px;
  gap: 16px;
  border: 2px solid $line;
  border-radius: 15px;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .question {
      font-size: 25px;
      font-weight: $font-weight-bold;
    }


    .status {
      color: $secondary-text;
      font-weight: $font-weight-medium;

      .time {
        color: $primary-text;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .players {
      margin-left: auto;
    }

    .buttons {
      display: flex;
      gap: 8px;
      margin-left: auto;
    }
  }

}
</style>