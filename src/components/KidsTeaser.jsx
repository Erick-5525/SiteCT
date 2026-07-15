import { NavLink } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { GiIcon } from './Icons.jsx'
import './KidsTeaser.css'

// Faixa de destaque na Home convidando para a página de modalidades
// infantis — mais discreta que o CtaBand final (não usa preenchimento
// cheio na cor de acento) para não competir com ele.
function KidsTeaser() {
  return (
    <section className="kids-teaser">
      <div className="container kids-teaser-inner">
        <Reveal className="kids-teaser-icon-wrap">
          <GiIcon className="kids-teaser-icon" />
        </Reveal>
        <Reveal className="kids-teaser-text" delay={1}>
          <span className="eyebrow">Modalidades infantis</span>
          <h2>Pequenos gigantes também treinam aqui</h2>
          <p>Turmas por faixa etária, com foco em disciplina, respeito e defesa pessoal.</p>
        </Reveal>
        <Reveal delay={2}>
          <NavLink to="/modalidades-infantis" className="btn btn-ghost">
            Conhecer turmas Kids
          </NavLink>
        </Reveal>
      </div>
    </section>
  )
}

export default KidsTeaser
