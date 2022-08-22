const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 9;

for(let i = 0; i < rows*3; i++){ //resimleri çekerken 3 ün katları şeklinde çekmek istediğimiz için 3 le çarptık en son sırada 2 veya 1 resim olmasın 3 olsun diye.
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomNumber(){
    return Math.floor(Math.random()* 10) + 300;
}

function getRandomSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`;
}