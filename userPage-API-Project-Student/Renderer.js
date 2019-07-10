// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(users)
        $(".user-container").append(newHTML);
    }

    _renderFriends(friends) {
        $(".friends-container").empty()
        const source = $('#user-friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(friends)
        $(".friends-container").append(newHTML);
    }

    _renderQuote(quoteInfo) {
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(quoteInfo)
        $(".quote-container").append(newHTML);
    }

    _renderPokemon(pokemonInfo) {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemonInfo)
        $(".pokemon-container").append(newHTML);
    }

    _renderMeat(meatText) {
        $(".meat-container").empty()
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(meatText)
        $(".meat-container").append(newHTML);
    }

    render(data){
        //invokes all the individual _render methods
        this._renderUsers(data.users),
        this._renderFriends(data.friends),
        this._renderQuote(data.quoteInfo),
        this._renderPokemon(data.pokemonInfo),
        this._renderMeat(data.meatText)
    }
}

//Nandlebars helper
    
Handlebars.registerHelper('toProperCase', function(name){
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
})