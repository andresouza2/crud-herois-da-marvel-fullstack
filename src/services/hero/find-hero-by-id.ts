// import { AxiosResponse } from 'axios'
import useSWR from 'swr'

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export function useGetHeroById(id: string) {
	const fetch = async (url: string) => axios.get(url).then((res) => res.data)

	const {
		data,
		error: errorHero,
		isLoading: isLoadingHero,
		mutate
	} = useSWR<IHero>(`/heroes/${id}`, fetch, {
		refreshInterval: 0,
		revalidateOnFocus: true
	})

	return {
		hero: data,
		errorHero,
		isLoadingHero,
		mutate
	}
}
