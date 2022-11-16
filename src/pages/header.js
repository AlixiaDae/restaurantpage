import '../styles/headerstyle.css'


function headerBar() {
    const header = document.createElement('div')
    const logo = document.createElement('h1')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')

    header.classList.add('header-bar')
    logo.classList.add('logo')
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
    header.appendChild(homeBtn)
    header.appendChild(menuBtn)
    header.appendChild(contactBtn)
    return document.body.appendChild(header)
}

export default headerBar;