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

return{
    add: add,
    getAll: getAll
}
})();

pokemonRepository.add({
    name: 'Flaffy',
    height: 0.78,
    type: ['electric'],
});

pokemonRepository.getAll().forEach (function (pokemon) {
    document.write ( pokemon.name + '  height ' + pokemon.height );
    document.write ('<br>');

    if (pokemon.height > 1 ) {
        document.write (' That\'s a big Pokemon!' )
        document.write ('<br>');
    }
    
  
})