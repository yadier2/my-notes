import axios from "axios"
import { DELETE_NOTE_SUCCESS, FETCH_NOTES_SUCCESS, FETCH_NOTE_ERROR, FETCH_NOTE_PENDING, FETCH_NOTE_SUCCESS } from "./actions"

const { baseURL } = require("utils/constant")

const fetchNotes = () => async (dispatch) => {
	dispatch({ type: FETCH_NOTE_PENDING })
	try {
		const response = await axios.get(
			`${baseURL}/api/v1/notes`
		)
		dispatch({ type: FETCH_NOTES_SUCCESS, data: response.data })
	} catch (error) {
		console.log(error)
	}
}

const fetchNote = (id) => async (dispatch) => {
	dispatch({ type: FETCH_NOTE_PENDING })
	try {
		const response = await axios.get(
			`${baseURL}/api/v1/notes/${id}`
		)
		dispatch({ type: FETCH_NOTE_SUCCESS, data: response.data })
	} catch (error) {
		dispatch({ type: FETCH_NOTE_ERROR })
	}
}

const serviceCreateNote = (content, navigate) => async (dispatch) => {
	try {
		let { title, description } = content
		await axios.post(
			`${baseURL}/api/v1/notes/`, { title, description })
		navigate('/')
	} catch (error) {
		alert(error?.message || 'Error adding')
		console.log(error)
	}
}
const serviceUpdateNote = (id, content, navigate) => async (dispatch) => {
	try {
		let { title, description } = content
		await axios.patch(
			`${baseURL}/api/v1/notes/${id}`, { title, description })
		navigate('/')
	} catch (error) {
		alert(error?.message || 'Error update')
		console.log(error)
	}
}
const serviceDeleteNote = (id) => async (dispatch) => {
	try {
		await axios.delete(
			`${baseURL}/api/v1/notes/${id}`)
		dispatch({ type: DELETE_NOTE_SUCCESS, id })
	} catch (error) {
		alert(error?.message || 'Error delete')
		console.log(error)
	}
}

export { fetchNotes, fetchNote, serviceUpdateNote, serviceCreateNote, serviceDeleteNote }