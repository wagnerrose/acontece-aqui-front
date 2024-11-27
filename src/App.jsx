import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Appbar from './component/Appbar'

// pages
import Home from './pages/Home'
import Events from './pages/Events'
import Categories from './pages/Categories'
import About from './pages/About'

// styles
import './App.css'
import './component/Appbar.css'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
