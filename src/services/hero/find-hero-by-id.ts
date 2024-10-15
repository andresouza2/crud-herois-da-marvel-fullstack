import { AxiosResponse } from 'axios'
import useSWR from 'swr'

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export function useGetHeroById(id: string) {
	const {
		data,
		error: errorHero,
		isLoading: isLoadingHero
	} = useSWR<AxiosResponse<IHero>>(`heroesId`, () => axios.get(`heroes/${id}`), {
		refreshInterval: 0,
		revalidateOnFocus: false
	})

	return {
		hero: data?.data,
		errorHero,
		isLoadingHero
	}
}
