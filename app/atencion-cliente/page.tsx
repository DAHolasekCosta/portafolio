import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Users, MessageSquare, TrendingUp } from "lucide-react"

export default function AtencionClientePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Atención al Cliente</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experiencia en atención telefónica, gestión de reclamos, resolución de conflictos y mantenimiento de
                altos estándares de satisfacción del cliente.
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
                      <CardTitle className="text-xl">Supervisor de Call Center</CardTitle>
                      <Badge variant="secondary">2021 - Presente</Badge>
                    </div>
                    <CardDescription className="text-base">Telecom Solutions S.A.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Supervisión de equipo de 15 agentes de atención al cliente</li>
                      <li>• Gestión de KPIs: tiempo de respuesta, satisfacción y resolución</li>
                      <li>• Capacitación y coaching de personal nuevo</li>
                      <li>• Manejo de escalamientos y casos complejos</li>
                      <li>• Mejora de procesos y procedimientos internos</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm font-semibold mb-2">Logros destacados:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">↑ 25% satisfacción del cliente</Badge>
                        <Badge variant="outline">↓ 30% tiempo promedio de atención</Badge>
                        <Badge variant="outline">95% de resolución en primer contacto</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">Agente de Atención al Cliente</CardTitle>
                      <Badge variant="secondary">2019 - 2021</Badge>
                    </div>
                    <CardDescription className="text-base">Contact Center Pro</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Atención telefónica y por chat de clientes de telecomunicaciones</li>
                      <li>• Resolución de consultas técnicas y comerciales</li>
                      <li>• Gestión de reclamos y seguimiento de casos</li>
                      <li>• Registro detallado en sistema CRM</li>
                      <li>• Venta cruzada de productos y servicios</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Clave</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-5 w-5 text-secondary" />
                      <CardTitle>Comunicación</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Comunicación verbal y escrita efectiva</li>
                      <li>• Escucha activa y empatía</li>
                      <li>• Adaptación del lenguaje al perfil del cliente</li>
                      <li>• Manejo de objeciones</li>
                      <li>• Técnicas de persuasión</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-5 w-5 text-secondary" />
                      <CardTitle>Resolución de Conflictos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Manejo de situaciones difíciles</li>
                      <li>• Desescalamiento de conflictos</li>
                      <li>• Negociación y búsqueda de soluciones</li>
                      <li>• Control emocional bajo presión</li>
                      <li>• Enfoque en la satisfacción del cliente</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <CardTitle>Gestión de Métricas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• KPIs: TMO, FCR, CSAT, NPS</li>
                      <li>• Análisis de reportes de gestión</li>
                      <li>• Identificación de oportunidades de mejora</li>
                      <li>• Cumplimiento de objetivos</li>
                      <li>• Seguimiento de casos y escalamientos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="h-5 w-5 text-secondary" />
                      <CardTitle>Herramientas y Sistemas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• CRM: Salesforce, Zendesk</li>
                      <li>• Sistemas de ticketing</li>
                      <li>• Chat en vivo y WhatsApp Business</li>
                      <li>• Telefonía IP y softphones</li>
                      <li>• Suite Microsoft Office</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Reconocimientos</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Mejor Agente del Mes - 5 veces</h3>
                        <p className="text-sm text-muted-foreground">
                          Reconocido por alcanzar los mejores índices de satisfacción del cliente y tiempo de resolución
                          durante múltiples períodos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Certificación en Excelencia en Servicio</h3>
                        <p className="text-sm text-muted-foreground">
                          Formación especializada en técnicas avanzadas de atención al cliente y gestión de experiencia
                          del cliente (CX).
                        </p>
                      </div>
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
