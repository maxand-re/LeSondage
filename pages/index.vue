<script setup lang="ts">
useHead({
  title: "LeSondage - Liste des sondages"
})
</script>

<template>
  <div class="container">
    <section>
      <h1>Sondages en cours</h1>

      <div class="cards">
        <PollCard
            question="Qui est le plus raciste ?"
            :ending-time="1714500712000"
            :player-count="20"
            class="card"
        />
      </div>
    </section>

    <section>
      <h1>Derniers sondages</h1>


      <div class="cards">
        <PollCard
            question="Qui est le plus intelligent ?"
            :ending-time="0"
            :player-count="18"
            class="card"
        />
        <PollCard
            question="Qui est le plus beau ?"
            :ending-time="0"
            :player-count="22"
            class="card"
        />
        <PollCard
            question="Qui est le plus raciste ?"
            :ending-time="0"
            :player-count="22"
            class="card"
        />
      </div>
    </section>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.container {
  display: flex;
  flex-direction: column;
  row-gap: 64px;

  section {
    h1 {
      margin-bottom: 16px;
    }
  }
}


.cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: $lg){
    flex-direction: column;
  }

  .card {
    flex: 1;
    max-width: calc(50% - 8px);
    min-width: 550px;

    @media screen and (max-width: $lg){
      min-width: unset;
      max-width: unset;
    }
  }
}
</style>
