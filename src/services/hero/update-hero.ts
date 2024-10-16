/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutate } from 'swr'

import axios from '~/config/apiConfig'

export async function editHero({ id, data }: { id: string; data: any }) {
	console.log('update: ', data)
	const formData = new FormData()
	formData.append('name', data.name)
	formData.append('description', data.description)
	if (typeof data.image !== 'string') formData.append('file', data.image)
	const response = await axios.put(`/heroes/${id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
	mutate(['/heroes', 'heroesId'])
	return response
}
