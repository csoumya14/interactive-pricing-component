import styled from 'styled-components';
import circularPatterns from '../../assets/pattern-circles.svg';

export const Div = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #f1f5fe;
  position: absolute;
  background-image: url(${circularPatterns});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  top: 0px;
  z-index: -1;
  border-bottom-left-radius: 30%;
`;
