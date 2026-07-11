import './PageHeader.css'

// Cabeçalho padrão usado no topo das páginas internas
// (Modalidades, Instrutores, Atendimento). Recebe o rótulo pequeno
// (eyebrow), o título e um parágrafo de apoio.
function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </header>
  )
}

export default PageHeader
