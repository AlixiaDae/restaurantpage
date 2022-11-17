import homePage from "./pages/home";
import menuPage from "./pages/menu"

homePage.render()

homePage.domArray.forEach(element => {
    element.addEventListener('click', () => {
        menuPage.render()
    })
})