import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.theme.palette.neutral.darkDesaturatedBlue};
  border-radius: 20.5px;
  font-size: 12px;
  padding: 1em 1em;
  width: 100%;
  color: ${props => props.theme.palette.neutral.lightGrayishBlue};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 14px;
  }
`;

export const ButtonDiv = styled.div`
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    align-self: center;
    width: 30%;
  }
`;
