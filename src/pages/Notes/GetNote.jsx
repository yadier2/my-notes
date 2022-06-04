import { NoteStyles } from './Notes.styles'
import { useDispatch, useSelector } from 'react-redux'
import FormNote from 'components/FormNote/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchNote } from 'store/noteApi'
import { useEffect, useState } from 'react'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'

const GetNote = () => {
	let { id } = useParams()
	const [mount, setMount] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { note, pending,error} = useSelector((state) => state.note)
	
	useEffect(() => {
		if(!mount) {
		   setMount(true);
		   dispatch(fetchNote(id));
		}
	 },[ mount]);

	 if(pending) return <Loading/>
	 if(error) return <NotFound/>
	return (
		<NoteStyles>
			<h2 className='title'>{note.title}</h2>
			<span className='back' onClick={() => navigate('/')}>
				X
			</span>
			<div className='date'>
				<p>{note.updateAt}</p>
			</div>
			<div className='description'>
				<p>{note.description}</p>
			</div>
		</NoteStyles>
	)
}

export default GetNote
