import { ClockIcon } from './Icons.jsx'
import './HorarioList.css'

// Junta uma lista em texto natural: ['Segunda','Quarta','Sexta'] vira
// "Segunda, Quarta e Sexta" (com "e" antes do último item).
function formatarLista(itens) {
  if (itens.length <= 1) return itens[0] ?? ''
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`
}

// Lista de horários de uma modalidade (dia(s) da semana + horas).
// Recebe `horarios` no formato [{ dias: string[], horas: string[] }] —
// ver src/data/modalidades.js. Componente independente para poder ser
// reaproveitado em qualquer card/página que precise mostrar uma grade.
function HorarioList({ horarios, title = 'Horários' }) {
  if (!horarios?.length) return null

  return (
    <div className="horario-list">
      <span className="horario-list-title">{title}</span>
      <ul>
        {horarios.map((h) => (
          <li key={h.dias.join('-')}>
            <ClockIcon width={16} height={16} />
            <div>
              <span className="horario-dias">{formatarLista(h.dias)}</span>
              <span className="horario-horas">{h.horas.join(' · ')}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HorarioList
