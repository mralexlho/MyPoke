<template>
  <div>
    <header>
      <div class="container-image">
        <img src="@/assets/svg/logo.svg" />
      </div>
    </header>

    <div class="pokedex-control">      
      <ButtonMore />
    </div>

    <div style="text-align: center;" v-show="pokemons.isLoading">
      <img src="@/assets/gif/pikachu.gif">
    </div>
    <Pokemons />
  </div>
</template>

<script setup>
  import Pokemons from './Pokemons.vue'
  //import SearchPoke from './SearchPoke.vue'
  import ButtonMore from './ButtonMore.vue'
  import { usePokemonsStore } from '../store/pokemons'
      const pokemons = usePokemonsStore()
      pokemons.morePokemons()
</script>

<style>

</style>