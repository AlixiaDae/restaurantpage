import '../styles/home.css'
import Salad from '../images/salad.jpg'

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
    const searchWrapper = document.createElement('div')
    const searchBar = document.createElement('input')
    const searchBtn = document.createElement('button')
    const imageCredit = document.createElement('a')
    const imageText = document.createTextNode('Photo by Louis Hansel on Unsplash')

    messageWrapper.classList.add('message-wrapper')
    mainMessage.classList.add('message')
    searchWrapper.classList.add('search-wrapper')
    searchBar.classList.add('searchbar')
    searchBtn.classList.add('search-button')
    imageCredit.classList.add('main-image-credit')

    mainMessage.textContent = "Experience the freshness of life!"
    searchBar.placeholder = "Search for a store near you!"
    searchBtn.textContent = "Search"
    imageCredit.title = "my text"
    imageCredit.href = "https://unsplash.com/s/photos/salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"

    messageWrapper.appendChild(mainMessage)
    searchWrapper.appendChild(searchBar)
    searchWrapper.appendChild(searchBtn)
    messageWrapper.appendChild(searchWrapper)
    imageCredit.appendChild(imageText)
    messageWrapper.appendChild(imageCredit)
    return headerContainer.appendChild(messageWrapper)
}

function content() {
    const contentContainer = document.createElement('div')
    const subHeadWrapper = document.createElement('div')
    const subHeader = document.createElement('h2')
    const sub = document.createElement('div')
    const salad = document.createElement('img')

    subHeader.textContent = "Looking to refresh yourself?"
    sub.textContent = `Here at Salad Bowl it is our belief that fresh and healthy are the best ingredients to a green and peaceful lifestyle! Sourced from local ingredients, our bowls are guaranteed to reflect nature around us, which means, other than our regular menu, each location may have their very own specialties.`;

    contentContainer.classList.add('content-container')
    subHeadWrapper.classList.add('sub-wrapper')
    subHeader.classList.add('sub-header')
    sub.classList.add('sub')
    salad.classList.add('salad')

    salad.src = Salad
    subHeadWrapper.appendChild(subHeader)
    subHeadWrapper.appendChild(sub)
    contentContainer.appendChild(subHeadWrapper)
    contentContainer.appendChild(salad)

    return document.body.appendChild(contentContainer)
}



function render() {
    headerBar()
    headerContent()
    content()
}

export default render;