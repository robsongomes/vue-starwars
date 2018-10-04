<template>
  <div id="app">
    <div class="container">
      <h1>{{msg}}</h1>
      <div class="characters">
        <div class="row">
          <character v-for="(character,i) in characters" :key="i" :character="character"/>
        </div>
        <button v-if="previousPage" class="btn" @click="fetchCharacters(previousPage)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </button>
        <button v-if="nextPage" class="btn" @click="fetchCharacters(nextPage)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Character from './Character'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Star Wars Characters',
      result: {}
    }
  },
  methods: {
    goNext(uri) {
      this.fetchCharacters(uri)
    },
    goPrevious(uri) {

    },
    fetchCharacters(uri = 'https://swapi.co/api/people/') {
      fetch(uri)
      .then(res => res.json())
      .then(json => this.result = json)
    }
  },  
  created() {
    this.fetchCharacters();
  },
  computed: {
    characters() {
      return this.result.results;
    },
    nextPage() {
      return this.result.next;
    },
    previousPage() {
      return this.result.previous;
    }
  },
  components: {
    Character
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
