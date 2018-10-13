import Characters from './components/Characters'
import Planets from './components/Planets'
import CharacterPlanet from './components/CharacterPlanet'
import Home from './components/Home'

export const routes = [
    { path: '/', component: Home },
    { path: '/characters', component: Characters, 
        children: [
            {
                path: 'planet/:id',
                component: CharacterPlanet,
            }
        ]
    },
    { path: '/planets', component: Planets }
]