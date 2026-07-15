// Fonte única de dados das modalidades.
// Usado tanto pelos cards resumidos da Home quanto pelos blocos completos
// da página /modalidades. Para adicionar/remover uma modalidade, edite
// só este arquivo — os componentes já se ajustam automaticamente.
//
// `horarios`: transcrito das grades enviadas pelo CT (imagens de
// divulgação). `dias` e `horas` são arrays (não mais uma frase pronta)
// para o formulário de contato conseguir montar os seletores de "Dia da
// semana" e "Horário" a partir dos mesmos dados — ver ContactForm.jsx.
// Onde a grade não estava legível o suficiente para garantir precisão,
// o campo fica marcado como "Consulte a recepção" — troque pelo horário
// real assim que tiver uma grade mais nítida ou a confirmação do CT.
import { GloveIcon, KickIcon, OctagonIcon, BeltIcon, GiIcon, KettlebellIcon } from '../components/Icons.jsx'

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
    horarios: [
      { dias: ['Segunda', 'Quarta', 'Sexta'], horas: ['7h', '11h', '14h', '16h', '19h30', '20h', '20h30'] },
      { dias: ['Terça', 'Quinta'], horas: ['6h', '7h', '11h', '16h', '18h', '19h', '20h', '20h30'] },
    ],
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
    horarios: [
      { dias: ['Segunda', 'Quarta'], horas: ['11h', '19h', '20h'] },
      { dias: ['Terça', 'Quinta'], horas: ['6h', '11h', '16h', '18h', '19h30', '20h30'] },
      { dias: ['Sexta'], horas: ['11h'] },
    ],
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
    horarios: [
      { dias: ['Segunda', 'Quarta'], horas: ['8h às 10h', '21h às 22h'] },
      { dias: ['Sexta'], horas: ['8h às 10h', '20h às 21h'] },
    ],
  },
  {
    slug: 'jiu-jitsu',
    name: 'Jiu-Jitsu',
    icon: GiIcon,
    resumo:
      'Filiado à Gracie Barra: currículo estruturado, progressão consistente e a tradicional faixa branca com detalhes vermelhos e azuis.',
    descricao:
      'Nosso Jiu-Jitsu segue a metodologia Gracie Barra, com currículo estruturado para que cada aluno progrida de forma consistente e segura — seja como praticante recreativo ou competidor. As academias Gracie Barra estão presentes em diversos países, e o uniforme característico (kimono branco com patches vermelhos e azuis) é reconhecido mundialmente como sinônimo de técnica sólida e ensino padronizado.',
    nivel: 'Iniciante ao avançado',
    publico: 'Jovens e adultos',
    beneficios: ['Metodologia de ensino padronizada Gracie Barra', 'Progressão técnica por faixas', 'Defesa pessoal no solo', 'Comunidade e ambiente familiar'],
    // horarioConfirmado: false — ver comentário completo na modalidade Judô, logo abaixo.
    horarioConfirmado: false,
    horarios: [{ dias: ['Consulte a recepção'], horas: ['Grade em confirmação — fale com a gente pelo WhatsApp'] }],
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
    // horarioConfirmado: quando false, o formulário de contato (ver
    // ContactForm.jsx) esconde os campos "Dia da semana"/"Horário
    // desejado" pra essa modalidade em vez de oferecer esse aviso como
    // se fosse uma opção real de horário — troque pra true (ou apague
    // a linha, true é o padrão) assim que a grade real estiver aqui.
    horarioConfirmado: false,
    horarios: [{ dias: ['Consulte a recepção'], horas: ['Grade em confirmação — fale com a gente pelo WhatsApp'] }],
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
    horarios: [
      { dias: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], horas: ['7h'] },
      { dias: ['Segunda', 'Quarta', 'Sexta'], horas: ['16h'] },
      { dias: ['Terça', 'Quinta'], horas: ['19h30 às 20h'] },
    ],
  },
]
