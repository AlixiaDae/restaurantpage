function headerBar() {
    const header = document.createElement('div')
    const logo = document.createElement('h1')
    logo.textContent = "Salad Bowl"

    header.appendChild(logo)
    return document.body.appendChild(header)
}

export default headerBar;