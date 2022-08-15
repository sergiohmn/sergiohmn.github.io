
const logFileText = async file => {
    const response = await fetch(file)
    const responseJson = await response.json()

    return responseJson
}



async function loadCards(fileDirectory, insertionDiv) {
    const cardDictionary = await logFileText(fileDirectory)
    const cardContainer = document.querySelector('#products-cards-container')

    

    for (const cardData of cardDictionary){
        let newCard = document.createElement('div')
        newCard.classList.add('blog-card spring-fever')
        console.log(cardData)
        console.log(newCard)
    }

}


loadCards('json/projects.json')