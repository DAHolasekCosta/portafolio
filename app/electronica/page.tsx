import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Award, Wrench, Shield } from "lucide-react"

export default function ElectronicaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Electrónica & Electricidad</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experiencia técnica en diseño de circuitos, instalaciones eléctricas, mantenimiento y reparaciones con
                estricto apego a las normativas de seguridad.
              </p>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Experiencia Laboral</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">Técnico Electrónico Senior</CardTitle>
                      <Badge variant="secondary">2020 - Presente</Badge>
                    </div>
                    <CardDescription className="text-base">Empresa de Electrónica XYZ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Diseño y desarrollo de circuitos electrónicos para aplicaciones industriales</li>
                      <li>• Mantenimiento preventivo y correctivo de equipos electrónicos</li>
                      <li>• Documentación técnica y diagramas de instalación</li>
                      <li>• Capacitación a personal técnico junior</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">Electricista Instalador</CardTitle>
                      <Badge variant="secondary">2018 - 2020</Badge>
                    </div>
                    <CardDescription className="text-base">Constructora ABC S.A.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Instalaciones eléctricas residenciales y comerciales</li>
                      <li>• Cálculo de cargas y dimensionamiento de instalaciones</li>
                      <li>• Inspección y certificación de instalaciones</li>
                      <li>• Resolución de fallas y problemas eléctricos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      <CardTitle>Instrumentación</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Osciloscopio digital</li>
                      <li>• Multímetro y pinza amperimétrica</li>
                      <li>• Generador de funciones</li>
                      <li>• Analizador de redes eléctricas</li>
                      <li>• Termovisión infrarroja</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <CardTitle>Normativas y Seguridad</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Normas IEC 60364</li>
                      <li>• Código Eléctrico Nacional</li>
                      <li>• Seguridad en trabajos con tensión</li>
                      <li>• Primeros auxilios eléctricos</li>
                      <li>• EPP y equipamiento de seguridad</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <CardTitle>Diseño de Circuitos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Circuitos analógicos y digitales</li>
                      <li>• PCB Design (KiCAD, Eagle)</li>
                      <li>• Microcontroladores (Arduino, PIC)</li>
                      <li>• Simulación (Proteus, LTSpice)</li>
                      <li>• Automatización industrial</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <CardTitle>Instalaciones Eléctricas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Instalaciones monofásicas y trifásicas</li>
                      <li>• Tableros eléctricos y protecciones</li>
                      <li>• Iluminación LED y eficiencia energética</li>
                      <li>• Puesta a tierra y PAT</li>
                      <li>• Cableado estructurado</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Certificaciones y Formación</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Técnico Electrónico</h3>
                        <p className="text-sm text-muted-foreground">Instituto Técnico Superior - 2017</p>
                      </div>
                      <Badge>Título</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Instalador Eléctrico Matriculado</h3>
                        <p className="text-sm text-muted-foreground">Colegio de Técnicos - 2018</p>
                      </div>
                      <Badge>Matrícula</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Seguridad en Trabajos Eléctricos</h3>
                        <p className="text-sm text-muted-foreground">ART - 2020</p>
                      </div>
                      <Badge variant="secondary">Certificado</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
