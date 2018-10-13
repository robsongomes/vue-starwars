<template>
    <h1>Planet {{ planet.name }}</h1>
</template>

<script>
import PlanetService from "../services/PlanetService";
export default {
    data() {
        return {
            planet: {}
        }
    },
    watch: {
        async '$route' (to, from) {
            this.planet = await PlanetService.getPlanet(to.params.id)
        }
    }
}
</script>

