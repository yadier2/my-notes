import { useNavigate } from 'react-router-dom'
import { FormNoteStyles } from './FormNoteStyles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
	title: yup
		.string()
		.trim('Titulo no puede incluir espacios iniciales y finales')
		.min(3, 'Titulo debe tener al menos 3 caracteres')
		.max(255, 'Titulo no puede exceder los 255 caracteres')
		.required('Titulo es requerido'),
	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida')
})

let valueInital = { title: '', description: '' }
const FormNote = ({ onSubmit, update, data }) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
		defaultValues: update ? data : valueInital
	})

	return (
		<FormNoteStyles>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='col-25'>
					<label>Title </label>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('title')
						})}
						name='title'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.title?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<label>Description </label>
				</div>
				<div className='col-75'>
					<textarea
						{...(register && {
							...register('description')
						})}
						name='description'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.description?.message}
						</p>
					)}
				</div>

				<div className='box-actions'>
					<button className='btn-save' type='submit'>
						Save
					</button>

					<button onClick={() => navigate('/')} className='btn-cacel'>
						Cancel
					</button>
				</div>
			</form>
		</FormNoteStyles>
	)
}

export default FormNote
