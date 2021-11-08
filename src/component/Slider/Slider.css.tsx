import styled from 'styled-components';
import iconSlider from '../../assets/icon-slider.svg';

const height = '8px';
const thumbHeight = 40;
const trackColor = '#ECF0FB';
const thumbHoverColor = '#000000';

const makeLongShadow = (color: string, size: string) => {
  let i = 8;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export const Input = styled.input`
  display: block;
  appearance: none;
  width: 90%;
  margin: 0;
  height: ${height};
  cursor: pointer;
  border-radius: 50px;
  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${props => props.theme.palette.primary.softCyan};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${props => props.theme.palette.primary.strongCyan};
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(trackColor, '-15px')};
    transition: background-color 150ms;
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${props => props.theme.palette.primary.strongCyan};

    background-repeat: no-repeat;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${props => props.theme.palette.primary.softCyan};
  }

  &::-ms-fill-upper {
    background: ${props => props.theme.palette.neutral.lightGrayishBlue};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${props => props.theme.palette.primary.strongCyan};
    border-radius: 100%;
    border: 0;
    transition: ${props => props.theme.palette.neutral.lightGrayishBlue} 100ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

export const Div = styled.div`
  margin-top: 1rem;
  width: 60%;
  height: 5rem;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: visible;
  position: absolute;
  display: flex;
  align-items: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 40%;
  }
`;

export const VisuallyHiddenLabel = styled.label`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;
