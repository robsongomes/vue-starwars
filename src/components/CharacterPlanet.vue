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
        '$route' (to, from) {
            console.log('chamou planet')
            //this.planet = await PlanetService.getPlanet(to.params.id)
        }
    }
}
</script>

