import HeroCarousel from '@/components/ui/HeroCarousel'
import EducationCard from '@/components/ui/EducationCard'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="px-4 pt-6 max-w-6xl mx-auto">
      <HeroCarousel />
      
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Quienes somos</h1>
        <p className="text-lg">
          Somos una Institución comprometida con la sociedad para formar a nuestros alumnos de manera integral,
          ya que sabemos son la esencia del mañana. Nuestro objetivo es lograr que el estudiante adquiera el conocimiento
          en un ambiente preparado que le permita adquirir habilidades, conocimientos así como actitudes de una manera dinámica
          y de forma permanente.
        </p>
      </section>

      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Oferta educativa</h1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EducationCard title="Maternal" image="/images/piaget_card_1.jpg" href="/maternal" />
        <EducationCard title="Preescolar" image="/images/piaget_card_2.jpg" href="/preescolar" />
        <EducationCard title="Primaria" image="/images/piaget_card_3.jpg" href="/primaria" />
        <EducationCard title="Secundaria" image="/images/piaget_card_4.jpg" href="/secundaria" />
        <EducationCard title="Preparatoria" image="/images/piaget_card_5.jpg" href="/preparatoria" />
      </section>

      {/* UBICACIÓN + REDES */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-6">Encuéntranos y síguenos</h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Maps */}
          <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1515542486213!2d-98.32869028986102!3d26.06130297706965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505ef29e281b5%3A0x5f310a56b992889f!2sInstituto%20Piaget!5e0!3m2!1ses!2smx!4v1744588696731!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-2xl font-semibold">Síguenos en redes</h3>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TU_PAGINA" target="_blank" rel="noopener noreferrer">
                <Image src="/images/piaget_icono_f_1.png" alt="Facebook" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/TU_PAGINA" target="_blank" rel="noopener noreferrer">
                <Image src="/images/piaget_icono_i_1.svg" alt="Instagram" width={40} height={40} />
              </a>
            </div>

            {/* Post embebido de Instagram o Facebook */}
            <div className="w-full rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.instagram.com/p/TU_POST/embed" 
                width="100%"
                height="330"
               /* frameBorder="0"
                scrolling="no"*/
                allowTransparency
                allow="encrypted-media"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
