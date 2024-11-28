import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Appbar from './component/Appbar'
import Footer from './component/Footer'

// pages
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import Categories from './pages/Categories/Categories'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

// styles
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Appbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
