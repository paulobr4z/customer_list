import styled, { css, CSSProp } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 16px;
  margin: 32px 0;

  @media (max-width: 500px) {
    column-gap: 8px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;

    @media (max-width: 500px) {
      height: 30px;
      width: 30px;
      font-size: 14px;
    }
  }

  .selected {
    color: white;
    background: black;
  }
`;