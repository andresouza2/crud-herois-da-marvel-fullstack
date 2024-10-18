/* eslint-disable @typescript-eslint/no-explicit-any */
// import { mutate } from 'swr'

import axios from '~/config/apiConfig'

export async function editHero({ id, data }: { id: string; data: any }) {
	const formData = new FormData()
	formData.append('name', data.name)
	formData.append('description', data.description)
	if (typeof data.image !== 'string') formData.append('file', data.image)
	const response = await axios.put(`/heroes/${id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
	// mutate(['/heroes', '/heroes/id'])
	return response
}
