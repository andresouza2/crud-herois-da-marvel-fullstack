import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Box, Button, Container, Stack, Typography } from '@mui/material'

import { Icon } from '@components/Icon'

import Magneto from '@assets/imagem-card-teste.png'

import { heroes } from '~/data/hero'

import { HeaderPage } from './HeaderPage'

export const HeroPage = () => {
	const [hero, setHero] = useState<{
		id: number
		title: string
		image: string
		imageUrl: string
		desc: string
	} | null>(null)

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const response = heroes.find((hero) => hero.id === Number(id))
		if (response) setHero(response)
	}, [])

	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage background={Magneto} />

			<Container maxWidth="md">
				<Typography
					variant="h2"
					color="text.secondary"
					sx={{ fontSize: '75px', fontFamily: 'Bebas Neue', textAlign: 'center' }}
				>
					{hero?.title}
				</Typography>

				<Typography sx={{ mt: 4, textAlign: 'justify', color: (theme) => theme.palette.primary.main }}>
					{hero?.desc}
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
					>
						<Icon name="edit" />
						Editar
					</Button>
				</Stack>
			</Container>
		</Box>
	)
}
