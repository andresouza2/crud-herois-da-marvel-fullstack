import { RouterProvider } from 'react-router-dom'

import { SWRConfig } from 'swr'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { routers } from './routes/root'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/theme/muiTheme'

function App() {
	return (
		<SWRConfig
			value={{
				refreshInterval: 3000,
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
			}}
		>
			<ThemeProvider theme={lightTheme}>
				<RouterProvider router={routers} />
				<GlobalStyle />
				<CssBaseline />
			</ThemeProvider>
		</SWRConfig>
	)
}

export default App
