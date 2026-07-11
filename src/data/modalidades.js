// Fonte única de dados das modalidades.
// Usado tanto pelos cards resumidos da Home quanto pelos blocos completos
// da página /modalidades. Para adicionar/remover uma modalidade, edite
// só este arquivo — os componentes já se ajustam automaticamente.
import { GloveIcon, KickIcon, OctagonIcon, BeltIcon, KettlebellIcon } from '../components/Icons.jsx'

export const modalidades = [
  {
    slug: 'muay-thai',
    name: 'Muay Thai',
    icon: KickIcon,
    resumo:
      'A arte das oito armas: socos, cotovelos, joelhos e canelas em um treino intenso de condicionamento e defesa pessoal.',
    descricao:
      'Conhecido como a "Arte das Oito Armas", o Muay Thai utiliza socos, cotovelos, joelhos e canelas em combinações rápidas e potentes. É uma das bases mais completas do striking mundial, trabalhando distância, timing e resistência em cada treino. Nossas aulas seguem uma progressão técnica clara, do aprendizado da guarda até as combinações de clinch usadas em competição.',
    nivel: 'Iniciante ao avançado',
    publico: 'Jovens e adultos a partir de 14 anos',
    beneficios: ['Condicionamento físico completo', 'Defesa pessoal real', 'Emagrecimento acelerado', 'Disciplina e foco mental'],
  },
  {
    slug: 'boxe',
    name: 'Boxe',
    icon: GloveIcon,
    resumo: 'Técnica, esquiva e potência. O boxe olímpico desenvolve reflexos, coordenação e resistência cardiovascular.',
    descricao:
      'O boxe olímpico é pura técnica: jogo de pés, esquivas e potência de braço trabalhados em conjunto para formar um lutador rápido e inteligente. As aulas combinam fundamentos de guarda e deslocamento com trabalho de aparelhos — luva, foco e saco — desenvolvendo reflexo e resistência cardiovascular fora do comum.',
    nivel: 'Iniciante ao avançado',
    publico: 'A partir de 12 anos',
    beneficios: ['Coordenação motora e reflexos', 'Resistência cardiovascular', 'Alívio de estresse', 'Autoconfiança no dia a dia'],
  },
  {
    slug: 'mma',
    name: 'MMA',
    icon: OctagonIcon,
    resumo: 'Combate completo: une striking e grappling para formar o atleta mais completo dentro e fora do octógono.',
    descricao:
      'O MMA une striking e grappling em uma só grade de treino, formando o atleta mais completo do centro. Trabalhamos transições de queda, controle de solo e finalizações ao lado do trabalho de socos e chutes, sempre com foco em segurança e evolução técnica progressiva rumo à competição amadora ou profissional.',
    nivel: 'Intermediário ao avançado',
    publico: 'Praticantes com base em alguma modalidade de combate',
    beneficios: ['Versatilidade técnica total', 'Condicionamento de alto rendimento', 'Preparação para competição', 'Autocontrole sob pressão'],
  },
  {
    slug: 'judo',
    name: 'Judô',
    icon: BeltIcon,
    resumo: 'A arte suave. Projeções, imobilizações e disciplina milenar japonesa para todas as idades.',
    descricao:
      'A "arte suave" ensina a usar o equilíbrio e a alavanca do próprio adversário a seu favor. Projeções, imobilizações e quedas controladas fazem do Judô uma das modalidades mais respeitadas do mundo, com forte tradição de disciplina, hierarquia e respeito — valores que carregamos para dentro e fora do tatame.',
    nivel: 'Iniciante ao avançado',
    publico: 'Crianças a partir de 5 anos, jovens e adultos',
    beneficios: ['Equilíbrio e flexibilidade', 'Disciplina e respeito', 'Socialização entre faixas etárias', 'Defesa pessoal eficiente'],
  },
  {
    slug: 'treino-funcional',
    name: 'Treino Funcional',
    icon: KettlebellIcon,
    resumo: 'Força, mobilidade e resistência em treinos de alta intensidade que elevam o condicionamento físico geral.',
    descricao:
      'Sessões de alta intensidade que combinam peso corporal, kettlebells e circuitos metabólicos para elevar força, mobilidade e resistência. É o complemento ideal para quem treina luta e também a porta de entrada perfeita para quem busca um condicionamento físico geral com resultado rápido e visível.',
    nivel: 'Todos os níveis',
    publico: 'Todos os públicos, sem experiência prévia necessária',
    beneficios: ['Perda de peso e definição', 'Ganho de força e resistência', 'Prevenção de lesões', 'Treino em grupo motivador'],
  },
]
