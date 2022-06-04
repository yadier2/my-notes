import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NoteStyles } from './Notes.styles'
import FormNote from 'components/FormNote/index.jsx'
import { useParams } from 'react-router-dom'

const UpdateNote = () => {
	const dispatch = useDispatch()
	const [state, setState] = useState(false)
	let { id } = useParams()
	const onSubmit = (data) => {
		console.log(data)
	}

	let data = {
		title: 'Yadier caicedo',
		description: 'Pepe esta viajando por europa.'
	}
	return (
		<NoteStyles>
			<h2 className='title'>Update note</h2>
			<FormNote onSubmit={onSubmit} update data={data} />
		</NoteStyles>
	)
}

export default UpdateNote
