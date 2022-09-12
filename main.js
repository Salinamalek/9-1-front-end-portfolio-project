const url = "https://pokeapi.co/api/v2/pokemon"

const form = document.querySelector('form')

const id = document.querySelector('#pokemon-id')

const pokemon = document.querySelector('.pokemon')

const error = document.querySelector('.error')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(id.value === ""){

        error.innerText = "Must input a correct Pokemon ID"
    } else {
        error.classList.add('hidden')
        
        fetch(`${url}/${id.value}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)

                const article = document.createElement('article')
                const h2 = document.createElement('h2')
                const image = document.createElement('img')
               
                article.append(h2, image)
               
                pokemon.append(article)

               
                h2.innerText = res.name
                
                image.src = res.sprites.front_default


                
                image.addEventListener('click', () => {

                    image.classList.toggle('back')
                   
                    if(image.classList.contains('back')){
                        image.src = res.sprites.back_default
                    } else {
                        image.src = res.sprites.front_default
                    }
                })

            })
            .catch((err) => console.log(err))

    }

})
