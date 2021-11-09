import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  width: 100%;
  margin-top: 5rem;
  padding: 0.1rem;

  margin-left: 0rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
  }
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
    margin-top: 0em;
  }
`;

export const Para2 = styled(Para1)`
  margin-top: -0.5em;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    margin-top: 0em;
  }
`;

export const ParaDiv = styled.div`
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-direction: row;
    justify-content: center;
  }
`;
