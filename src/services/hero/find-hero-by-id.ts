import useSWR from 'swr'

import axios from '~/config/apiConfig'

export function useGetHeroById(id: string) {
	const {
		data: hero,
		error: errorHero,
		isLoading: isLoadingHero
	} = useSWR(`heroes/${id}`, () => axios.get(`heroes/${id}`))

	return {
		hero,
		errorHero,
		isLoadingHero
	}
}
