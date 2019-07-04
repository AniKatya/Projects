//the class which manage all the APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    //made API requests
    //each request updates the `data` object accordingly
    loadData(){
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: (result) => {
            this.data.users = result.results[0]
          }
        })

        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?page=3&results=6&seed=abc',
            dataType: 'json',
            success: (result) => {
            this.data.friends = result.results
          }
        })

        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (result) => {
            this.data.quoteInfo =  result
          }
        })

        const randomId = Math.floor(Math.random()*20)//creating random id for URL
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-form/${randomId}/`,
            success: (result) => {
            this.data.pokemonInfo = result
        }
    })

        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat',
            success: (result) => {
            this.data.meatText = result[0]
        }
    })

    }
}

const apimanager = new APIManager
apimanager.loadData()
console.log(apimanager.data)