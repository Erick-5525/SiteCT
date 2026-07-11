import { NavLink } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { modalidades } from '../data/modalidades.js'
import './ModalidadesGrid.css'

// Grade de cards resumidos das modalidades, usada na Home.
// Cada card linka para a âncora correspondente em /modalidades.
// A lista de modalidades vem de src/data/modalidades.js — adicionar um
// item lá é o suficiente para ele aparecer aqui automaticamente.
function ModalidadesGrid() {
  return (
    <section className="modalidades-home">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Modalidades</span>
          <h2>Escolha sua arma</h2>
        </Reveal>

        <div className="modalidade-cards">
          {modalidades.map(({ slug, name, icon: Icon, resumo }, i) => (
            <Reveal as={NavLink} to={`/modalidades#${slug}`} className="modalidade-card" delay={(i % 3) + 1} key={slug}>
              <Icon className="modalidade-icon" />
              <h3>{name}</h3>
              <p>{resumo}</p>
              <span className="modalidade-link">Saiba mais →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModalidadesGrid
