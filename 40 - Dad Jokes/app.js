const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//async ile api den veri çekme yeni yöntem.
async function generateJoke(){

    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    
    jokeEl.innerHTML = data.joke;
}

//then ile api den veri çekme eski yöntemdir.
/* function generateJoke(){

    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json)
    .then((data) => {
        jokeEl.innerHTML = data.joke;
    })
} */