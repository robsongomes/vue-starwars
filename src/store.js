import Vue from 'vue'
import Vuex from 'vuex'
import PlanetService from './services/PlanetService'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: [],
        planets: [],
    },
    mutations: {
        fetchPlanets(state, payload) {
            state.planets = payload
        }
    },
    actions: {
        fetchPlanets: ({commit}) => {
            PlanetService.getPlanets()
                .then(p => commit('fetchPlanets', p.results))
        }
    }
})

export default store;