const API_URL = import.meta.env.VITE_API_URL

export const api = async <T>(
	endpoint: string,
	options?: RequestInit,
): Promise<T> => {
	const response = await fetch(`${API_URL}${endpoint}`, options)

	if (!response.ok) {
		throw new Error(`API error: ${response.status}`)
	}

	return response.json() as Promise<T>
}
