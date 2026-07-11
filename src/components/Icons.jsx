const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function GloveIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 12.5V6a2 2 0 0 1 4 0v4M11 10V4.5a2 2 0 0 1 4 0V10M15 10.2V6a2 2 0 0 1 4 0v7c0 3.5-2.2 6.5-6 6.5H9c-2.5 0-4.5-2-4.5-4.5v-2.4c0-1 .8-1.8 1.8-1.8h.2" />
      <path d="M7 12.5c0-1 .8-1.8 1.8-1.8h.2" />
    </svg>
  )
}

export function KickIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="4.5" r="1.7" />
      <path d="M8 8 6 13l4 2.5-1 5" />
      <path d="M6 13 2.5 15.5" />
      <path d="M10 15.5 16 13l4-6" />
    </svg>
  )
}

export function OctagonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 2.5h8L20.5 8v8L16 21.5H8L3.5 16V8Z" />
      <path d="M8.5 8 12 12l3.5-3.5M8.5 16 12 12l3.5 4" />
    </svg>
  )
}

export function BeltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 9h5.2l1.6 2h5.4l1.6-2h5.2" />
      <rect x="9" y="8" width="6" height="8" rx="1" />
      <path d="M2.5 9v6M21.5 9v6" />
    </svg>
  )
}

export function KettlebellIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 8.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M8 10h8a1 1 0 0 1 1 1l1 7a1 1 0 0 1-1 1.2H7A1 1 0 0 1 6 18l1-7a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="17.5" cy="8.5" r="2.3" />
      <path d="M15.5 14.3c2.9.4 4.5 2.5 4.5 5.7" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="10" height="18" rx="0.5" />
      <path d="M14 9h6v12h-6" />
      <path d="M7 7h1M11 7h1M7 11h1M11 11h1M7 15h1M11 15h1" />
    </svg>
  )
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 2.5 8 12 13l9.5-5Z" />
      <path d="m2.5 12 9.5 5 9.5-5M2.5 16 12 21l9.5-5" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 14.9 9l6.8.7-5.1 4.6 1.5 6.7L12 17.6l-6.1 3.4 1.5-6.7L2.3 9.7 9.1 9Z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s7-6.6 7-12A7 7 0 0 0 5 9.5c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 3.5h3l1.4 4.2-2 1.7a13 13 0 0 0 6.7 6.7l1.7-2 4.2 1.4v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.1 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 1.8a8 8 0 0 1 6.9 12l-.2.4.7 3-3.1-.8-.4.2A8 8 0 1 1 12 4Zm-3.3 4.1c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.9 4.5 4 2.2 1 2.7.8 3.1.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1s-.7.9-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M13.5 21.5v-8.2h2.8l.4-3.2h-3.2V8c0-.9.3-1.6 1.6-1.6h1.7V3.5C16.5 3.4 15.4 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.3H6.8v3.2h2.8v8.2Z" />
    </svg>
  )
}
