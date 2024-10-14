import { Link } from 'react-router-dom'

import { CardContent, CardMedia, Card as CardMui, Typography } from '@mui/material'

import { IHero } from '~/models/hero-model'

import ImageTeste from '../../assets/imagem-card-teste.png'
import pathRoute from '../../routes/path-route'

interface Props {
	data: IHero
}

export const CardHero = ({ data }: Props) => {
	return (
		<CardMui>
			<CardMedia
				component="img"
				image={data.imageUrl.length > 0 ? data.imageUrl : ImageTeste}
				height={173}
				sx={{
					borderBottom: '4px solid #E62429'
				}}
			/>
			<CardContent
				sx={{
					'& a': {
						textDecoration: 'none',
						color: '#888888',
						fontFamily: 'Bebas Neue',

						'&:hover': {
							color: '#ece8e8',
							transition: 'all 0.5s ease-in-out'
						}
					}
				}}
			>
				<Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '2rem', mb: 6 }}>{data.name}</Typography>
				<Link to={`${pathRoute.heroes}/${data.id}`}>Ver mais</Link>
			</CardContent>
		</CardMui>
	)
}
