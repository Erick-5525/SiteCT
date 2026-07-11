import { useState } from 'react'
import { modalidades } from '../data/modalidades.js'
import './ContactForm.css'

const initialForm = {
  nome: '',
  telefone: '',
  email: '',
  modalidade: modalidades[0]?.name ?? '',
  mensagem: '',
}

// Formulário de contato da página /atendimentos. Validação simples no
// front-end (sem back-end): só verifica se os campos obrigatórios
// foram preenchidos antes de mostrar a mensagem de sucesso.
// Para conectar a um back-end real, troque o corpo de handleSubmit
// por uma chamada fetch/axios para sua API.
function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome || !form.telefone || !form.email) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <div className="contact-form-wrap">
      <h2>Envie uma mensagem</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" value={form.nome} onChange={handleChange} required placeholder="Seu nome completo" />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" value={form.telefone} onChange={handleChange} required placeholder="(31) 90000-0000" />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="voce@email.com" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="modalidade">Modalidade de interesse</label>
          <select id="modalidade" name="modalidade" value={form.modalidade} onChange={handleChange}>
            {modalidades.map((m) => (
              <option key={m.slug}>{m.name}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={4} value={form.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre seu objetivo" />
        </div>

        <button type="submit" className="btn">
          Enviar Mensagem
        </button>

        {status === 'success' && (
          <p className="form-feedback success">Mensagem enviada! Nossa equipe entrará em contato em breve.</p>
        )}
        {status === 'error' && (
          <p className="form-feedback error">Preencha nome, telefone e e-mail para continuar.</p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
