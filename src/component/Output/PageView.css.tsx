import styled from 'styled-components';

export const Output = styled.output`
  font-size: 12px;
  font-weight: 800;
  color: ${props => props.theme.palette.neutral.grayishBlue};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 14px;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    margin-top: 0rem;
    align-self: flex-start;
  }
`;
