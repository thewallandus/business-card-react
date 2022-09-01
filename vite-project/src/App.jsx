import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './info'
import Contact from './contact'
import ProfileImg from './profileimg'
import './App.css'
import Footer from './footer'

function App() {

  return (
      <div className='container'>
          <ProfileImg/>
          <div className="bottom-container">
            <Contact/>
            <Info/>
            <Footer/>
          </div>
      </div>
  )
}

export default App
