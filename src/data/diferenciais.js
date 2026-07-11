// Lista de diferenciais exibida na Home (seção "Diferenciais do CT").
import { UsersIcon, BuildingIcon, LayersIcon, StarIcon, ClockIcon, CheckIcon } from '../components/Icons.jsx'

export const diferenciais = [
  { icon: UsersIcon, text: 'Professores qualificados' },
  { icon: BuildingIcon, text: 'Ambiente familiar' },
  { icon: LayersIcon, text: 'Estrutura completa' },
  { icon: StarIcon, text: 'Aulas para todos os níveis' },
  { icon: ClockIcon, text: 'Horários flexíveis' },
  { icon: CheckIcon, text: 'Aula experimental gratuita' },
]

// Números de destaque da seção "Sobre o CT". Ajuste conforme a
// realidade da unidade (tempo de casa, alunos ativos, etc.).
export const stats = [
  { value: '12+', label: 'Anos de tatame' },
  { value: '600+', label: 'Alunos ativos' },
  { value: '05', label: 'Modalidades' },
  { value: '06', label: 'Instrutores' },
]
