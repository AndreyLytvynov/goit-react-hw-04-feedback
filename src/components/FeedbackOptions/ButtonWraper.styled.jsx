import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: 10px;
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: #293c70;
    cursor: pointer;
    :not(:last-child) {
      margin-right: 10px;
    }
    :hover {
      background-color: #2d4893;
    }
  }
`;
