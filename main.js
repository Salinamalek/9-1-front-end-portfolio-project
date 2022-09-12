const url = "https://pokeapi.co/api/v2/pokemon"

const form = document.querySelector('form')

const id = document.querySelector('#pokemon-id')

const pokemon = document.querySelector('.pokemon')

const error = document.querySelector('.error')

form.reset();

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(id.value === ""){

        error.innerText = "Must input a correct Pokédex number"
    } else {
        error.classList.add('hidden')
        
        fetch(`${url}/${id.value}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)

                const article = document.querySelector('#name')
                article.innerHTML = ""
                const h2 = document.createElement('h2')
                const image = document.createElement('img')
                const image2 = document.createElement('img')
               
                article.append(h2, image, image2)
               
                pokemon.append(article)

                const name = res.name.charAt(0).toUpperCase() + res.name.slice(1)
                h2.innerText = name
                

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

                const article2 = document.querySelector('#dexNum')
                article2.innerHTML = ""
                const dex = res.id
                const dexNum = document.createElement('p')
                dexNum.innerHTML = `<strong>Pokédex #: </strong>${dex}`;
                article2.append(dexNum);
            })
            .catch((err) => console.log(err))
    }
})

