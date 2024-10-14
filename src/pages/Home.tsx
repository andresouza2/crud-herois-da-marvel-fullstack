import useSWR from 'swr'

import { Box, Button, CircularProgress, Container, Grid2 as Grid, Stack } from '@mui/material'

import { CardHero } from '@components/Card'
import { HeaderPage } from '@components/HeaderPage'
import { Icon } from '@components/Icon'

import Background from '@assets/bckground-gibi.png'

import { heroes } from '~/data/hero'
import ListAllHeroes from '~/services/hero/List-all-heroes'

export const Home = () => {
	const { data, error, isLoading } = useSWR('heroes', ListAllHeroes.listHeroes, {
		refreshInterval: 0
	})

	if (error) {
		console.log(error)
	}

	if (isLoading) {
		return <CircularProgress />
	}

	console.log({ data, error, isLoading })

	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage title="Heróis" background={Background} />

			<Container maxWidth="xl">
				<Stack direction="row" justifyContent="flex-end" sx={{ mt: 4 }}>
					<Button
						variant="contained"
						size="large"
						sx={{
							background: '#E62429'
						}}
					>
						<Icon name="plus" />
						Cadastrar
					</Button>
				</Stack>

				<Grid container spacing={2} sx={{ my: 4 }}>
					{heroes.map((hero) => (
						<Grid size={2} key={hero.id}>
							<CardHero data={hero} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	)
}
