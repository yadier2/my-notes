import React from 'react'
import { DialogStyles } from './dialog.styles'
// ===========================|| Loader ||=========================== //

const Dialog = ({ open, setOpen, handleDelte }) => {
	return (
		<DialogStyles>
			<dialog open={open}>
				<h2>¿Desea elimiar este registro?</h2>

				<button className='apply' onClick={() => setOpen(false)}>
					Cancel
				</button>
				<button className='close-modal' onClick={handleDelte}>
					Delete
				</button>
			</dialog>
		</DialogStyles>
	)
}

export default Dialog
