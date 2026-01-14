// Cache the promise to avoid creating a new one on every render
interface HealthResponse {
  status: string;
  message?: string;
}

let healthPromise: Promise<HealthResponse> | null = null

export function useHealthStatus() {
  if (!healthPromise) {
    healthPromise = fetchHealthStatus()
  }
  return healthPromise
}

async function fetchHealthStatus(): Promise<HealthResponse> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/health`)
    if (!response.ok) return { status: 'error' }
    const data = await response.json()
    return data
  } catch (error) {
    return { status: 'error', message: (error as Error).message }
  }
}