import { AxiosResponse } from 'axios'
import useSWR from 'swr'

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export function useGetHeroById(id: string) {
	const {
		data,
		error: errorHero,
		isLoading: isLoadingHero
	} = useSWR<AxiosResponse<IHero>>(`/heroes/${id}`, () => axios.get(`heroes/${id}`), {
		refreshInterval: 0,
		revalidateOnFocus: true
	})

	return {
		hero: data?.data,
		errorHero,
		isLoadingHero
	}
}
