<template>

<!--<div class="searchBar">
    <form action="">
      <input type="text" name="pokemon" id="search" placeholder="PokeSearch : name or id">
    </form>
  </div>-->

  <div class="searchBar" id="app" >

     Search: <input type="text" v-model.lazy="pokemons" @change="morePokemons">
     <br />
     <div>{{ results }}</div>
     
  </div>

</template>


<!--<template>

    <button @Search="pokemons.morePokemons">Mas Pokemones !! </button>

</template>-->

<script setup>
    import {
        usePokemonsStore
    } from '../store/pokemons'
    const pokemons = usePokemonsStore()
</script>


<style>

.searchBar {
  padding: 20px 0;
  text-align: center;
  background-color: #8B0000;
  border-radius: 8px 8px 0 0;
}

</style>