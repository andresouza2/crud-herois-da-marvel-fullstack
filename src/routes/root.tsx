import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import { PublicLayout } from '../layouts/PublicLayout'
import { Home } from '../pages/Home'
import { HeroPage } from '../pages/hero/Hero'

export const routers = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<PublicRoute layout={PublicLayout} />}>
			<Route index element={<Home />} />
			<Route path="home" element={<Home />} />

			<Route path="heroes/:id" element={<HeroPage />} />
			<Route path="*" element={<Home />} />
		</Route>
	)
)
