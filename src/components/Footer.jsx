import { NavLink } from 'react-router-dom'
import { WhatsAppIcon, InstagramIcon, PinIcon, PhoneIcon, MailIcon } from './Icons.jsx'
import { contato, direitosAutorais } from '../data/contato.js'
import './Footer.css'

// Rodapé compartilhado por todas as páginas (montado uma vez em
// App.jsx). Links de navegação e dados de contato vêm de fontes
// centralizadas para não duplicar informação pelo site.
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/modalidades', label: 'Modalidades' },
  { to: '/modalidades-infantis', label: 'Modalidades Infantis' },
  { to: '/instrutores', label: 'Instrutores' },
  { to: '/atendimentos', label: 'Atendimento' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Desafio de Gigantes" className="footer-logo" />
          <p>
            Formando atletas e transformando vidas através das artes marciais, da disciplina e do
            treinamento de alta performance.
          </p>
          <div className="footer-social">
            <a href={contato.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href={contato.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="footer-contact">
            <li><PinIcon width={18} height={18} /><span>{contato.enderecoResumido}</span></li>
            <li><PhoneIcon width={18} height={18} /><span>{contato.telefone}</span></li>
            <li><MailIcon width={18} height={18} /><span>{contato.email}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} {direitosAutorais}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
