'use client'

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo + texto */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/piaget_logo_2.png"
            alt="Logo del Instituto"
            width={100}
            height={100}
            className="w-40 h-40 object-contain"
          />
        </Link>

        {/* Enlaces */}
        <div className="space-x-4">
          <Link href="/maternal" className="text-gray-700 hover:text-blue-500 transition">
            Maternal
          </Link>
          <Link href="/preescolar" className="text-gray-700 hover:text-blue-500 transition">
            Preescolar
          </Link>
          <Link href="/primaria" className="text-gray-700 hover:text-blue-500 transition">
            Primaria
          </Link>
          <Link href="/secundaria" className="text-gray-700 hover:text-blue-500 transition">
            Secundaria
          </Link>
          <Link href="/preparatoria" className="text-gray-700 hover:text-blue-500 transition">
            Preparatoria
          </Link>
        </div>
      </div>
    </nav>
  )
}
// Navbar component