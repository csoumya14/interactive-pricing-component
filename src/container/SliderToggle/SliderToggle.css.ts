import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60%;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: 50%;
  }
`;

export const Form = styled.form`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  justify-content: space-between;
  background: #fff;
  padding: 2.2rem;
`;

export const LineDiv = styled.div`
  border-top: 1px solid #979797;
  width: 90vw;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60vw;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: 50vw;
  }
`;
