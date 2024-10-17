import Axios, { AxiosInstance } from 'axios'

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
export class ApiError extends Error {}

const axios: AxiosInstance = Axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL ?? 'https://heroes-api-chi.vercel.app'
})

// refresh token
axios.interceptors.response.use(
	function (response) {
		return response
	},
	async (error) => {
		return Promise.reject(error.response.data)
	}
)

// Add a request interceptor
axios.interceptors.request.use(async (config) => {
	return config
})

export default axios
