// Dados da equipe de instrutores exibidos em /instrutores.
// Nomes e modalidades são reais (repassados pelo CT). `texto` abaixo é
// uma FICHA FICTÍCIA — pedida a propósito pra a página não ficar com um
// vazio embaixo do nome enquanto o CT não manda a bio de verdade. Por
// isso o texto é só genérico (paixão pela modalidade, jeito de ensinar)
// e evita citar anos de experiência, campeonatos ou graduação/faixa
// específicos — dado que a gente não tem e não deveria inventar pra uma
// pessoa real. Troque pelo texto real assim que o CT enviar.
// Fotos também pendentes: cada instrutor usa um card com as iniciais do
// nome como placeholder. Basta trocar `foto: null` por uma URL de
// imagem quando as fotos reais estiverem disponíveis.
export const instrutores = [
  {
    nome: 'Vinicius',
    cargo: 'Professor',
    modalidade: 'Boxe',
    foto: null,
    texto:
      'Apaixonado por boxe, Vinicius une técnica apurada e didática paciente para formar alunos desde o primeiro soco até combinações mais avançadas de ringue.',
  },
  {
    nome: 'José',
    cargo: 'Professor',
    modalidade: 'Boxe',
    foto: null,
    texto:
      'José ensina boxe com foco em fundamentos sólidos — postura, deslocamento e potência —, acompanhando de perto a evolução de cada aluno.',
  },
  {
    nome: 'Mia',
    cargo: 'Professora',
    modalidade: 'Muay Thai · Preparação Física',
    foto: null,
    texto:
      'Mia combina a intensidade do Muay Thai com um olhar técnico de preparação física, ajudando cada aluno a evoluir tanto na técnica quanto no condicionamento.',
  },
  {
    nome: 'Jack',
    cargo: 'Professor',
    modalidade: 'Muay Thai · Boxe',
    foto: null,
    texto:
      'Transitando entre o Muay Thai e o boxe, Jack forma alunos versáteis, com repertório completo tanto na defesa quanto no ataque em pé.',
  },
  {
    nome: 'Ryan',
    cargo: 'Professor',
    modalidade: 'Muay Thai',
    foto: null,
    texto:
      'Ryan traz energia e disciplina para o tatame do Muay Thai, trabalhando técnica de base e condicionamento para alunos de todos os níveis.',
  },
  {
    nome: 'Galante',
    cargo: 'Professor',
    modalidade: 'Jiu-Jitsu',
    foto: null,
    texto:
      'Galante conduz as turmas de Jiu-Jitsu com foco em base sólida e evolução técnica constante, respeitando o ritmo de cada aluno dentro da metodologia Gracie Barra.',
  },
  {
    nome: 'Wendel',
    cargo: 'Professor',
    modalidade: 'MMA · Judô',
    foto: null,
    texto:
      'Wendel une a tradição do Judô à versatilidade do MMA, conduzindo alunos que buscam tanto a arte suave quanto o combate completo.',
  },
]
