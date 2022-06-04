import { NoteStyles } from './Notes.styles'

import { useDispatch } from 'react-redux'
import FormNote from 'components/FormNote/index.jsx'
import { useNavigate } from 'react-router-dom'
import { serviceCreateNote } from 'store/noteApi'

const AddNote = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const onSubmit = (data) => {
		dispatch(serviceCreateNote(data, navigate))
	}
	return (
		<NoteStyles>
			<h2 className='title'>Add note</h2>
			<FormNote onSubmit={onSubmit} />
		</NoteStyles>
	)
}

export default AddNote
