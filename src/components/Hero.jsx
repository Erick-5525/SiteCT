import { NavLink } from 'react-router-dom'
import './Hero.css'

// Seção de abertura da Home: imagem de fundo em tela cheia + título de
// impacto + CTA. Troque a imagem em /public/images/ringue.jpg e os
// textos abaixo para reaproveitar em outro projeto.
function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        {/* width/height: evita reserva de espaço errada (CLS) antes da imagem
            carregar. fetchPriority="high": esta é a maior imagem visível da
            Home (LCP) — sem isso, o navegador só descobre que precisa dela
            depois de processar todo o CSS. */}
        <img
          src="/images/ringue.jpg"
          alt="Atletas treinando no ringue do CT Desafio de Gigantes"
          width={680}
          height={481}
          fetchPriority="high"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-slash" aria-hidden="true" />
      <div className="container hero-content">
        <span className="eyebrow">CT Desafio de Gigantes</span>
        <h1 className="hero-title">
          Transforme seu corpo.
          <br />
          Desenvolva sua mente.
          <br />
          Supere seus limites.
        </h1>
        <p className="hero-subtitle">Treinamento de alto nível para iniciantes e atletas.</p>
        <NavLink to="/atendimentos" className="btn hero-cta">
          Agende sua Aula Experimental
        </NavLink>
      </div>
    </section>
  )
}

export default Hero
