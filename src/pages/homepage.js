import mainImage from '../images/louis-hansel-MlPD-AzZYMg-unsplash.jpg'

function homePage() {
    const main = document.createElement('div')
    main.style.backgroundImage = `url(${mainImage})`;
    main.classList.add('main-image')

    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message-wrapper')
    main.appendChild(messageWrapper)

    const mainMessage = document.createElement('div')
    mainMessage.classList.add('main-message')
    mainMessage.textContent = 'Experience the freshness of life!'
    messageWrapper.appendChild(mainMessage)

    const searchbar = document.createElement('input')
    searchbar.classList.add('searchbar')
    searchbar.placeholder = 'Search for a store near you!'
    messageWrapper.appendChild(searchbar)

    const searchBtn = document.createElement('button')
    searchBtn.classList.add('search-button')
    searchBtn.textContent = 'Search'
    messageWrapper.appendChild(searchBtn)

    return main
}

export default homePage