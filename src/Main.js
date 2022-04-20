import React from 'react'
import App from './componenet/App'
import Nav from './componenet/Nav'
import Home from './componenet/Home/Home'
import About from './componenet/About/About'
import Skills from './componenet/Skills/Skills'
import Contact from './componenet/contact/Contact'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'

export default function Main() {
    return (
        <BrowserRouter>
             <Nav />
             <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/about" element={<About />}></Route>
             <Route path="/skills" element={<Skills />}></Route>
             <Route path="/app" element={<App />}></Route>
             <Route path="/contact" element={<Contact />}></Route>
             </Routes>
        </BrowserRouter>
    )
}
