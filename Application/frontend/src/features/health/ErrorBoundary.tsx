import { ReactNode } from 'react'
import { StatusDot } from '../../components/ui/StatusDot'

interface ErrorBoundaryProps {
  children: ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let error: any = undefined
  try {
    return <>{children}</>
  } catch (e) {
    error = e
  }

  return (
    <div className="flex items-center">
      <StatusDot status="error" />
      <span className="text-red-600">Error: {error?.message || 'Something went wrong'}</span>
    </div>
  )
}