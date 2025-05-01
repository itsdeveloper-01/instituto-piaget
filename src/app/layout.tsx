import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import FloatingButtons from '@/components/ui/FloatingButtons' // 👈 Importa el componente botones de contacto
import Navbar from '@/components/ui/NavBar' // 👈 Importa el componente navbar

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instituto Educativo',
  description: 'Formando el futuro de tu familia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar /> {/* 👈 Agrega el componente Navbar aquí *//* para que esté presente en todas las páginas */}
        {children}
        <FloatingButtons /> {/* 👈 Lo agregas aquí, para que esté presente en todas las páginas */}
      </body>
    </html>
  )
}
