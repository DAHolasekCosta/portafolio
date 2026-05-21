import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Profesional <span className="text-primary">Multidisciplinario</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed text-pretty max-w-3xl mx-auto">
            Combino experiencia técnica en electrónica y electricidad, habilidades de comunicación en atención al
            cliente, y creatividad en diseño y desarrollo web. Tres perfiles profesionales, una identidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base px-8">
              Descargar CV Completo
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              Contactar
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span>Explorá mis áreas de expertise</span>
          </div>
        </div>
      </div>
    </section>
  )
}
