import { Stack, Typography } from '@mui/material'

import Logo from '../../assets/logo.svg'

interface Props {
	title?: string
	background?: string
}

export const HeaderPage = ({ title, background }: Props) => {
	return (
		<Stack
			sx={{
				width: '100%',
				height: '420px',
				clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
				backgroundImage: `url(${background ?? Logo})`,
				backgroundColor: (theme) => theme.palette.background.paper,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Typography variant="h1" color="text.secondary" sx={{ fontSize: '200px', fontFamily: 'Bebas Neue' }}>
				{title ?? ''}
			</Typography>
		</Stack>
	)
}
