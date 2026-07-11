import { NavLink } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import './CtaBand.css'

// Faixa de chamada para ação em destaque (fundo cheio na cor principal).
// Componente genérico: título, texto e botão são passados por props,
// então pode ser reaproveitado em qualquer página/projeto.
function CtaBand({ title, text, buttonLabel, to }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <Reveal>
          <h2>{title}</h2>
          <p>{text}</p>
        </Reveal>
        <Reveal delay={2}>
          <NavLink to={to} className="btn cta-band-btn">
            {buttonLabel}
          </NavLink>
        </Reveal>
      </div>
    </section>
  )
}

export default CtaBand
