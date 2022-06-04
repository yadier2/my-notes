import { NoteStyles } from './Notes.styles'
import { useDispatch } from 'react-redux'
import FormNote from 'components/FormNote/index.jsx'
import { useNavigate } from 'react-router-dom'

const GetNote = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	return (
		<NoteStyles>
			<h2 className='title'>View note </h2>
			<span className='back' onClick={() => navigate('/')}>
				X
			</span>
			<div className='date'>
				<p>25 de mayo 2022</p>
			</div>
			<div className='description'>
				<p>Lormen--</p>
			</div>
		</NoteStyles>
	)
}

export default GetNote
