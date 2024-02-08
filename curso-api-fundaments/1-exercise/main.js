const imgSRC = document.querySelector('img')
const randomButton = document.querySelector('button')
const randomCatsSection = document.querySelector('#random-container')
const favoriteCatsSection = document.querySelector('#favorite-container')
const footerImg = document.querySelector('#footer-img')
const uploadingButton = document.querySelector('#uploadingButton')
const inputFile = document.querySelector('#file')
const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=6'
const favoriteUrlAPI = 'https://api.thecatapi.com/v1/favourites'
const uploadUrlAPI = 'https://api.thecatapi.com/v1/images/upload'
const APIKey = 'live_XLY3k9b7I2UVwm6d2CeG4FMgRjALsqNwOUQtznZwyBIB9oZS6Q5VAunAJ2N4PNUY'


randomButton.addEventListener('click', () => showRandomCats(urlAPI))
randomCatsSection.addEventListener('click', addFavorites)
favoriteCatsSection.addEventListener('click', deleteFavorite)
uploadingButton.addEventListener('click', uploadMichiPhoto)
inputFile.addEventListener('change', filePreview)



async function getPhotoCat(url) {
    try {
        const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': 'live_XLY3k9b7I2UVwm6d2CeG4FMgRjALsqNwOUQtznZwyBIB9oZS6Q5VAunAJ2N4PNUY',
                'content-type': 'application/json'
            }
        })
        const datos = await respuesta.json()
        return datos
    } catch (error) {
        console.log(error)
    }
}

async function showRandomCats(urlAPI, sectionDiv) {
    const datosAPI = await getPhotoCat(urlAPI)
    sectionDiv.innerHTML = ''
    footerImg.src = datosAPI[0].url || datosAPI[0].image.url

    if (datosAPI.length) {
        for (let catImg of datosAPI) {
            let temporalDiv = `
                    <div class="bg-white hover:bg-yellow-300 hover:cursor-pointer transition p-1 grid justify-center">
                    <figure class="font-bold text-4xl relative">
                        <p id="${catImg.id}" class="favorite-button absolute right-2 top-2 bg-transparent hover:bg-gray-200 hover:cursor-pointer hover:shadow-lg hover:scale-110 transition p-1 rounded-full">
                            <svg id="${catImg.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-8 h-8 hover:text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </p>
                        <img class="max-w-52 h-52 shadow-xl rounded-xl object-cover"
                            src="${catImg.url || catImg.image.url}"
                            alt="foto gatito aleatorio">
                    </figure>
    
                </div>
            `
            sectionDiv.innerHTML += temporalDiv
        }


    } else {
        sectionDiv.innerHTML = `
            <span class="text-red-500 font-bold py-6 px-8">
                No Cats to Show :(
            </span>
        `
    }
}

async function loadFavoriteCats(url, sectionDiv) {
    const datosAPI = await getPhotoCat(url)
    sectionDiv.innerHTML = ''

    if(datosAPI.length) {
        for(let catImg of datosAPI) {
            let temporalDiv = `
                    <div class="bg-white hover:bg-yellow-300 hover:cursor-pointer transition p-1 grid justify-center">
                    <figure class="font-bold text-4xl relative">
                        <p id="${catImg.id}" class="favorite-button absolute right-2 top-2 bg-transparent hover:bg-gray-200 hover:cursor-pointer hover:shadow-lg hover:scale-110 transition p-1 rounded-full">
                            <svg id="${catImg.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        </p>

                        <img class="max-w-52 h-52 shadow-xl rounded-xl object-cover"
                            src="${catImg.image.url}"
                            alt="foto gatito aleatorio">
                    </figure>
    
                </div>
            `
            sectionDiv.innerHTML += temporalDiv
        }
    } else {
        sectionDiv.innerHTML = `
            <span class="text-red-500 font-bold py-6 px-8">
                No Cats to Show :(
            </span>
        `
    }
}

async function addFavorites(e) {
    const rawBody = JSON.stringify({
        "image_id": `${e.target.id}`,
        "sub_id":"user-123"
    })

    const newFavourite = await fetch(
        "https://api.thecatapi.com/v1/favourites", 
            {
                method: 'POST',
                headers: { 'x-api-key': 'live_XLY3k9b7I2UVwm6d2CeG4FMgRjALsqNwOUQtznZwyBIB9oZS6Q5VAunAJ2N4PNUY',
                'content-type': 'application/json'
            } ,
                body: rawBody
            }
        )
    const response = await newFavourite.json()
    alert(response.message)
    loadFavoriteCats(favoriteUrlAPI, favoriteCatsSection)
}

async function deleteFavorite(e) {
    // console.log(e.target)
    if(confirm('Eliminar michi de favoritos?')) {
        const urlToDelete = `https://api.thecatapi.com/v1/favourites/${e.target.id}`
        const deleteCat = await fetch(urlToDelete, {
            method: 'DELETE',
            headers: { 'x-api-key': 'live_XLY3k9b7I2UVwm6d2CeG4FMgRjALsqNwOUQtznZwyBIB9oZS6Q5VAunAJ2N4PNUY',
            'content-type': 'application/json'
        }
        })
        const response = await deleteCat.json()
        loadFavoriteCats(favoriteUrlAPI, favoriteCatsSection)
        alert(response.message)
    }
}

async function filePreview() {
    const formInput = document.querySelector('#file').files
    if(formInput.length > 0 ) {
        const fileReader = new FileReader()

        fileReader.onload = e => {
            const imagePreview = document.querySelector('#image-preview')
            imagePreview.src = e.target.result
        }

        fileReader.readAsDataURL(formInput[0])
    }

}

async function uploadMichiPhoto() {
    const form = document.querySelector('#uploadingForm')
    const formData = new FormData(form)

    const res = await fetch(uploadUrlAPI, {
        method: 'POST',
        headers: {
            'X-API-KEY': APIKey,
            // 'Content-Type': 'multipart/form-data'
        },
        body: formData,

    })
    
    const data = await res.json()
    console.log(data)

}

showRandomCats(urlAPI, randomCatsSection)
loadFavoriteCats(favoriteUrlAPI, favoriteCatsSection)
