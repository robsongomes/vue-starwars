
const URI = "https://swapi.co/api/people/?page=";

class CharacterService {

    static getCharacters(page = 1) {
        return new Promise( async (resolve, reject) => {
            try {
                const res = await fetch(`${URI}${page}`);
                resolve(res.json())
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default CharacterService