"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Phone, Code, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CVPreviewModal } from "./cv-preview-modal"
import { CVElectronica } from "./cv-electronica"
import { CVAtencionCliente } from "./cv-atencion-cliente"
import { CVDisenoWeb } from "./cv-diseno-web"

const profiles = [
  {
    id: "electronica",
    title: "Electrónica & Electricidad",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Experiencia técnica en diseño de circuitos, reparaciones, instalaciones eléctricas y mantenimiento.",
    skills: [
      "Diseño de circuitos electrónicos",
      "Instalaciones eléctricas residenciales",
      "Mantenimiento preventivo",
      "Normativas de seguridad",
      "Uso de instrumentación técnica",
    ],
    link: "/electronica",
    cvComponent: CVElectronica,
    cvFileName: "CV-Electronica-Electricidad",
  },
  {
    id: "atencion-cliente",
    title: "Atención al Cliente",
    icon: Phone,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description:
      "Habilidades de comunicación, resolución de conflictos y gestión de relaciones con clientes en entornos de call center.",
    skills: [
      "Comunicación efectiva",
      "Resolución de conflictos",
      "Manejo de CRM",
      "Empatía y escucha activa",
      "Métricas de satisfacción del cliente",
    ],
    link: "/atencion-cliente",
    cvComponent: CVAtencionCliente,
    cvFileName: "CV-Atencion-Cliente",
  },
  {
    id: "diseno-web",
    title: "Diseño & Desarrollo Web",
    icon: Code,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description:
      "Creación de experiencias digitales modernas con enfoque en UX, accesibilidad y tecnologías front-end.",
    skills: ["HTML, CSS, JavaScript", "React & Next.js", "Diseño responsive", "UX/UI Design", "Git & GitHub"],
    link: "/diseno-web",
    cvComponent: CVDisenoWeb,
    cvFileName: "CV-Diseno-Web",
  },
]

export function ProfileCards() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mis Áreas de Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorá cada perfil profesional para conocer mi experiencia, proyectos y habilidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {profiles.map((profile) => {
              const Icon = profile.icon
              const CVComponent = profile.cvComponent

              return (
                <Card key={profile.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${profile.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${profile.color}`} />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl mb-2">{profile.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{profile.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Habilidades Clave
                      </h4>
                      <ul className="space-y-2">
                        {profile.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2 text-sm">
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${profile.bgColor} flex-shrink-0`} />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-2">
                      <Link href={profile.link}>
                        <Button variant="outline" className="w-full group bg-transparent">
                          Ver Perfil Completo
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Button variant="default" className="w-full group" onClick={() => setOpenModal(profile.id)}>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar CV
                      </Button>
                    </div>
                  </CardContent>

                  <CVPreviewModal
                    open={openModal === profile.id}
                    onOpenChange={(open) => setOpenModal(open ? profile.id : null)}
                    title={`Vista Previa - CV ${profile.title}`}
                    fileName={profile.cvFileName}
                  >
                    <CVComponent />
                  </CVPreviewModal>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
