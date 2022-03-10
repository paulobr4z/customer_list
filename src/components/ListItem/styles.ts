import styled, { css, CSSProp } from 'styled-components';

export const ListItemContainer = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 3fr 2fr 3fr 2fr auto;
	padding: 24px 32px;
	background: white;
	border-radius: 8px;
	margin-bottom: 8px;
	box-shadow: 0px 2px 4px rgba(28, 28, 40, 0.06);
	cursor: pointer;

	@media (max-width: 1024px) {
		grid-template-columns: 2fr 1fr;
		row-gap: 16px;
	}

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		row-gap: 16px;
	}

	span {
		display: flex;
		align-items: center;
		column-gap: 16px;
	}

	span:last-of-type {
		justify-content: space-between;
		width: 130px;
	}

	img  {
		border-radius: 50%;
		height: 40px;
		width: 40px;
	}

	.moreIcon {
		@media (max-width: 1024px) {
			display: none;
		}
	}
`;