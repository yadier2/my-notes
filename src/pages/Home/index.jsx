import { useNavigate } from 'react-router-dom'
import { HomeStyles } from './Home.styles'
const Home = () => {
	const navigate = useNavigate()

	return (
		<HomeStyles>
			<div className='title-add'>
				<h2 onClick={() => navigate('/add-note')}>Add note</h2>
			</div>
			<div className='cards'>
				{[, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
					<div
						className='card'
						onClick={(event) => {
							event.stopPropagation()
							navigate(`/view-note/${id}`)
						}}
					>
						<div className='card-head'>
							<p>13 de mayo del 2020</p>
						</div>
						<div className='card-body'>
							<h2>Este es el contenido de una nota.</h2>
						</div>
						<div className='card-actions'>
							<a
								className='card-edit'
								onClick={(event) => {
									event.stopPropagation()
									navigate(`/update-note/${id}`)
								}}
							>
								Editar
							</a>
							<a className='card-delete'>Borrar</a>
						</div>
					</div>
				))}
			</div>
			<div className='no-notes'>
				<p>Aquí aparecerán tus notas.</p>
			</div>
		</HomeStyles>
	)
}

export default Home
