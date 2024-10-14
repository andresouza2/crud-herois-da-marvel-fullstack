import { SvgIcon, SvgIconProps } from '@mui/material'

interface Props extends SvgIconProps {
	component: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined
		}
	>
}

export const IconSvg = ({ component: ReactComponent, ...rest }: Props) => {
	return (
		<SvgIcon
			component={ReactComponent}
			fill="inherit"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			{...rest}
		/>
	)
}
