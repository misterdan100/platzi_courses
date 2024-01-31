const imgSRC = document.querySelector('img')
const randomButton = document.querySelector('button')
const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_XLY3k9b7I2UVwm6d2CeG4FMgRjALsqNwOUQtznZwyBIB9oZS6Q5VAunAJ2N4PNUY'

function deleteIMG() {
    const figure = document.querySelector('figure')
    figure.innerHTML = 'No hay imagenes'
    console.log(imgSRC)
}

async function getPhotoCat(url) {
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        return datos
    } catch (error) {
        deleteIMG()
    }
}

async function showRandomCats(urlAPI) {
    
    const datosAPI = await getPhotoCat(urlAPI)
    const randomCatsSection = document.querySelector('#random-container')
    randomCatsSection.innerHTML = ''
    
    for(let catImg of datosAPI) {
        let temporalDiv = `
                <div class="bg-white hover:bg-yellow-300 hover:cursor-pointer transition p-1 grid justify-center">
                <figure class="font-bold text-4xl relative">
                    <p class="favorite-button absolute right-2 top-2 bg-transparent hover:bg-gray-200 hover:cursor-pointer hover:shadow-lg hover:scale-110 transition p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </p>
                    <img class="max-w-52 h-52 shadow-xl rounded-xl object-cover"
                        src="${catImg.url}"
                        alt="foto gatito aleatorio">
                </figure>

            </div>
        `
        randomCatsSection.innerHTML += temporalDiv
    }

}

randomButton.addEventListener('click', () => showRandomCats(urlAPI))


showRandomCats(urlAPI)

// fetch('https://api.thecatapi.com/v1/breeds?limit=10&page=1')
//     .then(response => response.json())
//     .then(data => {
//         const breeds = []
//         for(let breed of data) {
//             breeds.push(breed.name + ' - ' + breed.id)
//         }
//         console.log(breeds)
//     })