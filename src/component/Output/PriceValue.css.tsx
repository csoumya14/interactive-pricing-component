import styled from 'styled-components';
export const Price = styled.span`
  color: ${props => props.theme.palette.neutral.darkDesaturatedBlue};
  font-size: 32px;
  line-height: 1em;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 40px;
  }
`;

export const YearOrMonth = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.theme.palette.neutral.grayishBlue};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 16px;
  }
`;
