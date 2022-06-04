import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Note from 'assets/images/note.png'
import { MinimalLayoutStyles } from './MinimalLayout.styles'
// ===========================|| MINIMAL LAYOUT ||=========================== //

const MinimalLayout = () => {
	const navigate = useNavigate()
	return (
		<MinimalLayoutStyles>
			<div className='navbar'>
				<div className='logo'>
					<img src={Note} alt='logo' width='100%' />
				</div>
				<div className='title'>
					<h1 onClick={() => navigate('/')}>My notes</h1>
				</div>
			</div>
			<Outlet />
		</MinimalLayoutStyles>
	)
}

export default MinimalLayout
