<template>
    <div class="container">
      <h1>{{msg}}</h1>
      <div class="planet">
        <router-view></router-view>
      </div>     
      <div class="characters">
        <div class="row">
            <app-nav @page="go" size.number="54"></app-nav>
        </div>
        <div class="row">
          <character v-for="(character,i) in characters" :key="i" :character="character"/>
        </div>
      </div>
    </div>
</template>

<script>
import Character from './Character'
import Nav from './Nav'
import CharacterService from '../services/CharacterService'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Star Wars Characters',
      result: {}
    }
  },
  methods: {
    async go(page) {
        this.fetchCharacters(page)
    },
    async fetchCharacters(page) {
      this.result = await CharacterService.getCharacters(page)
    }
  },  
  async created() {
    this.fetchCharacters()
  },
  computed: {
    characters() {
      return this.result.results
    },
  },
  components: {
    Character,
    'app-nav': Nav,
  }
}
</script>

<style>
</style>
