import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { SWRConfig } from 'swr'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { routers } from './routes/root'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/theme/muiTheme'
import 'react-toastify/dist/ReactToastify.css'
const minutes = 1 * 60 * 1000
function App() {
	return (
		<SWRConfig
			value={{
				refreshInterval: minutes,
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
				provider: () => new Map()
			}}
		>
			<ThemeProvider theme={lightTheme}>
				<RouterProvider router={routers} />
				<ToastContainer />
				<GlobalStyle />
				<CssBaseline />
			</ThemeProvider>
		</SWRConfig>
	)
}

export default App
