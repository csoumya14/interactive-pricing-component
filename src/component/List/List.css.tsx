import styled from 'styled-components';
import checkMark from '../../assets/icon-check.svg';

export const UnorderedList = styled.ul`
  list-style-image: url(${checkMark});
  text-align: center;
  color: ${props => props.theme.palette.neutral.grayishBlue};
  font-weight: 600;
  font-size: 12px;
  padding: 2em;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 14px;
  }
`;
export const ListItems = styled.li`
  padding: 0.5em;
`;
