/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export async function addHero(data: any) {
	const formData = new FormData()
	formData.append('name', data.name)
	formData.append('description', data.description)
	if (data.image && typeof data.image !== 'string') formData.append('file', data.image)

	const response = await axios.post<IHero>('/heroes', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	return response.data
}
