import { createTheme } from '@mui/material'
import { orange, blueGrey } from '@mui/material/colors'
// darkScrollbar
declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string
		}
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string
		}
	}
}

const theme = createTheme({
	typography: {
		button: {
			textTransform: 'capitalize',
			fontSize: 14
		},
		fontFamily: 'Noto Sans, sans-serif'
	},
	components: {
		MuiButton: {
			defaultProps: {
				size: 'large'
			},
			styleOverrides: {
				root: {
					minWidth: 118,
					fontSize: 14,
					borderRadius: '6px',
					boxShadow: 'none',
					fontWeight: 400,
					background: '#000000'
				},
				sizeLarge: {
					minHeight: 44
				},
				outlined: {
					borderWidth: 2,
					':hover': {
						borderWidth: 2
					}
				}
			}
		}
	}
})

export const lightTheme = createTheme({
	...theme,
	status: {
		danger: orange[500]
	},
	components: {
		...theme.components,
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: blueGrey[50]
				}
			}
		}
	},
	palette: {
		mode: 'light',
		background: {
			default: '#151515',
			paper: '#000000'
		},
		primary: {
			main: '#888888'
		},
		secondary: {
			main: '#1E1E1E'
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#1E1E1E',
			disabled: '#888888'
		}
	}
})
