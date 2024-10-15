import { CircularProgress, Stack } from '@mui/material'

export const Loading = () => {
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}
		>
			<CircularProgress />
		</Stack>
	)
}
