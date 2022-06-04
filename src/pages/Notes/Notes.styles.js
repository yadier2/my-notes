import styled from 'styled-components'

export const NoteStyles = styled.div`
	max-width: 500px;
	margin: 2rem auto;
	position: relative;
	.title {
		display: flex;
		justify-content: center;
		padding: 20px;
		color: #1a1f36;
	}
	.back {
		position: absolute;
		right: 0;
		font-size: 18px;
		font-weight: 500;
		color: #e91e63;
		cursor: pointer;
		padding: 10px;
	}

	.date {
		margin-top: 5px;
		color: hsl(229, 6%, 66%);
	}

	.description {
		color: hsl(234, 12%, 34%);
		margin-top: 20px;
		font-size: 18px;
	}
`
