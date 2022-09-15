const url = "https://pokeapi.co/api/v2/pokemon"

const form = document.querySelector('form')

const id = document.querySelector('#pokemon-id')

const pokemon = document.querySelector('.pokemon')

const error = document.querySelector('.error')



form.addEventListener("submit", (event) => {
    event.preventDefault();


    if(id.value === ""){
        error.classList.remove('hidden');
        error.innerText = "Must input a valid Pokédex entry # !";
        
        const clear = document.querySelectorAll('.pokeInfo article')
        clear.forEach(articles => {
            articles.innerText = ""
        })
    } else {
        error.classList.add('hidden')
        error.innerText = ""
    };


        fetch(`${url}/${id.value}`)
            .then((res) => res.json())
            .then((res) => {


                const article = document.querySelector('#name');
                article.innerHTML = "";
                pokemon.append(article);

                const pokeDex = `Pokédex Entry #: ` + res.id;
                const h2 = document.createElement('h2');
                h2.innerText = pokeDex;
                const image = document.createElement('img');
                const image2 = document.createElement('img');

                const article2 = document.querySelector('#name');
                article2.innerHTML = "";
                // console.log(res.name)

                const name = res.name.charAt(0).toUpperCase() + res.name.slice(1); //error

                const pokeName = document.createElement('p');
                dexNum.innerHTML = `<strong>Pokémon Name: </strong>${name}`;
                article2.append(h2, image, image2, pokeName);

                image.src = res.sprites.front_default;
                image2.src = res.sprites.front_shiny;
                
                image.addEventListener('click', () => {

                    image.classList.toggle('back')
                   
                    if(image.classList.contains('back')){
                        image.src = res.sprites.back_default
                    } else {
                        image.src = res.sprites.front_default
                    }
                });

                image2.addEventListener('click', () => {
                    image2.classList.toggle('shiny')

                    if(image2.classList.contains('shiny')){
                        image2.src = res.sprites.front_shiny
                    } else {
                        image2.src = res.sprites.back_shiny
                    }
                });

                const article3 = document.querySelector('#type');
                article3.innerHTML = "";
                const type = res.types[0].type.name.charAt(0).toUpperCase() + res.types[0].type.name.slice(1);
                
                const types = document.createElement('p');
                    if(res.types.length === 1){
                        types.innerHTML = `<strong>Type(s): </strong>${type}`;   
                    } else if(res.types.length === 2) {
                        const type2 = res.types[1].type.name.charAt(0).toUpperCase() + res.types[1].type.name.slice(1)
                        types.innerHTML = `<strong>Type(s): </strong>${type}, ${type2}`
                    };
                article3.append(types);

                const article4 = document.querySelector('#exp');
                article4.innerHTML = "";
                const exp = res.base_experience;
                const exps = document.createElement('p');
                exps.innerHTML = `<strong>Base Experience: </strong>${exp} XP`;
                article4.append(exps);

                const article5 = document.querySelector('#height');
                article5.innerHTML = "";
                const height = res.height;
                const heights = document.createElement('p');
                heights.innerHTML = `<strong>Height: </strong>${height/10} meter(s)`;
                article5.append(heights);

                const article6 = document.querySelector('#weight');
                article6.innerHTML = "";
                const weight = res.weight;
                const weights = document.createElement('p');
                weights.innerHTML = `<strong>Weight: </strong>${weight/10} kilogram(s)`;
                article6.append(weights);
                

                const article7 = document.querySelector('#numAbilities');
                article7.innerHTML = "";
                const abilities = res.abilities.length;
                const ability = document.createElement('p');
                ability.innerHTML = `<strong>Number of Abilities: </strong>${abilities}`;
                article7.append(ability);


                const article8 = document.querySelector('#numMoves');
                article8.innerHTML = "";
                const moves = res.moves.length;
                const move = document.createElement('p');
                move.innerHTML = `Number of Moves: ${moves}`;
                article8.append(move);

                const gens = document.querySelector('#gen');
                gens.innerHTML = "";
                const gen = document.createElement('p');
                if(res.id >= 1 && res.id <= 151){
                    gen.innerHTML = `Generation: 1`
                } else if(res.id >= 152 && res.id <= 251){
                    gen.innerHTML = `Generation: 2`
                } else if(res.id >= 252 && res.id <= 386){
                    gen.innerHTML = `Generation: 3`
                } else if(res.id >= 387 && res.id <= 493){
                    gen.innerHTML = `Generation: 4`
                } else if(res.id >= 494 && res.id <= 649){
                    gen.innerHTML = `Generation: 5`
                } else if(res.id >= 650 && res.id <= 721){
                    gen.innerHTML = `Generation: 6`
                } else if(res.id >= 722 && res.id <= 809){
                    gen.innerHTML = `Generation: 7`
                } else {
                    gen.innerHTML = `Generation: 8`
                }
                article4.prepend(gen);


                form.reset();
            })
            .catch((err) => console.log(err))
});