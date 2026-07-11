import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Modalidades from './pages/Modalidades.jsx'
import Instrutores from './pages/Instrutores.jsx'
import Atendimentos from './pages/Atendimentos.jsx'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/modalidades" element={<Modalidades />} />
            <Route path="/instrutores" element={<Instrutores />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
