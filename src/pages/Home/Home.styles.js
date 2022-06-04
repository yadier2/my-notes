import styled from 'styled-components'

export const HomeStyles = styled.main`
	width: 100%;
	text-align: center;
	margin-top: 2rem;

	.title-add {
		> h2 {
			margin: auto;
			width: fit-content;
			border: none;
			border-bottom: 2px dashed #888888;
			color: #888888;
			cursor: pointer;
		}
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.card {
		background: radial-gradient(#76b2fe, #b69efe);
		margin: 20px;
		padding: 20px;
		padding-bottom: 5px;
		width: 400px;
		min-height: 200px;
		display: grid;
		border-radius: 10px;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
		transition: all 0.2s;
		&:hover {
			cursor: pointer;
			box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
			transform: scale(1.01);
		}
		.card-head {
			color: #888888;
			font-size: 1.2rem;
			font-weight: 400;
		}
		.card-body {
			display: flex;
			align-content: center;
			width: 100%;
			font-weight: 400;
			color: #fff;
			>h2{
				margin: 0 auto;
			}
		}

		.card-actions {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			a {
				height: fit-content;
				position: relative;
				display: inline-block;
				padding: 8px 20px;
				border-radius: 5px;
				text-decoration: none;
				color: white;

				box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
				transition: 0.5s;

				&:hover {
					cursor: pointer;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
					background: #fff;
					color: #000;
				}
			}
			.card-edit {
				background: #2196f3;
			}
			.card-delete {
				background: #e91e63;
			}
		}
	}
	.no-notes {
		margin-top: 10rem;
		font-size: 1.5rem;
		font-weight: 400;
	}
`
