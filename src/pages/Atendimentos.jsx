import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import ContactForm from '../components/ContactForm.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import Reveal from '../components/Reveal.jsx'
import './Atendimentos.css'

function Atendimentos() {
  // Quando se chega aqui pelo botão "Agende sua Aula Experimental" de
  // uma modalidade específica, o nome dela vem em location.state (ver
  // ModalidadeDetailCard.jsx) — repassado pro formulário pré-selecionar
  // o <select> em vez da pessoa ter que escolher de novo.
  const location = useLocation()
  const modalidadeSelecionada = location.state?.modalidade

  return (
    <div className="page">
      <PageHeader eyebrow="Atendimento" title="Vamos treinar juntos">
        Fale com a gente, tire dúvidas sobre horários e modalidades e agende sua aula
        experimental gratuita.
      </PageHeader>

      <section className="atendimento-body">
        <div className="container atendimento-grid">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={2}>
            <ContactForm initialModalidade={modalidadeSelecionada} />
          </Reveal>
        </div>
      </section>

      <section className="atendimento-map">
        <div className="container">
          <Reveal>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Atendimentos
