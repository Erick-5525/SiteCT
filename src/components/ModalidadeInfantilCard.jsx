import Reveal from './Reveal.jsx'
import HorarioList from './HorarioList.jsx'
import './ModalidadeInfantilCard.css'

// Card de uma turma infantil (usado em /modalidades-infantis).
// Mais enxuto que ModalidadeDetailCard: aqui o que importa para o pai
// que está decidindo é a faixa etária e o horário, não uma descrição
// longa da modalidade (essa já existe em /modalidades).
function ModalidadeInfantilCard({ modalidade, delay }) {
  const { name, icon: Icon, faixaEtaria, resumo, horarios } = modalidade

  return (
    <Reveal className="kids-card" delay={delay}>
      <div className="kids-card-head">
        <Icon className="kids-card-icon" />
        <div>
          <h3>{name}</h3>
          <span className="kids-card-faixa">{faixaEtaria}</span>
        </div>
      </div>
      <p className="kids-card-resumo">{resumo}</p>
      <HorarioList horarios={horarios} title="Turmas e horários" />
    </Reveal>
  )
}

export default ModalidadeInfantilCard
