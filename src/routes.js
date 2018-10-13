import Characters from './components/Characters'
import Planets from './components/Planets'
import Planet from './components/Planet'
import Home from './components/Home'

export const routes = [
    { path: '/', component: Home },
    { path: '/characters', component: Characters, 
        children: [
            {
                path: 'planet/:id',
                component: Planet,
            }
        ]
    },
    { path: '/planets', component: Planets }
]