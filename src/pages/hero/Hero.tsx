import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Box, Button, Container, Stack, Typography } from '@mui/material'

import { Icon } from '@components/Icon'

import { Loading } from '~/components/Loading'
import pathRoute from '~/routes/path-route'
import { deleteHeroById } from '~/services/hero/delete-hero-by-id'
import { useGetHeroById } from '~/services/hero/find-hero-by-id'

import { HeaderPage } from './HeaderPage'

export const HeroPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { hero, errorHero, isLoadingHero } = useGetHeroById(id!)

	async function handleDelete(valueId: string) {
		try {
			await deleteHeroById(valueId)
			toast.success('Herói deletado com sucesso')
		} catch (err) {
			toast.error('Erro ao deletar herói')
			return
		}
		navigate('/')
	}

	if (errorHero) {
		toast.error(errorHero.response.message)
	}

	if (isLoadingHero) {
		return <Loading />
	}
	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage background={hero?.imageUrl} />

			<Container maxWidth="md">
				<Typography
					variant="h2"
					color="text.secondary"
					sx={{ fontSize: '75px', fontFamily: 'Bebas Neue', textAlign: 'center' }}
				>
					{hero?.name}
				</Typography>

				<Typography sx={{ mt: 4, textAlign: 'justify', color: (theme) => theme.palette.primary.main }}>
					{hero?.description}
				</Typography>

				<Stack direction={'row'} justifyContent={'center'} sx={{ mt: 4 }} spacing={2} alignItems={'center'}>
					<Button
						variant="outlined"
						size="large"
						sx={{
							minWidth: 152,
							background: 'transparent',
							'&:hover': {
								color: '#000000'
							}
						}}
						onClick={() => navigate(-1)}
					>
						Voltar
					</Button>
					<Button
						variant="contained"
						size="large"
						sx={{
							minWidth: 152,
							background: '#E62429'
						}}
						onClick={() => handleDelete(id!)}
					>
						<Icon name="delete" />
						Deletar
					</Button>
					<Button
						variant="contained"
						size="large"
						sx={{
							minWidth: 152,
							background: (theme) => theme.palette.text.secondary
						}}
						onClick={() => navigate(pathRoute.addHero, { state: { hero } })}
					>
						<Icon name="edit" />
						Editar
					</Button>
				</Stack>
			</Container>
		</Box>
	)
}
