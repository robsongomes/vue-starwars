<template>
    <div class="card character col-md-3">
        <h5 class="card-header">{{character.name}}</h5>
        <div class="card-body">
            <h5 class="card-title">
                <router-link :to="{ path: `/characters/planet/${planetId}` }">{{planet.name}}</router-link>
            </h5>
            <p class="card-text">
                <ul>
                    <li>height: {{character.height}}</li>
                    <li>mass: {{character.mass}}</li>
                    <li>hair: {{character.skin_color}}</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
import PlanetService from '../services/PlanetService'
export default {    
    props: ['character'],
    data() {
        return {
            planet: {},
            planetId: '',
        }
    },
    async created() {
        this.planetId = new RegExp(/\d/).exec(this.character.homeworld);
        this.planet = await PlanetService.getPlanet(this.planetId);
    },
    watch: {
        character: function() {
            this.planetId = new RegExp(/\d/).exec(this.character.homeworld);
        }
    }
}
</script>
