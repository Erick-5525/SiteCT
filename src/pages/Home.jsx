// Página inicial. Cada seção é um componente independente em
// src/components — veja cada arquivo para editar/reaproveitar uma
// seção específica sem afetar as outras.
import Hero from '../components/Hero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ModalidadesGrid from '../components/ModalidadesGrid.jsx'
import KidsTeaser from '../components/KidsTeaser.jsx'
import DiferenciaisGrid from '../components/DiferenciaisGrid.jsx'
import CtaBand from '../components/CtaBand.jsx'

function Home() {
  return (
    <div className="page">
      <Hero />
      <AboutSection />
      <ModalidadesGrid />
      <KidsTeaser />
      <DiferenciaisGrid />
      <CtaBand
        title="Sua evolução começa no tatame."
        text="Marque uma visita, conheça nossa estrutura e comece hoje sua primeira aula experimental."
        buttonLabel="Entre em Contato"
        to="/atendimentos"
      />
    </div>
  )
}

export default Home
