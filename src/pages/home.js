import '../styles/home.css'
import Icon from '../images/salad.jpg'


function headerBar() {
    const header = document.createElement('div')
    const logo = document.createElement('h1')
    const headerPageTabs = document.createElement('div')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')

    header.classList.add('header-bar')
    logo.classList.add('logo')
    headerPageTabs.classList.add('header-page-tabs')
    homeBtn.classList.add('tab-buttons')
    menuBtn.classList.add('tab-buttons')
    contactBtn.classList.add('tab-buttons')

    homeBtn.id = 'home-button'
    contactBtn.id = 'contact-button'

    logo.textContent = 'Salad Bowl'
    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    contactBtn.textContent = 'Contact'

    header.appendChild(logo)
    headerPageTabs.appendChild(homeBtn)
    headerPageTabs.appendChild(menuBtn)
    headerPageTabs.appendChild(contactBtn)
    header.appendChild(headerPageTabs)
    return document.body.appendChild(header)
}



function render() {
    headerBar()
}

export default render;