import PageHeader from '../components/PageHeader.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import ContactForm from '../components/ContactForm.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import Reveal from '../components/Reveal.jsx'
import './Atendimentos.css'

function Atendimentos() {
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
            <ContactForm />
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
