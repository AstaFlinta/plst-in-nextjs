import { Button } from "./Button.js"
import { Input } from "./Input.js"
import { MoreVertical, Upload } from "lucide-react"

export default function Component() {
  return (
    <div className="flex h-screen bg-white font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="mb-4 text-lg font-semibold text-[#00454E]">Værktøjer</h2>
        <ul className="space-y-2">
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Document" className="text-lg">📄</span>
            <span className="text-sm text-black group-hover:text-black">Oprettelse af bemærkninger</span>
          </li>
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Magnifying Glass" className="text-lg">🔍</span>
            <span className="text-sm text-black group-hover:text-black">Søg dokumenter</span>
          </li>
        </ul>
        <h2 className="mb-2 mt-4 text-lg font-semibold text-[#00454E]">Andet</h2>
        <ul className="space-y-2">
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Question Mark" className="text-lg">❓</span>
            <span className="text-sm text-black group-hover:text-black">How-to</span>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5 text-[#00454E]" />
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          {/* Logo removed */}
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 flex items-center justify-center space-x-2 text-xl font-semibold text-[#00454E]">
              <span role="img" aria-label="Document" className="text-2xl">📄</span>
              <span>Automatisk oprettelse af bemærkninger</span>
            </h2>
            <p className="mb-4 text-center text-sm text-black">Upload en pdf, docx eller email.</p>
            <div className="rounded-lg border-2 border-dashed border-[#D4AF37] p-4">
              <div className="flex flex-col items-center">
                <Upload className="mb-2 h-8 w-8 text-[#00454E]" />
                <p className="mb-1 text-sm font-medium text-black">Drag and drop files here</p>
                <p className="mb-3 text-xs text-black">Limit 200MB per file • TXT, MD, EML, PDF, DOCX</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-[#00454E] text-white border-[#00454E] transition-colors hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black"
                >
                  Browse files
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}