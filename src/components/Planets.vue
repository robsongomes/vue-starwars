<template>
    <div class="container">
        <h1>Planets</h1>
        <div class="row">
            <planet v-for="planet in planets" :key="planet.name" :planet="planet"></planet>
        </div>
    </div>
</template>

<script>
import PlanetService from '../services/PlanetService'
import Planet from './Planet'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            planets: this.$store.state.planets
        }
    },
    methods: mapActions(['fetchPlanets']),
    created() {
        this.fetchPlanets()
    },
    components: {
        Planet
    }
}
</script>

<style>

</style>

