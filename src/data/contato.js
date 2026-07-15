// Dados de contato usados no Footer e na página /atendimentos.
// Centralizar aqui evita ter o mesmo telefone/endereço escrito em
// vários arquivos diferentes.
export const contato = {
  endereco: 'Avenida João Cesar de Oliveira, 2605 — Contagem/MG, 32315-000',
  enderecoResumido: 'Av. João Cesar de Oliveira, 2605 — Contagem, MG',
  telefone: '(31) 3565-5136',
  whatsappExibicao: '(31) 99883-1159',
  whatsappLink: 'https://wa.me/5531998831159',
  email: 'ctdesafiodegigantes@gmail.com',
  // Horário de funcionamento (abertura/fechamento do espaço) ainda não
  // confirmado pelo CT — o que temos hoje são os horários de cada
  // modalidade (ver src/data/modalidades.js e modalidadesInfantis.js).
  // Ajuste aqui assim que tiver a informação real.
  horarios: ['Segunda a sexta · 06h às 22h', 'Sábado · 08h às 13h'],
  instagram: 'https://instagram.com/ctdesafiodegigantes',
  instagramHandle: '@ctdesafiodegigantes',
}

// Titular dos direitos autorais do SITE (o projeto em si), exibido no
// rodapé. Hoje pertence ao desenvolvedor (@ErickMarcolino) — quando o
// projeto for vendido/transferido para o CT, troque este valor pelo
// nome do novo titular.
export const direitosAutorais = '@ErickMarcolino'
