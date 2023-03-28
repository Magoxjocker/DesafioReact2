import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
