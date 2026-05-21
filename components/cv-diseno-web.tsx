import { Mail, Phone, MapPin, Code } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

export function CVDisenoWeb() {
  const portfolioUrl =
    typeof window !== "undefined" ? `${window.location.origin}/diseno-web` : "https://tu-portafolio.com/diseno-web"

  return (
    <div className="space-y-6 text-gray-900">
      {/* Header */}
      <div className="border-b-2 border-accent pb-4">
        <h1 className="text-3xl font-bold text-accent mb-1">Tu Nombre</h1>
        <p className="text-lg font-semibold text-gray-700">Diseñador y Desarrollador Web</p>
        <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            <span>tu.email@ejemplo.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>+54 123 456 7890</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Argentina</span>
          </div>
        </div>
      </div>

      {/* Perfil */}
      <div>
        <h2 className="text-lg font-bold text-accent mb-2 flex items-center gap-2">
          <Code className="h-5 w-5" />
          Perfil Profesional
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Desarrollador web frontend especializado en crear experiencias digitales modernas y accesibles. Dominio de
          tecnologías actuales como React, Next.js y Tailwind CSS. Enfoque en diseño responsive, UX/UI y mejores
          prácticas de desarrollo.
        </p>
      </div>

      {/* Experiencia y Habilidades en dos columnas */}
      <div className="grid grid-cols-2 gap-6">
        {/* Experiencia */}
        <div>
          <h2 className="text-lg font-bold text-accent mb-3">Experiencia Laboral</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Desarrollador Frontend</h3>
              <p className="text-xs text-gray-600">Freelance | 2022 - Presente</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Desarrollo de sitios web responsive</li>
                <li>• Implementación de diseños en React</li>
                <li>• Optimización de performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Diseñador Web</h3>
              <p className="text-xs text-gray-600">Agencia Digital | 2020 - 2022</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Diseño de interfaces UI/UX</li>
                <li>• Maquetación HTML/CSS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Habilidades y QR */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-accent mb-2">Tecnologías</h2>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• HTML5, CSS3, JavaScript (ES6+)</li>
              <li>• React & Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• Git & GitHub</li>
              <li>• Diseño responsive</li>
              <li>• UX/UI Design</li>
              <li>• Accesibilidad web (WCAG)</li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center pt-2">
            <QRCodeSVG value={portfolioUrl} size={80} />
            <p className="text-xs text-gray-600 mt-2 text-center">Escaneá para ver mi portafolio completo</p>
          </div>
        </div>
      </div>

      {/* Proyectos */}
      <div>
        <h2 className="text-lg font-bold text-accent mb-2">Proyectos Destacados</h2>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• E-commerce con carrito de compras y pasarela de pago</li>
          <li>• Landing page corporativa con animaciones y optimización SEO</li>
          <li>• Dashboard administrativo con gráficos y tablas dinámicas</li>
        </ul>
      </div>
    </div>
  )
}
