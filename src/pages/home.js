import mainImage from '../images/louis-hansel-MlPD-AzZYMg-unsplash.jpg'

function homePage() {

    const mainImg = document.createElement('div')
    mainImg.style.backgroundImage = `url(${mainImage})`;
    mainImg.classList.add('main-image')

    return mainImg
}

export default homePage