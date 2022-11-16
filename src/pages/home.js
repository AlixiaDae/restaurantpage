import '../styles/home.css'

function headerBar() {
    const headerContainer = document.createElement('div')
    const header = document.createElement('div')
    const logo = document.createElement('h1')
    const headerPageTabs = document.createElement('div')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const locationBtn = document.createElement('button')
    const aboutBtn = document.createElement('button')
    const contactBtn = document.createElement('button')

    headerContainer.classList.add('header-container')
    header.classList.add('header-bar')
    logo.classList.add('logo')
    headerPageTabs.classList.add('header-page-tabs')
    homeBtn.classList.add('tab-buttons')
    menuBtn.classList.add('tab-buttons')
    locationBtn.classList.add('tab-buttons')
    aboutBtn.classList.add('tab-buttons')
    contactBtn.classList.add('tab-buttons')

    homeBtn.id = 'home-button'
    contactBtn.id = 'contact-button'

    logo.textContent = 'Salad Bowl'
    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    locationBtn.textContent = 'Location'
    aboutBtn.textContent = 'About'
    contactBtn.textContent = 'Contact'


    headerContainer.appendChild(header)
    header.appendChild(logo)
    headerPageTabs.appendChild(homeBtn)
    headerPageTabs.appendChild(menuBtn)
    headerPageTabs.appendChild(locationBtn)
    headerPageTabs.appendChild(aboutBtn)
    headerPageTabs.appendChild(contactBtn)
    header.appendChild(headerPageTabs)
    return document.body.appendChild(headerContainer)
}

function headerContent() {
    const headerContainer = document.querySelector('.header-container')
    const messageWrapper = document.createElement('div')
    const mainMessage = document.createElement('div')
    const searchBar = document.createElement('input')
    const imageCredit = document.createElement('a')
    const imageText = document.createTextNode('Photo by Louis Hansel on Unsplash')

    messageWrapper.classList.add('main-message-wrapper')
    mainMessage.classList.add('main-message')
    searchBar.classList.add('searchbar')
    imageCredit.classList.add('main-image-credit')

    mainMessage.textContent = "Experience the freshness of life!"
    searchBar.placeholder = "Search for a store near you!"
    imageCredit.title = "my text"
    imageCredit.href = "https://unsplash.com/s/photos/salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"

    messageWrapper.appendChild(mainMessage)
    messageWrapper.appendChild(searchBar)
    imageCredit.appendChild(imageText)
    messageWrapper.appendChild(imageCredit)
    return headerContainer.appendChild(messageWrapper)
}



function render() {
    headerBar()
    headerContent()
}

export default render;