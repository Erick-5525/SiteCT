import Reveal from './Reveal.jsx'
import { stats } from '../data/diferenciais.js'
import './AboutSection.css'

// Seção "Sobre o CT" da Home: texto de apresentação + números de
// destaque (stats). Os números vêm de src/data/diferenciais.js.
function AboutSection() {
  return (
    <section className="about">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="eyebrow">Sobre o CT</span>
          <h2>Onde disciplina vira resultado</h2>
          <p>
            Nosso Centro de Treinamento oferece um ambiente preparado para desenvolver atletas e
            iniciantes através das artes marciais e do treinamento funcional. Reunimos tatame,
            ringue e equipe técnica qualificada para que cada aluno evolua no seu próprio ritmo,
            do primeiro soco à primeira luta.
          </p>
          <p>
            Nossa missão é promover saúde, disciplina, respeito e evolução constante — dentro e
            fora das quatro cordas.
          </p>
        </Reveal>
        <Reveal className="about-stats" delay={2}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection
