import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  width: 90%;
  margin-top: 89px;

  padding: 0.1rem;
  font-family: 'Manrope', sans-serif;
`;

export const Heading = styled.h1`
  font-size: 20px;
  color: #293356;
`;

export const Para1 = styled.p`
  color: #848ead;
  font-size: 13px;
  line-height: 1.7em;
`;

export const Para2 = styled(Para1)`
  margin-top: -1em;
`;

export const ParaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
