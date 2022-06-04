import { NoteStyles } from './Notes.styles'

import { useDispatch } from 'react-redux'
import FormNote from 'components/FormNote/index.jsx'

const AddNote = () => {
	const dispatch = useDispatch()

	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<NoteStyles>
			<h2 className='title'>Add note</h2>
			<FormNote onSubmit={onSubmit} />
		</NoteStyles>
	)
}

export default AddNote
