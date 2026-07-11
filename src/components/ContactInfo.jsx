import { PinIcon, MailIcon, ClockIcon, WhatsAppIcon, InstagramIcon } from './Icons.jsx'
import { contato } from '../data/contato.js'
import './ContactInfo.css'

// Bloco de informações de contato (endereço, telefone, WhatsApp,
// e-mail, horários) usado na página /atendimentos.
// Os dados vêm de src/data/contato.js — edite lá para atualizar.
function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Informações</h2>
      <ul className="info-list">
        <li>
          <PinIcon />
          <div>
            <span className="info-label">Endereço</span>
            <span>{contato.endereco}</span>
          </div>
        </li>
        <li>
          <WhatsAppIcon />
          <div>
            <span className="info-label">WhatsApp</span>
            <span>{contato.whatsappExibicao}</span>
          </div>
        </li>
        <li>
          <InstagramIcon />
          <div>
            <span className="info-label">Instagram</span>
            <span>{contato.instagramHandle}</span>
          </div>
        </li>
        <li>
          <MailIcon />
          <div>
            <span className="info-label">E-mail</span>
            <span>{contato.email}</span>
          </div>
        </li>
        <li>
          <ClockIcon />
          <div>
            <span className="info-label">Horário de funcionamento</span>
            {contato.horarios.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
        </li>
      </ul>

      <a href={contato.whatsappLink} target="_blank" rel="noreferrer" className="btn whatsapp-btn">
        <WhatsAppIcon />
        Falar no WhatsApp
      </a>
    </div>
  )
}

export default ContactInfo
