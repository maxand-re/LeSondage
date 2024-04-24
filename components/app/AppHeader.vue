<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <ul class="nav">
        <li class="element">
          <NuxtLink class="link" to="/" active-class="active">Sondages</NuxtLink>
        </li>
        <li class="element">
          <NuxtLink class="link" to="/leaderboard" active-class="active">Classement général</NuxtLink>
        </li>
      </ul>

      <div class="right">
        <NuxtLink class="link profile" to="/profile" active-class="active">
          <span class="content">Mon profil</span>
          <div class="picture"/>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

header {
  height: 80px;
  border-bottom: 2px solid $line;
  margin-bottom: 24px;
  position: sticky;
  top: 0;

  .container {
    height: 100%;
    display: flex;
  }

  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
    align-items: center;
    gap: 16px;
  }

  .link {
    font-weight: $font-weight-bold;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    color: $secondary-text;
    padding-inline: 20px;
    border-radius: 12px;
    transition: .1s ease;
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: $dark-gray;
      color: $primary-text;
    }

    &.active {
      background-color: $dark-gray;
      border: 2px solid $line;
      color: $primary-text;
    }
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .picture {
      height: 30px;
      width: 30px;
      border-radius: 30px;
      background-color: $dark-gray;
      border: 2px solid $line;
    }
  }
}


</style>