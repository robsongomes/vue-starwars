<template>
    <div class="container">
        <h1>Planets</h1>
        <div class="row">
            <planet v-for="planet in planets" :key="planet.id" :planet="planet"></planet>
        </div>
    </div>
</template>

<script>
import PlanetService from '../services/PlanetService'
import Planet from './Planet'

export default {
    data() {
        return {
            planets: []
        }
    },
    created() {
        PlanetService.getPlanets()
            .then(res => this.planets = res.results)
    },
    components: {
        Planet
    }
}
</script>

<style>

</style>

