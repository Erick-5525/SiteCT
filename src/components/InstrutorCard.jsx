import Reveal from './Reveal.jsx'
import './InstrutorCard.css'

// Bloco de um instrutor na página /instrutores (layout zig-zag).
// Recebe os dados de um instrutor (ver src/data/instrutores.js) e a
// posição dele na lista, para alternar o lado da foto.
// Se `instrutor.foto` tiver uma URL, ela é usada; caso contrário
// mostra um placeholder com as iniciais do nome.
function InstrutorCard({ instrutor, index }) {
  const { nome, cargo, modalidade, texto, foto } = instrutor
  const isReversed = index % 2 === 1
  const iniciais = nome
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <section className={`instrutor-row ${isReversed ? 'is-reversed' : ''}`}>
      <div className="container instrutor-row-grid">
        <Reveal className="instrutor-photo">
          <div className="instrutor-photo-frame">
            {foto ? (
              <img src={foto} alt={nome} />
            ) : (
              <span className="instrutor-initials">{iniciais}</span>
            )}
          </div>
        </Reveal>

        <Reveal className="instrutor-info" delay={2}>
          <span className="eyebrow">{`0${index + 1}`}</span>
          <h2>{nome}</h2>
          <span className="instrutor-cargo">{cargo}</span>
          <p>{texto}</p>
          <span className="instrutor-modalidade">{modalidade}</span>
        </Reveal>
      </div>
    </section>
  )
}

export default InstrutorCard
