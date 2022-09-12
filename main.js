const url = "https://pokeapi.co/api/v2/pokemon"

const form = document.querySelector('form')

const id = document.querySelector('#pokemon-id')

const pokemon = document.querySelector('.pokemon')

const error = document.querySelector('.error')

form.reset();

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // if(id.value === ""){

    //     error.innerText = "Must input a correct Pokédex number"
    // } else {
    //     error.classList.add('hidden')
        
        fetch(`${url}/${id.value}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)

                const article = document.querySelector('#name')
                article.innerHTML = ""
                // const h2 = document.createElement('h2')

                // article.append(h2)
                pokemon.append(article)


                const pokeDex = `Pokedex Entry #: ` + res.id
                const h2 = document.createElement('h2')
                h2.innerText = pokeDex
                const image = document.createElement('img')
                const image2 = document.createElement('img')

                const article2 = document.querySelector('#name')
                article2.innerHTML = ""
                const name = res.name.charAt(0).toUpperCase() + res.name.slice(1)
                const pokeName = document.createElement('p')
                dexNum.innerHTML = `<strong>Pokémon Name: </strong>${name}`;
                article2.append(h2, image, image2, pokeName);

                image.src = res.sprites.front_default
                image2.src = res.sprites.front_shiny

                
                image.addEventListener('click', () => {

                    image.classList.toggle('back')
                   
                    if(image.classList.contains('back')){
                        image.src = res.sprites.back_default
                    } else {
                        image.src = res.sprites.front_default
                    }
                })

                image2.addEventListener('click', () => {
                    image2.classList.toggle('shiny')

                    if(image2.classList.contains('shiny')){
                        image2.src = res.sprites.front_shiny
                    } else {
                        image2.src = res.sprites.back_shiny
                    }
                })

                const article3 = document.querySelector('#type')
                article3.innerHTML = ""
                const type = res.types[0].type.name
                const type2 = res.types[1].type.name //error

                const types = document.createElement('p');
                types.innerHTML = `<strong>Type(s): </strong>${type}, ${type2}`;    

                // const types1 = document.createElement('p')
                // types1.innerHTML = `<strong>Type(s): </strong>${type}`;  
               
            //    const types2 = document.createElement('p')
            //    types2.innerHTML = `<strong>Type(s): </strong>${type2}`;
               
                // let arr = [];

                // for (let i = 0; i < res.types.length; i++) {
                //     arr.push(res.types[i].type.name)
                // };
                // console.log(arr)

                article3.append(types)
                // article3.append(types1,types2);
                

                const article4 = document.querySelector('#exp')
                article4.innerHTML = ""
                const exp = res.base_experience
                const exps = document.createElement('p')
                exps.innerHTML = `<strong>Base Experience: </strong>${exp} XP`
                article4.append(exps);



            })
            .catch((err) => console.log(err))
    }
)


