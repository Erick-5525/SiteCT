import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ModalidadeDetailCard from '../components/ModalidadeDetailCard.jsx'
import { modalidades } from '../data/modalidades.js'

function Modalidades() {
  const { hash } = useLocation()

  // Quando se chega aqui pelo link de uma modalidade (ex: vindo do card
  // da Home, .../modalidades#jiu-jitsu), o React Router troca de rota
  // mas não rola a página sozinho até a âncora — isso é feito na mão
  // aqui. requestAnimationFrame garante que o layout já foi montado
  // antes de calcular a posição do scroll.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash])

  return (
    <div className="page">
      <PageHeader eyebrow="Nossas Modalidades" title="Escolha sua arma">
        Seis modalidades, uma só filosofia: técnica sólida, evolução constante e respeito ao
        processo de cada aluno — do primeiro dia ao pódio.
      </PageHeader>

      {modalidades.map((modalidade, i) => (
        <ModalidadeDetailCard modalidade={modalidade} index={i} key={modalidade.slug} />
      ))}
    </div>
  )
}

export default Modalidades
