import { Outlet } from 'react-router-dom'

import { Stack } from '@mui/material'

import { Header } from './Header'

export function PublicLayout() {
	return (
		<Stack
			sx={{
				position: 'relative',
				minHeight: '100vh'
			}}
		>
			<Header />
			<Outlet />
		</Stack>
	)
}
