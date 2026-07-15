import PageHeader from '../components/PageHeader.jsx'
import ModalidadeInfantilCard from '../components/ModalidadeInfantilCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { modalidadesInfantis } from '../data/modalidadesInfantis.js'
import './ModalidadesInfantis.css'

function ModalidadesInfantis() {
  return (
    <div className="page">
      <PageHeader eyebrow="Modalidades Infantis" title="Pequenos gigantes também treinam aqui">
        Turmas organizadas por faixa etária, com foco em disciplina, respeito e defesa
        pessoal — sempre no ritmo de cada criança.
      </PageHeader>

      <section className="kids-grid-section">
        <div className="container kids-grid">
          {modalidadesInfantis.map((m, i) => (
            <ModalidadeInfantilCard modalidade={m} delay={(i % 3) + 1} key={m.slug} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Traga seu filho para uma aula gratuita."
        text="Sem compromisso — venha conhecer a turma e a equipe antes de decidir."
        buttonLabel="Agendar Aula Experimental"
        to="/atendimentos"
      />
    </div>
  )
}

export default ModalidadesInfantis
