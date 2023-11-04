import React from 'react'
import NavBar from './NavBar'
import BotList from './BotList'
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1 id='header'> Bot Realm X </h1>
      <NavBar className='nav'/>
      <BotList/>
    </div>
  )
}

export default App