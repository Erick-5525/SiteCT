import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/modalidades', label: 'Modalidades' },
  { to: '/instrutores', label: 'Instrutores' },
  { to: '/atendimentos', label: 'Atendimento' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <NavLink to="/" className="brand" aria-label="CT Desafio de Gigantes - início">
          <img src="/images/logo.png" alt="Desafio de Gigantes" className="brand-logo" />
          <span className="brand-name">
            Desafio de <strong>Gigantes</strong>
          </span>
        </NavLink>

        <nav className={`navbar-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/atendimentos" className="btn btn-nav">
            Agende sua Aula
          </NavLink>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
