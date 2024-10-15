import { Box, Container, Grid2 as Grid } from '@mui/material'

import { HeaderPage } from '@components/HeaderPage'

import Background from '@assets/bckground-gibi.png'

export const AddHero = () => {
	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage title="Cadastrar" background={Background} />

			<Container maxWidth="xl">
				<Grid container></Grid>
			</Container>
		</Box>
	)
}
