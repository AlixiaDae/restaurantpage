import navBar from "./pages/navbar";
import home from './pages/home'



const content = document.getElementById('content')
content.appendChild(navBar())

document.body.appendChild(home())