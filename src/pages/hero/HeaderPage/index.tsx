import { Stack } from '@mui/material'

import Logo from '@assets/logo.svg'

interface Props {
	background?: string
}

export const HeaderPage = ({ background }: Props) => {
	return (
		<Stack
			sx={{
				width: '100%',
				height: '420px',
				clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
				backgroundImage: `url(${background ?? Logo})`,
				backgroundSize: { xs: 'cover', md: '80% auto' },
				backgroundColor: (theme) => theme.palette.background.paper,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		/>
	)
}
