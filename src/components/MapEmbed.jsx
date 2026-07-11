import { contato } from '../data/contato.js'
import './MapEmbed.css'

// Mapa do Google Maps apontando para o endereço do CT (src/data/contato.js).
// Usa o embed público "q=<endereço>&output=embed", que não exige
// chave de API do Google — funciona só com o endereço em texto.
// O mapa é totalmente interativo (arrastar/zoom); o pin de localização
// é o próprio marcador do Google (dentro do iframe, de outro domínio),
// então não é possível recolorir só ele via CSS — ver comentário do
// filtro em MapEmbed.css.
function MapEmbed() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`
  const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contato.endereco)}`

  return (
    <div className="map-embed">
      <iframe
        className="map-embed-frame"
        src={embedSrc}
        title="Localização do CT Desafio de Gigantes"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a href={openInMapsUrl} target="_blank" rel="noreferrer" className="map-open-link">
        Abrir no Google Maps
      </a>
    </div>
  )
}

export default MapEmbed
