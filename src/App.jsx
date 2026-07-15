import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Modalidades from './pages/Modalidades.jsx'
import ModalidadesInfantis from './pages/ModalidadesInfantis.jsx'
import Instrutores from './pages/Instrutores.jsx'
import Atendimentos from './pages/Atendimentos.jsx'
import './App.css'

// Título por rota. O <title> estático do index.html (usado por bots que
// não executam JS, como o preview de link do WhatsApp) continua sendo o
// da Home — isso aqui melhora a aba do navegador e a indexação do
// Google, que executa JS antes de indexar. Não substitui um <title>
// diferente por página nos crawlers que não rodam JS; isso só um
// framework com SSR (Next.js, Astro etc.) resolveria de verdade.
const TITLES = {
  '/': 'Desafio de Gigantes — Centro de Treinamento de Artes Marciais em Contagem/MG',
  '/modalidades': 'Modalidades — Desafio de Gigantes',
  '/modalidades-infantis': 'Modalidades Infantis — Desafio de Gigantes',
  '/instrutores': 'Instrutores — Desafio de Gigantes',
  '/atendimentos': 'Atendimento — Desafio de Gigantes',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = TITLES[location.pathname] ?? TITLES['/']
  }, [location.pathname])

  // Ao trocar de rota (ex: clicar em "Instrutores" estando lá embaixo
  // na Home), o React Router não rola a página para o topo sozinho —
  // sem isso, a próxima página abre no meio/fim, na posição de scroll
  // em que a anterior tinha ficado.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/modalidades" element={<Modalidades />} />
            <Route path="/modalidades-infantis" element={<ModalidadesInfantis />} />
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
