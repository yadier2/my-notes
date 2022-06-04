import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NoteStyles } from './Notes.styles'
import FormNote from 'components/FormNote/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchNote, serviceUpdateNote } from 'store/noteApi'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'

const UpdateNote = () => {
	const dispatch = useDispatch()
	const [mount, setMount] = useState(false)
	const { note, pending, error } = useSelector((state) => state.note)
	const navigate = useNavigate()
	let { id } = useParams()

	const onSubmit = (data) => {
		dispatch(serviceUpdateNote(id, data, navigate))
	}

	useEffect(() => {
		if (!mount) {
			setMount(true)
			dispatch(fetchNote(id))
		}
	}, [mount])

	if (pending) return <Loading />
	if (error) return <NotFound />
	let { title, description } = note

	return (
		<NoteStyles>
			<h2 className='title'>Update note</h2>
			{note && (
				<FormNote
					onSubmit={onSubmit}
					update
					data={{ title, description }}
				/>
			)}
		</NoteStyles>
	)
}

export default UpdateNote
