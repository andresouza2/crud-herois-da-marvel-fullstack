import React from 'react'
import { Navigate } from 'react-router-dom'

type PublicRouteProps = {
	layout: React.ComponentType
}
export const PublicRoute = ({ layout: Layout }: PublicRouteProps): React.ReactElement | null => {
	const isAuthhenticated = false

	if (isAuthhenticated) return <Navigate to="/" />

	return <Layout />
}
