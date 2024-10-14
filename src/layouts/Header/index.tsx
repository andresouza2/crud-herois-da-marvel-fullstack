import { styled, Toolbar } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

import Logo from '../../assets/logo.svg'

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				width: '100%',
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen
				})
			}
		}
	],
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	background: theme.palette.background.default
}))
export const Header = () => {
	return (
		<AppBar position="static" open={false}>
			<Toolbar>
				<img src={Logo} width={100} alt="Logo" />
			</Toolbar>
		</AppBar>
	)
}
