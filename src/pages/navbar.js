function navBar() {
    const nav = document.createElement('nav')
    nav.classList.add('nav')

    const logo = document.createElement('a')
    logo.classList.add('logo')
    logo.textContent = 'Salad Bowl'
    //eventlistener for home
    nav.appendChild(logo)

    const mainLinks = document.createElement('div')
    mainLinks.classList.add('main-links')
    nav.appendChild(mainLinks)

    const homeBtn = document.createElement('a')
    homeBtn.classList.add('nav-button')
    homeBtn.textContent = 'Home'
    //eventlistener for home
    mainLinks.appendChild(homeBtn)

    const menuBtn = document.createElement('a')
    menuBtn.classList.add('nav-button')
    menuBtn.textContent = 'Menu'
    //eventlistener for menu
    mainLinks.appendChild(menuBtn)

    const contactBtn = document.createElement('a')
    contactBtn.classList.add('nav-button')
    contactBtn.textContent = 'Contact'
    //eventlistener for contact
    mainLinks.appendChild(contactBtn)

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('nav-button')
    orderBtn.classList.add('order')
    orderBtn.textContent = 'Order'
    //eventlistener for order
    nav.appendChild(orderBtn)

    return nav
}

export default navBar