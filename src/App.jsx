import { React } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Home from './components/Home'
import Main from './components//Main'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import { DataProvider } from "./components/Context";

function App() {
  return (
    <DataProvider>
    <div >  
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-resume" element={<Main />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
    </DataProvider>
  )
}

export default App