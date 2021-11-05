import styled from 'styled-components';
import checkMark from '../../assets/icon-check.svg';

export const UnorderedList = styled.ul`
  list-style-image: url(${checkMark});
  text-align: center;
  color: #848ead;
  font-weight: 600;
  font-size: 12px;
  padding: 2em;
`;
export const ListItems = styled.li`
  padding: 0.5em;
`;
