'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationCard({
  title,
  image,
  href,
}: {
  title: string
  image: string
  href: string
}) {
  return (
    <Link href={href} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </Link>
  )
}
