import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import BoxLetters from './pages/BoxLetters'
import Sign from './pages/Sign'
import DigitalPrinting from './pages/DigitalPrinting'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Communication from './pages/Communication'
 

function App() {


  return (
    <>

      {/* ROOT ROUTES */}

      <BrowserRouter>
        <Navbar />
     

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />


          {/* Services */}
          <Route
            path="/box-letters"
            element={<BoxLetters />}
          />

          <Route
            path="/sign"
            element={<Sign />}
          />

          <Route
            path="/digital-printing"
            element={<DigitalPrinting />}
          />


          {/* Other Pages */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/about-us"
            element={<About />}
          />

          <Route
            path="/communication"
            element={<Communication />}
          />


          {/* 404 */}
          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />

        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
