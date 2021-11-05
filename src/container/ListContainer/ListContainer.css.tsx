import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
