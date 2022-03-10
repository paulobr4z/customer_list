import styled, { css, CSSProp } from 'styled-components';

export const CustomerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  h1 {
		font-size: 32px;
    margin-top: 48px;
		margin-bottom: 32px;
    font-weight: 700;
	}

  header {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 2fr 3fr 2fr 130px;
    padding: 8px 32px;
    background: white;
    margin-bottom: 8px;
    font-weight: bold;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;