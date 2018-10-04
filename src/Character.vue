<template>
    <div class="card character col-md-4">
        <h5 class="card-header">{{character.name}}</h5>
        <div class="card-body">
            <h5 class="card-title">{{homeworld}}</h5>
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
export default {    
    props: ['character'],
    data() {
        return {
            planet: {},
            homeworld: ''
        }
    },
    created() {
        fetch(this.character.homeworld)
            .then(res => res.json())
            .then(json => this.planet = json);
    },
    watch: {
        planet: function() {
            this.homeworld = this.planet.name;
        }
    }
}
</script>
