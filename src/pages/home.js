import '../styles/home.css'
import headerSalad from '../images/louis-hansel-MlPD-AzZYMg-unsplash.jpg'
import Salad from '../images/salad.jpg'
import Salad2 from '../images/mariana-medvedeva-fk6IiypMWss-unsplash.jpg'
import CuttingBoard from '../images/lukas-blazek-f-TWhXOrLiU-unsplash.jpg'
import SaladItem from '../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import SaladItem2 from '../images/freddy-g-m3OuPu9oTuY-unsplash.jpg'
import SaladItem3 from '../images/dovile-ramoskaite-xX9SmqQCbFY-unsplash.jpg'

const homePage = (() => {

    const render = () => {
        _headerBar()
        _headerContent()
        _subContent()
        _subContent2()
        _footer()
    }

    const _headerBar = () => {
        const headerContainer = document.createElement('div')
        const header = document.createElement('div')
        const logo = document.createElement('h1')
        const headerPageTabs = document.createElement('div')
        const menuBtn = document.createElement('a')
        const locationBtn = document.createElement('a')
        const aboutBtn = document.createElement('a')
        const contactBtn = document.createElement('a')
        const orderBtn = document.createElement('button')
    
        headerContainer.classList.add('header-container')
        header.classList.add('header-bar')
        logo.classList.add('logo')
        headerPageTabs.classList.add('header-page-tabs')
        orderBtn.classList.add('order-button')
        menuBtn.classList.add('tab-buttons')
        locationBtn.classList.add('tab-buttons')
        aboutBtn.classList.add('tab-buttons')
        contactBtn.classList.add('tab-buttons')

        headerContainer.style.backgroundImage = `url(${headerSalad})`
    
        contactBtn.id = 'contact-button'
    
        logo.textContent = 'Salad Bowl'
        orderBtn.textContent = 'Order Now!'
        menuBtn.textContent = 'Menu'
        locationBtn.textContent = 'Location'
        aboutBtn.textContent = 'About'
        contactBtn.textContent = 'Contact'

        menuBtn.href = "./menu.js"
    
        headerContainer.appendChild(header)
        header.appendChild(logo)
        header.appendChild(headerPageTabs)
        header.appendChild(orderBtn)
        headerPageTabs.appendChild(menuBtn)
        headerPageTabs.appendChild(locationBtn)
        headerPageTabs.appendChild(aboutBtn)
        headerPageTabs.appendChild(contactBtn)
        
        return document.body.appendChild(headerContainer)
    }
    
    const _headerContent = () => {
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
    
    const _subContent = () => {
        const subContentContainer = document.createElement('div')
        const subHeadWrapper = document.createElement('div')
        const subHeader = document.createElement('h2')
        const sub = document.createElement('div')
        const saladWrapper =document.createElement('div')
        const saladCard = document.createElement('img')
        const salad = document.createElement('img')
    
        subHeader.textContent = "Looking to refresh yourself?"
        sub.textContent = `Here at Salad Bowl it is our belief that fresh and healthy are the best ingredients to a green and peaceful lifestyle! Sourced from local ingredients, our bowls are guaranteed to reflect nature around us. Which means, other than our regular menu, each location may have their very own specialties!`;
    
        subContentContainer.classList.add('sub-content-container')
        subHeadWrapper.classList.add('sub-wrapper')
        subHeader.classList.add('sub-header')
        sub.classList.add('sub')
        saladWrapper.classList.add('salad-wrapper')
        saladCard.classList.add('salad-2')
        salad.classList.add('salad')
    
        salad.src = Salad
        saladCard.src = Salad2
    
        subHeadWrapper.appendChild(subHeader)
        subHeadWrapper.appendChild(sub)
        saladWrapper.appendChild(saladCard)
        saladWrapper.appendChild(salad)
        subContentContainer.appendChild(subHeadWrapper)
        subContentContainer.appendChild(saladWrapper)
    
        return document.body.appendChild(subContentContainer)
    }

    const _subContent2 = () => {
        const subContentContainer2 = document.createElement('div')
        const favoritesWrapper = document.createElement('div')
        const favoritesHeader =  document.createElement('h2')
        const itemsWrapper = document.createElement('div')
        const firstItemWrapper = document.createElement('div')
        const secondItemWrapper = document.createElement('div')
        const thirdItemWrapper = document.createElement('div')
        const firstItem = document.createElement('img')
        const firstItemText = document.createElement('p')
        const secondItem = document.createElement('img')
        const secondItemText = document.createElement('p')
        const thirdItem = document.createElement('img')
        const thirdItemText = document.createElement('p')
        const wrapperArray = [firstItemWrapper,secondItemWrapper,thirdItemWrapper]
        
        favoritesHeader.textContent = "Menu Favorites"
        firstItemText.textContent = "Farmers' Feast"
        secondItemText.textContent = "Honey Lemon"
        thirdItemText.textContent = "Strawberry Explosion"

        subContentContainer2.classList.add('sub-content-container2')
        favoritesWrapper.classList.add('favorites-wrapper')
        favoritesHeader.classList.add('favorites-header')
        itemsWrapper.classList.add('items-wrapper')

        subContentContainer2.style.backgroundImage = `url(${CuttingBoard})`
        firstItem.src = SaladItem
        secondItem.src = SaladItem2
        thirdItem.src = SaladItem3

        wrapperArray.forEach(wrapper => {
            itemsWrapper.appendChild(wrapper)
        })

        firstItemWrapper.appendChild(firstItem)
        firstItemWrapper.appendChild(firstItemText)
        secondItemWrapper.appendChild(secondItem)
        secondItemWrapper.appendChild(secondItemText)
        thirdItemWrapper.appendChild(thirdItem)
        thirdItemWrapper.appendChild(thirdItemText)
        favoritesWrapper.appendChild(favoritesHeader)
        favoritesWrapper.appendChild(itemsWrapper)
        subContentContainer2.appendChild(favoritesWrapper)

        return document.body.appendChild(subContentContainer2)
    }

    const _footer = () => {
        const footerContainer = document.createElement('div')
        const footerWrapper = document.createElement('div')
        const footerLeft = document.createElement('div')
        const footerRight = document.createElement('div')
        const footerMenu = document.createElement('p')
        const footerLocation = document.createElement('p')
        const footerHiring = document.createElement('p')
        const footerContact = document.createElement('p')
        const footerCopyRight = document.createElement('div')
        const footerLogo = document.createElement('div')
        const footerLeftArray = [footerMenu,footerLocation,footerHiring,footerContact]

        footerContainer.classList.add('footer-container')
        footerWrapper.classList.add('footer-wrapper')
        footerLeft.classList.add('footer-left')
        footerRight.classList.add('footer-right')
        footerLogo.classList.add('footer-logo')
        footerCopyRight.classList.add('footer-copyright')

        footerCopyRight.textContent = "© 2022 Salad Bowl"
        footerLogo.textContent = "Salad Bowl"
        footerMenu.textContent = "Menu"
        footerLocation.textContent = "Location"
        footerHiring.textContent = "Hiring"
        footerContact.textContent = "Contact Us"
        
        footerLeftArray.forEach(p => {
            footerLeft.appendChild(p)
        })

        footerWrapper.appendChild(footerLeft)
        footerWrapper.appendChild(footerRight)
        footerRight.appendChild(footerLogo)
        footerRight.appendChild(footerCopyRight)
        footerContainer.appendChild(footerWrapper)

        return document.body.appendChild(footerContainer)
    }

    return {
        render
    }

})()

export default homePage;