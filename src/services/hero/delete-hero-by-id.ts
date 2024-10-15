import { mutate } from 'swr'

import axios from '~/config/apiConfig'

export async function deleteHeroById(id: string) {
	try {
		await axios.delete(`heroes/${id}`)
		mutate('/heroes')
	} catch (err) {
		throw new Error('Erro ao deletar herói')
	}
}
