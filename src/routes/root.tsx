import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { PublicLayout } from '~/layouts/PublicLayout'
import { AddHero } from '~/pages/addHero/AddHero'
import { HeroPage } from '~/pages/hero/Hero'
import { Home } from '~/pages/Home'

import pathRoute from './path-route'
import { PublicRoute } from './PublicRoute'

export const routers = createBrowserRouter(
	createRoutesFromElements(
		<Route path={pathRoute.home} element={<PublicRoute layout={PublicLayout} />}>
			<Route index element={<Home />} />
			<Route path="home" element={<Home />} />

			<Route path={`${pathRoute.heroes}/:id`} element={<HeroPage />} />
			<Route path={pathRoute.addHero} element={<AddHero />} />

			<Route path="*" element={<Home />} />
		</Route>
	)
)
