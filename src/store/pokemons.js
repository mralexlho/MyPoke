import {
    defineStore
} from 'pinia'

var parsedUrl = new URL(`https://pokeapi.co/api/v2/pokemon?limit=1200`);

export const usePokemonsStore = defineStore({
    id: 'pokemons',
    state: () => ({
        pokemons: [],
        loading: false,
    }),
    actions: {
        async morePokemons() {
            
            if(this.pokemons > 0) 
                parsedUrl = new URL(`https://pokeapi.co/api/v2/pokemon/` + this.pokemons);

            this.$state.loading = true
            const responseArray = await fetch(parsedUrl);
            const responseJson = await responseArray.json()

            const pokemonsMap = responseJson.results.map(async (item) => {
                const responseItem = await fetch(item.url)
                const info = await responseItem.json()
                info.stats.forEach((stat) => {
                    stat['percent_base'] = (100 * stat.base_stat) / 200
                })
                return {
                    item,
                    info
                }
            })

            const pokemons = await Promise.all(pokemonsMap)            
            this.$state.loading = false
            this.$state.pokemons = [
                ...pokemons,
                ...this.$state.pokemons,
            ]
        },
    },
    getters: {
        getPokemons(state) {
            return state.pokemons
        },
        isLoading(state) {
            return state.loading
        },
    },
})