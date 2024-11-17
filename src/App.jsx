import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appbar from './component/Appbar'


// pages imports
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
