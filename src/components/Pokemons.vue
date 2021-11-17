<script setup>
    import { usePokemonsStore } from '../store/pokemons'
    const pokemons = usePokemonsStore()
</script>
<template>
    <section class="pokedex">        
        <div class="pokemon" v-for="(pokemon, index) in pokemons.getPokemons" :key="index" :data-name="pokemon.item.name" data-type="fire" :tabindex="index">
            <figure class="pokemon-figure">
                <img 
                    :src="pokemon.info.sprites.other['official-artwork'].front_default"                
                    :alt="pokemon.item.name"
                    width="215"
                >
            </figure>
            <section class="pokemon-description">
                <!-- id du poke -->
                <span class="pokemon-id">#{{ pokemon.info.id }}</span>

                <!-- name du poke -->
                <h1 class="pokemon-name">{{ pokemon.item.name }}</h1> 

                <!-- type du poke -->
                <div class="pokemon-types">
                    <!-- : permet d'ajouter une class a une class -->
                    <span class="pokemon-type" :class="_type.type.name" v-for="(_type, index) in pokemon.info.types" :key="index">
                        {{ _type.type.name}}
                    </span>
                </div>
            </section>

            <!-- description des stats du poke -->
            <section class="pokemon-stats">
                <div class="stat-row" :class="stat.stat.name" v-for="(stat, index) in pokemon.info.stats" :key="index">
                    <div>
                        {{ stat.stat.name }}
                    </div>

                    <!-- stats du poke en % -->
                    <div class="stat-bar">
                        <div class="stat-bar-bg" :class="stat.base_stat" :style="{width: `${stat.percent_base}%`}">
                            {{ stat.base_stat }}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<style>

.pokedex {
    padding: 1rem;
    display: grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
}

.pokemon {
    background-color: #f2f2f2;
    overflow: hidden;
    position: relative;
}

.pokemon:hover {
    animation: pokemon-up .3s;
    cursor: pointer;
}

.pokemon:focus {
    outline: none;
}

.pokemon .pokemon-figure {
    text-align: center;
}

.pokemon .pokemon-figure img {
    position: relative;
    z-index: 1;
    transition: transform .3s;
}

.pokemon:focus .pokemon-figure img {
    transform: scale(.6) translate(100px, -80px);
}

.pokemon .pokemon-description {
    background-color: #fff;
    margin: 0 1rem 1rem;
    padding: .5rem;
    transition: transform .3s;
}

.pokemon:focus .pokemon-description {
    transform: translateY(-160px);
}

.pokemon .pokemon-id {
    color: #919191;
}

.pokemon .pokemon-name {
    margin: 1rem 0 .6rem;
    font-size: 1.5rem;
    font-weight: normal;
}

.pokemon .pokemon-types {
    display: flex;
}

.pokemon .pokemon-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    margin-right: .5rem;
    padding: .1rem .3rem;
    font-size: .8rem;
}

.pokemon .pokemon-stats {
    position: absolute;
    width: calc(100% - 2rem);
    margin: 0 1rem 1rem;
    padding: .5rem;
    font-size: .8rem;
    background-color: #fff;
    transform: translatey(300px);
    transition: all .3s;
}

.pokemon:focus .pokemon-stats {
    transform: translatey(-180px);
}

.pokemon .pokemon-stats .stat-row {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin: .5rem 0;
}

.pokemon .pokemon-stats .stat-bar {
    background-color: #8B0000;
}

.pokemon .pokemon-stats .stat-bar-bg {
    background-color: #212121;
    color: #fff;
    padding: 0 .2rem;
}

/* ----- Couleur des types des pokemons -----*/

.normal {
	background-color: #A8A878;
	border: 1px solid #6D6D4E;
}

.fire {
    background-color: #f08030;
    border: 1px solid #9C531F;
}

.water {
    background-color: #6890f0;
    border: 1px solid #445E9C;
}

.electric {
    background-color: #f8d030;
    border: 1px solid #A1871F;
}

.grass {
    background-color: #78c850;
    border: 1px solid #4E8234;  
}

.ice {
    background-color: #98d8d8;
    border: 1px solid #638D8D;
}

.fighting {
    background-color: #c03028;
    border: 1px solid #7D1F1A;
}

.poison {
    background-color: #a040a0;
    color: #FFF;
    border: 1px solid #682A68;
}

.ground {
    background-color: #e0c068;
    border: 1px solid #927D44;
}

.flying {
    background-color: #a890f0;
    border: 1px solid #6D5E9C;
}

.psychic {
    background-color: #f85888;
    border: 1px solid #A13959;
}

.bug {
    background-color: #a8b820;
    border: 1px solid #6D7815;
}

.rock {
    background-color: #b8a038;
    border: 1px solid #786824;
}

.ghost {
    background-color: #705898;
    border: 1px solid #493963;
}

.dragon {
    background-color: #7038f8;
    border: 1px solid #4924A1;
}

.dark {
    background-color: #705848;
    border: 1px solid #49392F;
}

.steel {
    background-color: #b8b8d0;
    border: 1px solid #787887;
}

.fairy {
    background-color: #e898e8;
    border: 1px solid #9B6470;
}

/* ----- Couleur des stats des pokemons -----*/

.hp {
    background-color: #FF5959;
}

.attack {
    background-color: #F6AC78;
}

.defense {
    background-color: #FAE078;
}

.special-attack {
    background-color: #9DB7F5;
}

.special-defense {
    background-color: #A8DB8D;
}

.speed {
    background-color: #FA92B2;
}

</style>