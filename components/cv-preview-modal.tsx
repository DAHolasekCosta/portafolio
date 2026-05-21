"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface CVPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: React.ReactNode
  fileName: string
}

export function CVPreviewModal({ open, onOpenChange, title, children, fileName }: CVPreviewModalProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const cvRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cvRef.current) return

    setIsGenerating(true)
    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${fileName}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {title}
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div ref={cvRef} className="bg-white p-8 rounded-lg shadow-sm">
            {children}
          </div>

          <Button onClick={handleDownload} disabled={isGenerating} className="w-full" size="lg">
            <Download className="mr-2 h-5 w-5" />
            {isGenerating ? "Generando PDF..." : "Confirmar Descarga"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
