import React from 'react'
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Boost from "./components/Boost.js"
import Advanced from "./components/Advanced.js"
import Showcase from "./components/Showcase.js"
import Shortener from './components/Shortener.js'

const App = () => {
  return (
    <>
      <Header/>
      <Showcase/>
      <Shortener/>
      <Advanced/>
      <Boost/>
      <Footer/>
    </>
  )
}

export default App