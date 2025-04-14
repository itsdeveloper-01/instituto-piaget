'use client'
import { Mail, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  const phone = '5211234567890' // tu número con lada país
  const message = encodeURIComponent('Hola, me interesa la oferta educativa.')
  const mail = 'info@instituto.com'

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-green-500 text-white shadow-md hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href={`mailto:${mail}`}
        className="p-3 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition"
        aria-label="Correo"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  )
}
