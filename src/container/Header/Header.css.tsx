import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  width: 90%;
  margin-top: 5rem;
  padding: 0.1rem;
`;

export const Heading = styled.h1`
  font-size: 20px;
  color: ${props => props.theme.palette.neutral.darkDesaturatedBlue};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 28px;
  }
`;

export const Para1 = styled.p`
  color: ${props => props.theme.palette.neutral.grayishBlue};
  font-size: 13px;
  line-height: 1.7em;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 15px;
  }
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
