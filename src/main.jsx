import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import './components/navbar/Navbar.css'
// import './components/about me/About.css'

// import './components/home/Services.css'

import Navbar from './components/navbar/Navbar.jsx'
import Skills from './components/skills/Skills.jsx'
import Contact from './components/contact me/Contact.jsx'
import Services from './components/home/Services.jsx'
import About from './components/about me/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <About/>
    <Skills/>
    <Services/>
    
    <Contact/>
  </StrictMode>,
)


