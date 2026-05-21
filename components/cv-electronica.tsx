import { Mail, Phone, MapPin, Zap } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

export function CVElectronica() {
  const portfolioUrl =
    typeof window !== "undefined" ? `${window.location.origin}/electronica` : "https://tu-portafolio.com/electronica"

  return (
    <div className="space-y-6 text-gray-900">
      {/* Header */}
      <div className="border-b-2 border-primary pb-4">
        <h1 className="text-3xl font-bold text-primary mb-1">Tu Nombre</h1>
        <p className="text-lg font-semibold text-gray-700">Técnico en Electrónica y Electricidad</p>
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
        <h2 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Perfil Profesional
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Técnico especializado en electrónica y electricidad con experiencia en diseño de circuitos, instalaciones
          eléctricas, mantenimiento preventivo y correctivo. Conocimiento profundo de normativas de seguridad y uso de
          instrumentación técnica especializada.
        </p>
      </div>

      {/* Experiencia y Habilidades en dos columnas */}
      <div className="grid grid-cols-2 gap-6">
        {/* Experiencia */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-3">Experiencia Laboral</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Técnico Electrónico</h3>
              <p className="text-xs text-gray-600">Empresa XYZ | 2020 - Presente</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Reparación y mantenimiento de equipos</li>
                <li>• Diseño de circuitos electrónicos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Instalador Eléctrico</h3>
              <p className="text-xs text-gray-600">Empresa ABC | 2018 - 2020</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Instalaciones residenciales</li>
                <li>• Mantenimiento preventivo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Habilidades y QR */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-primary mb-2">Habilidades Técnicas</h2>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Diseño de circuitos electrónicos</li>
              <li>• Instalaciones eléctricas</li>
              <li>• Mantenimiento preventivo</li>
              <li>• Normativas de seguridad</li>
              <li>• Instrumentación técnica</li>
              <li>• Lectura de planos eléctricos</li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center pt-2">
            <QRCodeSVG value={portfolioUrl} size={80} />
            <p className="text-xs text-gray-600 mt-2 text-center">Escaneá para ver mi portafolio completo</p>
          </div>
        </div>
      </div>

      {/* Formación */}
      <div>
        <h2 className="text-lg font-bold text-primary mb-2">Formación Académica</h2>
        <div className="text-sm text-gray-700">
          <p className="font-semibold">Técnico en Electrónica</p>
          <p className="text-xs text-gray-600">Instituto Técnico | 2015 - 2018</p>
        </div>
      </div>
    </div>
  )
}
