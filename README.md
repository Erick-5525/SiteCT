# CT Desafio de Gigantes 🥊

Site institucional para o **CT Desafio de Gigantes**, centro de treinamento de artes marciais (Muay Thai, Boxe, MMA, Judô e Treino Funcional) em Contagem/MG.

> ⚠️ **Projeto em desenvolvimento.** Conteúdo, textos e alguns dados (fotos dos instrutores, horários de funcionamento) ainda são provisórios e serão substituídos antes do lançamento.

## Sobre

Site em React com identidade visual própria — preto, branco e verde (cor extraída da logo do CT), tipografia condensada de impacto, layout responsivo e animações suaves ao rolar a página. Feito para transmitir força, disciplina e profissionalismo.

Os direitos autorais do **site** (o código e o design, não a marca do CT) pertencem a [@ErickMarcolino](https://github.com/ErickMarcolino) — ver rodapé do site.

## Páginas

- **Home** — hero de impacto, apresentação do CT, modalidades em destaque, diferenciais e chamada para ação.
- **Modalidades** — descrição completa, benefícios, público indicado e nível de cada modalidade oferecida.
- **Instrutores** — apresentação da equipe em layout alternado (zig-zag).
- **Atendimento** — informações de contato, formulário de mensagem e mapa do Google.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (navegação entre páginas)
- CSS puro (sem framework), com variáveis CSS para todo o design system
- [Oxlint](https://oxc.rs/) para lint

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (ou a porta que o Vite escolher).

Outros comandos:

```bash
npm run build    # gera a versão de produção em /dist
npm run preview  # serve o build de produção localmente
npm run lint     # roda o Oxlint
```

## Estrutura do projeto

```
src/
├── components/   # peças de UI reutilizáveis (um .jsx + .css por componente)
├── data/         # conteúdo do site (modalidades, instrutores, contato) separado da UI
├── pages/        # uma página por rota, compondo os componentes acima
├── index.css     # design system global: cores, tipografia, botões, utilitários
└── App.jsx       # rotas da aplicação
```

Cada componente foi propositalmente isolado (arquivo próprio de estilo, dados vindos de `data/` quando aplicável) para facilitar tanto a manutenção quanto o reaproveitamento de partes do site em outros projetos.

### Trocando a paleta de cores

Todas as cores do site vêm de variáveis CSS definidas em `src/index.css` (bloco `:root`). Para trocar a identidade visual inteira, basta editar os valores lá — o resto do CSS todo consome essas variáveis, nada de cor "fixa" espalhada pelo código.

### Editando conteúdo

Textos, dados de contato, modalidades e instrutores ficam em `src/data/`, separados dos componentes visuais. Não é necessário mexer em JSX para atualizar um telefone, endereço ou descrição de modalidade.

## Pendências conhecidas

- [ ] Fotos reais dos instrutores (hoje exibem um placeholder com as iniciais do nome)
- [ ] Confirmar horários de funcionamento reais com o CT
- [ ] Definir para onde o formulário de contato deve enviar as mensagens (hoje é só front-end, sem back-end)

## Créditos

Logo e nome "Desafio de Gigantes" são de propriedade do CT. Desenvolvimento do site por [@ErickMarcolino](https://github.com/ErickMarcolino).
