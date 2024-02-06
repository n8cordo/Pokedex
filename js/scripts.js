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

for (let i=0; i<pokemonList.length; i++) {
    document.write (pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');
    if (pokemonList[i].height <= 1.0) {
    document.write ('<br>');
    }
    else{
        document.write ('That\s a big pokemon!');
        document.write('<br>')
    }
}