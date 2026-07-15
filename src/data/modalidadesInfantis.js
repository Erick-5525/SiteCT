// Turmas infantis do CT — transcritas da grade "Horário Modalidades Kids"
// enviada pelo CT. Arquivo separado de modalidades.js porque o público,
// o formato do card (sem descrição longa) e a página são diferentes.
//
// `horarios` usa o mesmo formato { dias: string[], horas: string[] } do
// HorarioList (componente compartilhado com /modalidades), mas aqui
// cada campo tem só 1 item: "dias" já vem com dia+horário juntos (ex:
// "Segunda, Quarta e Sexta · 10h às 11h") e "horas" é reaproveitado
// para a faixa etária, não um horário de fato — formato específico
// dessas turmas, pensado pra bater com a grade original do CT.
import { KickIcon, GiIcon, BeltIcon } from '../components/Icons.jsx'

export const modalidadesInfantis = [
  {
    slug: 'muay-thai-kids',
    name: 'Muay Thai Kids',
    icon: KickIcon,
    faixaEtaria: 'A partir de 6 anos',
    resumo:
      'Turmas de Muay Thai por faixa etária, com foco em coordenação, disciplina e condicionamento — sem contato pesado.',
    horarios: [
      { dias: ['Segunda, Quarta e Sexta · 10h às 11h'], horas: ['A partir de 6 anos'] },
      { dias: ['Segunda, Quarta e Sexta · 11h às 12h'], horas: ['A partir de 12 anos'] },
      { dias: ['Segunda, Quarta e Sexta · 16h às 17h'], horas: ['A partir de 12 anos'] },
      { dias: ['Segunda, Quarta e Sexta · 18h às 19h'], horas: ['A partir de 6 anos'] },
    ],
  },
  {
    slug: 'jiu-jitsu-kids',
    name: 'Jiu-Jitsu Kids',
    icon: GiIcon,
    faixaEtaria: '10 a 16 anos',
    resumo:
      'Jiu-Jitsu para pré-adolescentes e adolescentes, seguindo a metodologia Gracie Barra de progressão técnica.',
    horarios: [{ dias: ['Segunda, Quarta e Sexta · 18h30 às 19h30'], horas: ['10 a 16 anos'] }],
  },
  {
    slug: 'jiu-jitsu-judo-kids',
    name: 'Jiu-Jitsu e Judô Kids',
    icon: BeltIcon,
    faixaEtaria: '4 a 10 anos',
    resumo:
      'Turma conjunta de iniciação ao Jiu-Jitsu e ao Judô para os pequenos — quedas seguras, respeito e primeiras técnicas de solo.',
    horarios: [
      { dias: ['Terça e Quinta · 18h30 às 19h30'], horas: ['Jiu-Jitsu: 4 a 9 anos · Judô: 4 a 10 anos'] },
    ],
  },
]
