import React, { lazy } from 'react'

// project imports
import MinimalLayout from 'layout/MinimalLayout'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'
import AddNote from 'pages/Notes/AddNote.jsx'
import UpdateNote from 'pages/Notes/UpdateNote'
import GetNote from 'pages/Notes/GetNote'

// public routing
const Home = Loadable(lazy(() => import('pages/Home/index')))

// ===========================|| PUBLIC ROUTING ||=========================== //

const PublicRoutes = {
	path: '',
	element: <MinimalLayout />,
	children: [
		{
			path: '/',
			element: (
				<NavMotion>
					<Home />
				</NavMotion>
			)
		},
		{
			path: '/view-note/:id',
			element: (
				<NavMotion>
					<GetNote />
				</NavMotion>
			)
		},
		{
			path: '/add-note',
			element: (
				<NavMotion>
					<AddNote />
				</NavMotion>
			)
		},
		{
			path: '/update-note/:id',
			element: (
				<NavMotion>
					<UpdateNote />
				</NavMotion>
			)
		}
	]
}

export default PublicRoutes
