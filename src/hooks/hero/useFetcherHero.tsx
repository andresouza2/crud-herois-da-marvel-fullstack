import useSWR from 'swr'

import axios from '~/config/apiConfig'
import { IHero } from '~/models/hero-model'

export function useFetcherHero() {
	const fetcher = async (url: string) => axios.get(url).then((res) => res.data)

	const { data, error, isLoading } = useSWR<IHero[], Error>('/heroes', fetcher)
	console.log(data)

	return { data: data, error, isLoading }
}
