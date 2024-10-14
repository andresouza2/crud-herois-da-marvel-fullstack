import { AxiosResponse } from 'axios'
import useSWR from 'swr'

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export function useListHeroes() {
	const { data, error, isLoading } = useSWR<AxiosResponse<IHero[]>>('/heroes', () => axios.get('/heroes'), {
		refreshInterval: 0
	})

	return {
		heroes: data?.data ?? [],
		error,
		isLoading
	}
}
