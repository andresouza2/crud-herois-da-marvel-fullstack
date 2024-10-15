import React from 'react'
import { Navigate } from 'react-router-dom'

import pathRoute from './path-route'

type PublicRouteProps = {
	layout: React.ComponentType
}
export const PublicRoute = ({ layout: Layout }: PublicRouteProps): React.ReactElement | null => {
	const isAuthhenticated = false

	if (isAuthhenticated) return <Navigate to={pathRoute.home} />

	return <Layout />
}
