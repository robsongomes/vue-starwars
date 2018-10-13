const URI = "https://swapi.co/api/planets/";

class PlanetService {

    static async getPlanets() {
        return new Promise( async (res, rej) => {
            try {
                const page = Math.floor(Math.random() * 6) + 1;
                const planets = await fetch(`${URI}?page=${page}`)
                res(planets.json())
            } catch (error) {
                rej(error)
            }
        })
    }

    static async getPlanet(id) {
        return new Promise(async (res, rej) => {
            try {
                const planet = await fetch(`${URI}${id}/`)
                res(planet.json())
            } catch (error) {
                rej(error)
            }
        })
    }
}

export default PlanetService