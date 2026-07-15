import PageHeader from '../components/PageHeader.jsx'
import InstrutorCard from '../components/InstrutorCard.jsx'
import { instrutores } from '../data/instrutores.js'

function Instrutores() {
  return (
    <div className="page">
      <PageHeader eyebrow="Nossa Equipe" title="Instrutores">
        Sete profissionais dedicados a transformar técnica em resultado, um aluno de cada vez.
        Conheça quem vai te acompanhar de perto na sua evolução.
      </PageHeader>

      {instrutores.map((instrutor, i) => (
        <InstrutorCard instrutor={instrutor} index={i} key={instrutor.nome} />
      ))}
    </div>
  )
}

export default Instrutores
