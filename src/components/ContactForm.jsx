import { useState } from 'react'
import { modalidades } from '../data/modalidades.js'
import { contato } from '../data/contato.js'
import './ContactForm.css'

const ORDEM_DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
// Só segunda-a-sexta leva "-feira" em português; sábado/domingo ficam como estão.
const DIAS_COM_FEIRA = new Set(['segunda', 'terça', 'quarta', 'quinta', 'sexta'])

function getInitialForm(modalidade) {
  return {
    nome: '',
    idade: '',
    modalidade: modalidade ?? modalidades[0]?.name ?? '',
    dia: '',
    horario: '',
    mensagem: '',
  }
}

function horariosDaModalidade(nomeModalidade) {
  return modalidades.find((m) => m.name === nomeModalidade)?.horarios ?? []
}

// Algumas modalidades (hoje: Judô e Jiu-Jitsu) ainda não têm grade real
// confirmada — pra essas, os campos de Dia/Horário nem aparecem, em vez
// de oferecer o aviso "consulte a recepção" como se fosse uma opção de
// horário de verdade (ver horarioConfirmado em src/data/modalidades.js).
function horarioConfirmadoDaModalidade(nomeModalidade) {
  return modalidades.find((m) => m.name === nomeModalidade)?.horarioConfirmado ?? true
}

// Dias em que a modalidade escolhida tem alguma turma — usado pro
// <select> de "Dia da semana" nunca oferecer um dia sem aula.
function diasDaModalidade(nomeModalidade) {
  const dias = new Set()
  horariosDaModalidade(nomeModalidade).forEach((h) => h.dias.forEach((d) => dias.add(d)))
  return [...dias].sort((a, b) => ORDEM_DIAS.indexOf(a) - ORDEM_DIAS.indexOf(b))
}

// Horários que existem PARA o dia escolhido dentro da modalidade — é o
// que garante que a combinação dia+horário enviada sempre corresponde
// a uma turma real (ver src/data/modalidades.js).
function horariosDoDia(nomeModalidade, dia) {
  const horas = new Set()
  horariosDaModalidade(nomeModalidade)
    .filter((h) => h.dias.includes(dia))
    .forEach((h) => h.horas.forEach((hr) => horas.add(hr)))
  return [...horas]
}

// "Terça" → "terça-feira" (mas "Sábado" continua "sábado").
function porExtenso(dia) {
  const minusculo = dia.toLowerCase()
  return DIAS_COM_FEIRA.has(minusculo) ? `${minusculo}-feira` : minusculo
}

// Monta o texto que vai pro WhatsApp. Formato pedido:
//   Olá! Meu nome é X, tenho Y anos.
//
//   Tenho interesse em fazer uma aula experimental de Z. Gostaria de
//   saber se há disponibilidade para terça-feira, às 18h.
//   Meus objetivos são: [mensagem livre] ← só entra se o campo "Mensagem"
//   foi preenchido; se estiver vazio, essa linha nem aparece.
//
//   Obrigado(a)!
function montarMensagem(form) {
  const paragrafos = [`Olá! Meu nome é ${form.nome}, tenho ${form.idade} anos.`]

  let interesse = `Tenho interesse em fazer uma aula experimental de ${form.modalidade}.`
  if (form.dia && form.horario) {
    interesse += ` Gostaria de saber se há disponibilidade para ${porExtenso(form.dia)}, às ${form.horario}.`
  } else if (form.dia) {
    interesse += ` Gostaria de saber se há disponibilidade na ${porExtenso(form.dia)}.`
  } else {
    interesse += ` Gostaria de saber mais sobre os horários disponíveis.`
  }
  if (form.mensagem) {
    interesse += `\nMeus objetivos são: ${form.mensagem}`
  }
  paragrafos.push(interesse)

  paragrafos.push('Obrigado(a)!')

  return paragrafos.join('\n\n')
}

