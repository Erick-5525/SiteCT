import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

// Componente genérico de "fade + slide" ao rolar a página.
// Uso: <Reveal>...</Reveal> ou <Reveal as="section" delay={2}>...</Reveal>
// Totalmente independente do restante do site — pode ser copiado para
// qualquer outro projeto React sem alterações.

function Reveal({ as: Tag = 'div', className = '', delay, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
