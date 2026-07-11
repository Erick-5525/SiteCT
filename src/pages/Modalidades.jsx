import PageHeader from '../components/PageHeader.jsx'
import ModalidadeDetailCard from '../components/ModalidadeDetailCard.jsx'
import { modalidades } from '../data/modalidades.js'

function Modalidades() {
  return (
    <div className="page">
      <PageHeader eyebrow="Nossas Modalidades" title="Escolha sua arma">
        Cinco modalidades, uma só filosofia: técnica sólida, evolução constante e respeito ao
        processo de cada aluno — do primeiro dia ao pódio.
      </PageHeader>

      {modalidades.map((modalidade, i) => (
        <ModalidadeDetailCard modalidade={modalidade} index={i} key={modalidade.slug} />
      ))}
    </div>
  )
}

export default Modalidades
