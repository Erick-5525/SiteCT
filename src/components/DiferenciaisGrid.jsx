import Reveal from './Reveal.jsx'
import { diferenciais } from '../data/diferenciais.js'
import './DiferenciaisGrid.css'

// Grade de diferenciais (ícone + texto curto) exibida na Home.
// Lista de itens vem de src/data/diferenciais.js.
function DiferenciaisGrid() {
  return (
    <section className="diferenciais">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Por que treinar aqui</span>
          <h2>Diferenciais do CT</h2>
        </Reveal>

        <div className="diferenciais-grid">
          {diferenciais.map(({ icon: Icon, text }, i) => (
            <Reveal className="diferencial-item" delay={(i % 3) + 1} key={text}>
              <Icon className="diferencial-icon" />
              <span>{text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiferenciaisGrid
