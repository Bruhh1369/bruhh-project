import React, { useState } from 'react'
import Footer from './parts/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navigation from './parts/navigation'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App