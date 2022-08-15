
const logFileText = async file => {
    const response = await fetch(file)
    const responseJson = await response.json()

    return responseJson
}



async function loadCards(fileDirectory, insertionDiv) {
    const cardDictionary = await logFileText(fileDirectory)

    const cardContainer = document.querySelector('#project-cards-container')
    
    cardContainer.innerHTML = '';

    

    
    for (const cardData of cardDictionary){
        const name = cardData['name'],
        intro = cardData['intro'],
        description = cardData['description'],
        imageUrl = cardData['imageUrl'],
        pageUrl = cardData['pageUrl'],
        githubUrl = cardData['githubUrl'],
        tags = cardData['tags'],
        createdDate = new Date(`
        ${cardData['createdDate']['month']}/
        ${cardData['createdDate']['day']}/
        ${cardData['createdDate']['year']}`)

        var newCard = document.createElement('div')
        newCard.className = 'blog-card spring-fever'
        newCard.style.background = `${imageUrl} center no-repeat`;
        newCard.style.backgroundSize = '100%'
        
        

        newCard.innerHTML = `
            <div class="title-content">
                <h3><a href="#">${name}</a></h3>
                <div class="intro">${intro}</div>
            </div>

            <div class="card-info">
            ${description}
                <div class="link-wrapper">
                    <a href="${pageUrl}">Project Page</a>
                    <a href="${githubUrl}">Source Code</a>
                </div>
            </div>

            <div class="utility-info">
                <ul class="utility-list">
                    <li><span class="licon icon-dat"></span>${createdDate.toString().split(' ')[1]} ${createdDate.getFullYear()} </li>
                    <li><span class="licon icon-tag"></span>${tags.join(', ')}</li>
                </ul>
            </div>

            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
        `

        cardContainer.appendChild(newCard)

        // let newCard = document.createElement('div')
        // // newCard.classList.add('blog-card spring-fever')
        // console.log(cardData)
        // console.log(newCard)
    }

}


loadCards('json/projects.json')