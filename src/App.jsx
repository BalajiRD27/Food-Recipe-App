import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import Favorites from './components/Favorites/Favorites'

function App() {

  return (
    <div>
     <div className='min-h-screen text-lg bg-white text-gray-500'>
     <NavBar />

     <Routes>
      <Route 
      path='/'
      element= { <Home />}
      />

      <Route
         path='/item-details/:id'
         element= { <Details />} 
      />

      <Route
      path='/favorites'
      element={ <Favorites /> } />
     </Routes>

     </div>
    </div>
  )
}

export default App
