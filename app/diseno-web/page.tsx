import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Palette, Laptop, ExternalLink, Github } from "lucide-react"

export default function DisenoWebPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Diseño & Desarrollo Web</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creación de experiencias digitales modernas, responsive y accesibles utilizando las últimas tecnologías
                front-end y mejores prácticas de UX/UI.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Laptop className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">E-commerce Moderno</CardTitle>
                    <CardDescription>
                      Tienda online completa con carrito de compras, pasarela de pagos y panel de administración.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <Palette className="h-16 w-16 text-secondary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">Portfolio Interactivo</CardTitle>
                    <CardDescription>
                      Sitio web personal con animaciones, galería de proyectos y formulario de contacto funcional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Framer Motion</Badge>
                      <Badge variant="secondary">CSS Modules</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <Code className="h-16 w-16 text-accent/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">Dashboard de Análisis</CardTitle>
                    <CardDescription>
                      Aplicación web con gráficos interactivos, tablas de datos y visualizaciones en tiempo real.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Chart.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/5 flex items-center justify-center">
                    <Laptop className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">Landing Page Corporativa</CardTitle>
                    <CardDescription>
                      Sitio institucional optimizado para SEO con diseño responsive y alta performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">HTML5</Badge>
                      <Badge variant="secondary">CSS3</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">SEO</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
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
              <h2 className="text-3xl font-bold mb-12 text-center">Stack Tecnológico</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="h-5 w-5 text-accent" />
                      <CardTitle>Front-end</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Lenguajes</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>HTML5</Badge>
                          <Badge>CSS3</Badge>
                          <Badge>JavaScript ES6+</Badge>
                          <Badge>TypeScript</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Frameworks & Libraries</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>React</Badge>
                          <Badge>Next.js</Badge>
                          <Badge>Vue.js</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Palette className="h-5 w-5 text-accent" />
                      <CardTitle>Diseño & Estilos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">CSS Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Tailwind CSS</Badge>
                          <Badge>Bootstrap</Badge>
                          <Badge>Sass/SCSS</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Herramientas de Diseño</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Figma</Badge>
                          <Badge>Adobe XD</Badge>
                          <Badge>Photoshop</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Github className="h-5 w-5 text-accent" />
                      <CardTitle>Control de Versiones</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Git & GitHub</li>
                      <li>• GitFlow workflow</li>
                      <li>• Pull requests y code reviews</li>
                      <li>• Git hooks y automatización</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Laptop className="h-5 w-5 text-accent" />
                      <CardTitle>Otras Habilidades</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Responsive Design</li>
                      <li>• Accesibilidad Web (WCAG)</li>
                      <li>• SEO y Web Performance</li>
                      <li>• APIs REST y GraphQL</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Experiencia y Formación</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">Front-end Developer Freelance</CardTitle>
                      <Badge variant="secondary">2020 - Presente</Badge>
                    </div>
                    <CardDescription className="text-base">Proyectos independientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Desarrollo de sitios web y aplicaciones para clientes diversos</li>
                      <li>• Implementación de diseños responsive y accesibles</li>
                      <li>• Optimización de performance y SEO</li>
                      <li>• Mantenimiento y actualización de proyectos existentes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Desarrollo Web Full Stack</h3>
                        <p className="text-sm text-muted-foreground">Bootcamp CoderHouse - 2020</p>
                      </div>
                      <Badge>Certificado</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Responsive Web Design</h3>
                        <p className="text-sm text-muted-foreground">freeCodeCamp - 2019</p>
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
