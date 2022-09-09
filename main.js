const url = "https://pokeapi.co/api/v2/pokemon/"


fetch(url)
.then((res) => res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err));