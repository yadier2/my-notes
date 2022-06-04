import styled from 'styled-components'

export const MinimalLayoutStyles = styled.div`
	.navbar {
		display: flex;
		padding: 0 5rem;
		box-shadow: 11px 1px 50px 8px rgba(0, 0, 0, 0.1);
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		z-index: 1000;
		background: #fff;
	}
	.logo {
		margin-top: 1rem;
		width: 8rem;
		object-fit: cover;
	}
	.title {
		width: 100%;
		align-items: center;
		display: flex;
		color: #c0a3e5;
		cursor: pointer;
	}
`
