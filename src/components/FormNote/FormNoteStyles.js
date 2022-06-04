import styled from 'styled-components'

export const FormNoteStyles = styled.div`
	padding: 2rem;
	background: white;
	border-radius: 4px;
	color: #1a1f36;
	box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
		rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;

	.col-25 {
		margin-bottom: 10px;
	}
	.col-75 {
		padding-bottom: 24px;
		input,
		textarea {
			font-size: 16px;
			line-height: 28px;
			padding: 8px 16px;
			width: 100%;
			min-height: 44px;
			border: unset;
			border-radius: 4px;
			outline-color: rgb(84 105 212 / 0.5);
			background-color: rgb(255, 255, 255);
			box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
				rgba(0, 0, 0, 0) 0px 0px 0px 0px,
				rgba(0, 0, 0, 0) 0px 0px 0px 0px,
				rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
				rgba(0, 0, 0, 0) 0px 0px 0px 0px,
				rgba(0, 0, 0, 0) 0px 0px 0px 0px,
				rgba(0, 0, 0, 0) 0px 0px 0px 0px;
		}
	}

	.btn-save,
	.btn-cacel {
		border: none;
		height: fit-content;
		position: relative;
		display: inline-block;
		padding: 8px 20px;
		border-radius: 5px;
		color: white;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		background-color: rgb(84, 105, 212);
		font-weight: 600;

		&:hover {
			cursor: pointer;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
			background: #fff;
			color: #000;
		}
	}
	.btn-cacel {
		margin-left: 10px;
		background: #e91e63;
	}
	.error-message {
		padding-top: 5px;
		color: #e91e63;
		font-size: 12px;
	}
`
