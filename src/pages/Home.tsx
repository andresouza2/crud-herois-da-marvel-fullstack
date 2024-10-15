import { toast } from 'react-toastify'

import { Box, Button, Container, Grid2 as Grid, Stack } from '@mui/material'

import { CardHero } from '@components/Card'
import { HeaderPage } from '@components/HeaderPage'
import { Icon } from '@components/Icon'

import Background from '@assets/bckground-gibi.png'

import { Loading } from '~/components/Loading'
import { useListHeroes } from '~/services/hero/List-all-heroes'

export const Home = () => {
	const { heroes, error, isLoading } = useListHeroes()

	if (error) {
		toast.error('Erro ao carregar os heróis')
	}

	if (isLoading) {
		return <Loading />
	}

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
					{heroes &&
						heroes.map((hero) => (
							<Grid size={2} key={hero.id}>
								<CardHero data={hero} />
							</Grid>
						))}
				</Grid>
			</Container>
		</Box>
	)
}
