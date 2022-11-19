import navBar from "./pages/navbar";
import homePage from './pages/homepage'

function createContent() {
    const content = document.createElement('div')
    content.id = 'content'
    document.body.appendChild(content)
    return content
}

function loadPage(content) {
    content.appendChild(navBar())
    content.appendChild(homePage())
}

loadPage(createContent())
loadPage(homePage())