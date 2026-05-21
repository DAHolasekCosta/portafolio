import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="flex justify-center md:justify-start lg:col-span-1">
              <div className="text-center md:text-left">
                <Image
                  src="/professional-portrait.png"
                  alt="Tu Nombre - Foto de perfil"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-primary/20 shadow-lg mx-auto md:mx-0 mb-4"
                />
                <h3 className="font-bold text-xl">Tu Nombre</h3>
                <p className="text-sm text-muted-foreground">Profesional Multidisciplinario</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Tu Ciudad, País</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:tu@email.com" className="hover:text-foreground transition-colors">
                    tu@email.com
                  </a>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/electronica"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Electrónica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/atencion-cliente"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Atención al Cliente
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diseno-web"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Diseño Web
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="font-semibold mb-4">Conectá Conmigo</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tu@email.com"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Agregando botón de contacto */}
          <div className="pt-8 border-t border-border">
            <div className="flex justify-center mb-6">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Contactar
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© {currentYear} Tu Nombre. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
