import { Mail, Phone, MapPin, Headphones } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

export function CVAtencionCliente() {
  const portfolioUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/atencion-cliente`
      : "https://tu-portafolio.com/atencion-cliente"

  return (
    <div className="space-y-6 text-gray-900">
      {/* Header */}
      <div className="border-b-2 border-secondary pb-4">
        <h1 className="text-3xl font-bold text-secondary mb-1">Tu Nombre</h1>
        <p className="text-lg font-semibold text-gray-700">Especialista en Atención al Cliente</p>
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
        <h2 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2">
          <Headphones className="h-5 w-5" />
          Perfil Profesional
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Profesional orientado al cliente con experiencia en call centers y atención multicanal. Habilidades destacadas
          en comunicación efectiva, resolución de conflictos y manejo de herramientas CRM. Comprometido con la
          excelencia en el servicio y la satisfacción del cliente.
        </p>
      </div>

      {/* Experiencia y Habilidades en dos columnas */}
      <div className="grid grid-cols-2 gap-6">
        {/* Experiencia */}
        <div>
          <h2 className="text-lg font-bold text-secondary mb-3">Experiencia Laboral</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Agente de Atención al Cliente</h3>
              <p className="text-xs text-gray-600">Call Center XYZ | 2021 - Presente</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Atención telefónica y chat en vivo</li>
                <li>• Resolución de consultas técnicas</li>
                <li>• Satisfacción del cliente: 95%</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Soporte Técnico</h3>
              <p className="text-xs text-gray-600">Empresa ABC | 2019 - 2021</p>
              <ul className="text-xs mt-1 space-y-0.5 text-gray-700">
                <li>• Soporte multicanal (teléfono, email)</li>
                <li>• Gestión de tickets en CRM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Habilidades y QR */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">Habilidades Clave</h2>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Comunicación efectiva</li>
              <li>• Resolución de conflictos</li>
              <li>• Manejo de CRM (Salesforce, Zendesk)</li>
              <li>• Empatía y escucha activa</li>
              <li>• Trabajo bajo presión</li>
              <li>• Atención multicanal</li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center pt-2">
            <QRCodeSVG value={portfolioUrl} size={80} />
            <p className="text-xs text-gray-600 mt-2 text-center">Escaneá para ver mi portafolio completo</p>
          </div>
        </div>
      </div>

      {/* Logros */}
      <div>
        <h2 className="text-lg font-bold text-secondary mb-2">Logros Destacados</h2>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• Mejor índice de satisfacción del trimestre (Q1 2024)</li>
          <li>• Reconocimiento por manejo de situaciones complejas</li>
        </ul>
      </div>
    </div>
  )
}
