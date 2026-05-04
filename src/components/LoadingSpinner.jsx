import { Loader2 } from 'lucide-react'

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-10 h-10 text-amber-600 animate-spin" />
      <p className="mt-4 text-sm text-slate-500 font-medium">Loading jokes...</p>
    </div>
  )
}

export default LoadingSpinner