// Formulário de contato da página /atendimentos. Em vez de simular um
// envio pra um back-end que não existe, monta a mensagem com os dados
// preenchidos e abre o WhatsApp do CT já com o texto pronto (ver
// contato.whatsappLink em src/data/contato.js) — o "envio" de fato
// acontece quando a pessoa manda a mensagem por lá.
//
// `initialModalidade`: nome de uma modalidade pra vir pré-selecionada
// (ver Atendimentos.jsx) — quem clica em "Agende sua Aula Experimental"
// dentro de uma modalidade específica não precisa escolher de novo.
function ContactForm({ initialModalidade }) {
  const [form, setForm] = useState(() => getInitialForm(initialModalidade))
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const horarioConfirmado = horarioConfirmadoDaModalidade(form.modalidade)
  const diasDisponiveis = diasDaModalidade(form.modalidade)
  const horariosDisponiveis = form.dia ? horariosDoDia(form.modalidade, form.dia) : []

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'modalidade') {
      // Muda a modalidade → o dia/horário escolhidos antes podem não
      // existir mais pra essa modalidade nova, então reseta os dois em
      // vez de manter uma combinação que não faz sentido.
      setForm((f) => ({ ...f, modalidade: value, dia: '', horario: '' }))
      return
    }

    if (name === 'dia') {
      // Mesma lógica: mudou o dia, o horário escolhido antes pode não
      // existir nesse dia.
      setForm((f) => ({ ...f, dia: value, horario: '' }))
      return
    }

    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.nome || !form.idade) {
      setStatus('error')
      setErrorMsg('Preencha nome e idade para continuar.')
      return
    }

    window.open(
      `${contato.whatsappLink}?text=${encodeURIComponent(montarMensagem(form))}`,
      '_blank',
      'noreferrer',
    )

    setStatus('success')
    setErrorMsg('')
    setForm(getInitialForm(initialModalidade))
  }

  return (
    <div className="contact-form-wrap">
      <h2>Envie uma mensagem</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
            required
            aria-invalid={status === 'error' && !form.nome}
            placeholder="Seu nome completo"
          />
        </div>

        <div className="field">
          <label htmlFor="idade">Idade</label>
          <input
            id="idade"
            name="idade"
            type="number"
            min="3"
            max="99"
            inputMode="numeric"
            value={form.idade}
            onChange={handleChange}
            required
            aria-invalid={status === 'error' && !form.idade}
            placeholder="Ex: 28"
          />
        </div>

        <div className="field">
          <label htmlFor="modalidade">Modalidade de interesse</label>
          <select id="modalidade" name="modalidade" value={form.modalidade} onChange={handleChange}>
            {modalidades.map((m) => (
              <option key={m.slug}>{m.name}</option>
            ))}
          </select>
        </div>

        {/* Dia e horário separados: o horário só é escolhido depois do
            dia, e as opções de cada um vêm sempre da grade real da
            modalidade escolhida (src/data/modalidades.js) — nunca é
            possível enviar uma combinação que não existe. Some
            modalidades ainda não têm grade confirmada — pra essas, os
            campos nem aparecem (ver horarioConfirmadoDaModalidade). */}
        {horarioConfirmado ? (
          <div className="field-row">
            <div className="field">
              <label htmlFor="dia">Dia da semana</label>
              <select id="dia" name="dia" value={form.dia} onChange={handleChange}>
                <option value="">Sem preferência</option>
                {diasDisponiveis.map((dia) => (
                  <option key={dia}>{dia}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="horario">Horário desejado</label>
              <select
                id="horario"
                name="horario"
                value={form.horario}
                onChange={handleChange}
                disabled={!form.dia}
              >
                <option value="">{form.dia ? 'Sem preferência' : 'Escolha o dia primeiro'}</option>
                {horariosDisponiveis.map((hora) => (
                  <option key={hora}>{hora}</option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <p className="form-note">
            A grade de horários de {form.modalidade} ainda está em confirmação — envie a
            mensagem que a gente combina o melhor horário com você.
          </p>
        )}

        <div className="field">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            value={form.mensagem}
            onChange={handleChange}
            placeholder="Conte um pouco sobre seu objetivo"
          />
        </div>

        <button type="submit" className="btn">
          Enviar Mensagem
        </button>

        {/* role="status" + aria-live: presente no DOM desde o início (não
            só quando há mensagem) para o leitor de tela já estar
            "escutando" essa região antes da primeira mudança de status. */}
        <p className="form-feedback-live" role="status" aria-live="polite">
          {status === 'success' && (
            <span className="form-feedback success">
              Abrindo o WhatsApp com sua mensagem pronta para enviar!
            </span>
          )}
          {status === 'error' && <span className="form-feedback error">{errorMsg}</span>}
        </p>
      </form>
    </div>
  )
}

export default ContactForm
