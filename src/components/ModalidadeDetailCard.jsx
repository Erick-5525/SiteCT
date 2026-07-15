import { NavLink } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import HorarioList from './HorarioList.jsx'
import { CheckIcon } from './Icons.jsx'
import './ModalidadeDetailCard.css'

// Bloco completo de uma modalidade (usado na página /modalidades).
// Recebe os dados de uma modalidade (ver src/data/modalidades.js) e a
// posição dela na lista, para alternar o lado da imagem (zig-zag) e
// numerar o rótulo (01, 02, 03...).
function ModalidadeDetailCard({ modalidade, index }) {
  const { slug, name, icon: Icon, descricao, nivel, publico, beneficios, horarios } = modalidade
  const isReversed = index % 2 === 1

  return (
    <section id={slug} className={`modalidade-detail ${isReversed ? 'is-reversed' : ''}`}>
      <div className="container modalidade-detail-grid">
        <Reveal className="modalidade-visual">
          <Icon className="modalidade-visual-icon" />
          <span className="modalidade-visual-name">{name}</span>
        </Reveal>

        <Reveal className="modalidade-content" delay={2}>
          <span className="eyebrow">{`0${index + 1}`}</span>
          <h2>{name}</h2>
          <p className="modalidade-descricao">{descricao}</p>

          <div className="modalidade-meta">
            <div>
              <span className="meta-label">Público indicado</span>
              <span className="meta-value">{publico}</span>
            </div>
            <div>
              <span className="meta-label">Nível</span>
              <span className="meta-value">{nivel}</span>
            </div>
          </div>

          <ul className="modalidade-beneficios">
            {beneficios.map((b) => (
              <li key={b}>
                <CheckIcon width={18} height={18} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <HorarioList horarios={horarios} />

          {/* state: leva o nome da modalidade pra página de Atendimento,
              que passa adiante pro formulário — assim quem clica aqui
              não precisa escolher de novo no <select> qual modalidade
              quer (ver Atendimentos.jsx e ContactForm.jsx). */}
          <NavLink to="/atendimentos" state={{ modalidade: name }} className="btn">
            Agende sua Aula Experimental
          </NavLink>
        </Reveal>
      </div>
    </section>
  )
}

export default ModalidadeDetailCard
