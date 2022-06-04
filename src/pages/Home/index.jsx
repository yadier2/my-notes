import Dialog from 'components/Dialog'
import Loading from 'components/Loading'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchNotes, serviceDeleteNote } from 'store/noteApi'
import { HomeStyles } from './Home.styles'

const Home = () => {
	const [mount, setMount] = useState(false)
	const [open, setOpen] = useState(false)
	const [id, setId] = useState(null)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { notes, pending } = useSelector((state) => state.note)

	useEffect(() => {
		if (!mount) {
			setMount(true)
			dispatch(fetchNotes())
		}
	}, [mount])

	useEffect(() => {
		setOpen(false)
	}, [notes])

	const handleDelte = () => {
		dispatch(serviceDeleteNote(id, navigate))
	}

	if (pending) return <Loading />

	return (
		<HomeStyles>
			<Dialog open={open} setOpen={setOpen} handleDelte={handleDelte} />
			<div className='title-add'>
				<h2 onClick={() => navigate('/add-note')}>Add note</h2>
			</div>
			<div className='cards'>
				{notes.map((item) => (
					<div
						key={item.id + 'nt'}
						className='card'
						onClick={(event) => {
							event.stopPropagation()
							navigate(`/view-note/${item.id}`)
						}}
					>
						<div className='card-head'>
							<p>{item.updatedAt}</p>
						</div>
						<div className='card-body'>
							<h2>{item.title}</h2>
						</div>
						<div className='card-actions'>
							<Link
								to={`/update-note/${item.id}`}
								className='card-edit'
								onClick={(event) => event.stopPropagation()}
							>
								Editar
							</Link>
							<Link
								to={'/'}
								className='card-delete'
								onClick={(event) => {
									event.stopPropagation()
									setOpen(!open)
									setId(item.id)
								}}
							>
								Borrar
							</Link>
						</div>
					</div>
				))}
			</div>
			{notes.length < 1 && (
				<div className='no-notes'>
					<p>Aquí aparecerán tus notas.</p>
				</div>
			)}
		</HomeStyles>
	)
}

export default Home
