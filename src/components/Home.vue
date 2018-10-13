<template>
    <div class="container">
        <h1>{{msg}}</h1>
        <ul>
            <router-link tag="li" to="/characters"><a>Meet the Characters</a></router-link>
            <router-link tag="li" to="/planets"><a>Explore the planets</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Welcome to Star Wars Fan Page'
        }
    }
}
</script>
