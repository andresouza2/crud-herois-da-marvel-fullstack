import { toast } from 'react-toastify'

import { mutate } from 'swr'
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export async function addHero(data: any) {
	console.log('add: ', data)
	const formData = new FormData()
	formData.append('name', data.name)
	formData.append('description', data.description)
	if (data.image && typeof data.image !== 'string') formData.append('file', data.image)
	try {
		const response = await axios.post<IHero, Error>('/heroes', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		mutate('/heroes')
		return response
	} catch (error: any) {
		if (Array.isArray(error.message)) {
			error.message.map((msg: string) => {
				toast.error('Failed to register hero ' + msg)
			})
			return
		}
		toast.error('Failed to register hero ' + error.message)
	}
}
