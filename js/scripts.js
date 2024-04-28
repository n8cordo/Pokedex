let pokemonRepository = (function () {

let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison'],
    },

    {
        name: 'Charmander',
        height: 0.6,
        type: ['fire'],
    },

    {
        name: 'Lapras',
        height: 2.5,
        type: ['ice', 'water'],
    },

];

function add(pokemon){
    if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
    }
}

function getAll(){
    return pokemonList;
}

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    addEventListener(button, pokemon);
}

function addEventListener(button, pokemon){
    button.addEventListener("click",function(){
    showDetails(pokemon)
    })
    function showDetails(pokemon){
        console.log(pokemon);
    }
}

return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
}
})();

pokemonRepository.add({
    name: 'Flaffy',
    height: 0.78,
    type: ['electric'],
});

pokemonRepository.getAll().forEach (function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});