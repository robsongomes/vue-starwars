const URI = "https://swapi.co/api/planets/";

class PlanetService {

    static async getPlanets() {
        return new Promise( async (res, rej) => {
            try {
                const planets = await fetch(URI)
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