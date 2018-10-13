<template>
    <div class="card planet col-md-3">
        <h5 class="card-header">{{planet.name}}</h5>
        <div class="card-body">
            <p class="card-text">
                <ul>
                    <li>diameter: {{planet.diameter | toKm }}</li>
                    <li>population: {{planet.population}}</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['planet'],
    filters: {
        toKm: function(value) {
            if (value === 'unknown') return value
            return `${value} Km²`
        }
    },
}
</script>

