import styled from 'styled-components';
import iconSlider from '../../assets/icon-slider.svg';

const height = '8px';
const thumbHeight = 40;
const trackHeight = '8px';

// colours
const trackColor = '#ECF0FB';
const fillColor = '#A4F3EB';
const thumbColor = '#10D8C4';
const thumbHoverColor = '#000000';
const upperBackground = `linear-gradient(to bottom, ${trackColor}, ${trackColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${fillColor}, ${fillColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

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

  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
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
    background: ${thumbColor};

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
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};

    border-radius: 100%;
    border: 0;
    transition: ${upperBackground} 100ms;
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
  width: 90%;
  height: 5rem;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: visible;
  display: flex;
  align-items: center;
`;
