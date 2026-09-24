import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DecorativeBackground from './components/DecorativeBackground'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter basename="/gustv-artworks">

      <ScrollToTop />

      <Navbar />

      <div className="site-decoration-layer">
        <DecorativeBackground />
      </div>

      <main className="site-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/servicos"
            element={<Servicos />}
          />

          <Route
            path="/sobre"
            element={<Sobre />}
          />

          <Route
            path="/contato"
            element={<Contato />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App